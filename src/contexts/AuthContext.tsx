import React, {createContext, useState, useEffect, ReactNode} from 'react';
import {MMKV} from 'react-native-mmkv';

// Хранилище для кэша пользователя
const storage = new MMKV();

interface User {
  username: string;
  email: string;
}

interface AuthContextProps {
  user: User | null;
  login: (identifier: string, password: string) => boolean;
  register: (username: string, email: string, password: string) => boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: () => false,
  register: () => false,
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Проверяем, был ли пользователь ранее авторизован
    const storedUser = storage.getString('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (identifier: string, password: string) => {
    const storedUsers = storage.getString('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    const foundUser = users.find(
      (u: {username: string; email: string; password: string}) =>
        (u.username === identifier || u.email === identifier) &&
        u.password === password,
    );

    if (foundUser) {
      const loggedInUser = {
        username: foundUser.username,
        email: foundUser.email,
      };
      setUser(loggedInUser);
      storage.set('user', JSON.stringify(loggedInUser)); // Запоминаем вход
      return true;
    }
    return false;
  };

  const register = (username: string, email: string, password: string) => {
    const storedUsers = storage.getString('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    if (
      users.some(
        (u: {username: string; email: string}) =>
          u.username === username || u.email === email,
      )
    ) {
      return false; // Ошибка: пользователь уже существует
    }

    const newUser = {username, email, password};
    const updatedUsers = [...users, newUser];

    storage.set('users', JSON.stringify(updatedUsers));

    // Автоматический вход после регистрации
    const loggedInUser = {username, email};
    setUser(loggedInUser);
    storage.set('user', JSON.stringify(loggedInUser));

    return true;
  };

  const logout = () => {
    setUser(null);
    storage.delete('user'); // Удаляем данные пользователя при выходе
  };

  return (
    <AuthContext.Provider value={{user, login, register, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
