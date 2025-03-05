import React, {createContext, useState, useEffect, ReactNode} from 'react';
import {MMKV} from 'react-native-mmkv';
import {users} from '../data/users'; // Подключаем массив пользователей
import {User} from '../data/types';

// Хранилище для кэша пользователя
const storage = new MMKV();

interface AuthContextProps {
  user: User | null;
  isAuthorized: boolean;
  login: (identifier: string, password: string) => boolean;
  verifyPin: (pin: string) => boolean;
  register: (newUser: User, pin: string) => boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  isAuthorized: false,
  login: () => false,
  verifyPin: () => false,
  register: () => false,
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  useEffect(() => {
    // Проверяем, был ли пользователь ранее авторизован
    const storedUser = storage.getString('user');
    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsAuthorized(false); // После перезапуска приложения требуем ввод PIN
    }
  }, []);

  // Логин по логину или email + пароль
  const login = (identifier: string, password: string) => {
    const foundUser = users.find(
      u =>
        (u.login === identifier || u.email === identifier) &&
        u.password === password,
    );

    if (foundUser) {
      setUser(foundUser);
      setIsAuthorized(false); // После логина требуется верификация PIN-кодом
      storage.set('user', JSON.stringify(foundUser)); // Запоминаем пользователя
      return true;
    }
    return false;
  };

  // Верификация PIN-кодом
  const verifyPin = (pin: string) => {
    if (user && user.pin === pin) {
      setIsAuthorized(true); // Разрешаем доступ к личным данным
      return true;
    }
    return false;
  };

  // Регистрация нового пользователя с установкой PIN-кода
  const register = (newUser: User, pin: string) => {
    // Устанавливаем заданный PIN-код для нового пользователя
    newUser.pin = pin;
    // Можно добавить валидацию и проверку на существование пользователя здесь
    setUser(newUser);
    setIsAuthorized(false); // После регистрации требуется верификация PIN-кодом
    storage.set('user', JSON.stringify(newUser));
    return true;
  };

  // Выход из аккаунта
  const logout = () => {
    setUser(null);
    setIsAuthorized(false);
    storage.delete('user'); // Удаляем данные пользователя при выходе
  };

  return (
    <AuthContext.Provider
      value={{user, isAuthorized, login, verifyPin, register, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
