import React, {createContext, useState, useEffect, ReactNode} from 'react';
import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

interface User {
  username: string;
  email: string;
  token: string;
  expiresAt: number; // Время истечения сессии
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
    const storedUser = storage.getString('user');
    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser);
      if (parsedUser.expiresAt > Date.now()) {
        setUser(parsedUser);
      } else {
        storage.delete('user');
      }
    }
  }, []);

  const login = (identifier: string, password: string) => {
    const storedUsers = storage.getString('users');
    const users: User[] = storedUsers ? JSON.parse(storedUsers) : [];

    const foundUser = users.find(
      u =>
        (u.username === identifier || u.email === identifier) &&
        u.token === password,
    );

    if (foundUser) {
      const session = {...foundUser, expiresAt: Date.now() + 60 * 60 * 1000}; // 1 час
      storage.set('user', JSON.stringify(session));
      setUser(session);
      return true;
    }

    return false;
  };

  const register = (username: string, email: string, password: string) => {
    const storedUsers = storage.getString('users');
    const users: User[] = storedUsers ? JSON.parse(storedUsers) : [];

    if (users.some(u => u.username === username || u.email === email)) {
      return false;
    }

    const newUser: User = {username, email, token: password, expiresAt: 0};
    users.push(newUser);
    storage.set('users', JSON.stringify(users));
    return true;
  };

  const logout = () => {
    storage.delete('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{user, login, register, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
