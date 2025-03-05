import React, {createContext, useState, useEffect, ReactNode} from 'react';
import {MMKV} from 'react-native-mmkv';
import {User, Card} from '../data/types';
import {users as defaultUsers} from '../data/users'; // ✅ Статические пользователи

// Инициализация хранилища
const storage = new MMKV();

interface AuthContextProps {
  user: User | null;
  isAuthorized: boolean;
  login: (identifier: string, password: string) => boolean;
  verifyPin: (pin: string) => boolean;
  register: (newUser: User, pin: string) => boolean;
  logout: () => void;
  addCard: (newCard: Card) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  isAuthorized: false,
  login: () => false,
  verifyPin: () => false,
  register: () => false,
  logout: () => {},
  addCard: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  // 📌 Загрузка пользователей при старте приложения
  useEffect(() => {
    let storedUsers: User[] = [];
    let usersFromStorage = storage.getString('users');

    try {
      storedUsers = usersFromStorage ? JSON.parse(usersFromStorage) : [];
    } catch (error) {
      console.error('Ошибка загрузки пользователей:', error);
    }

    // Если MMKV пусто, загружаем пользователей из users.ts
    if (storedUsers.length === 0) {
      storage.set('users', JSON.stringify(defaultUsers));
      storedUsers = [...defaultUsers];
    }

    // Проверяем, был ли сохранен последний вошедший пользователь
    const loggedUserId = storage.getString('loggedUser');
    if (loggedUserId) {
      const foundUser = storedUsers.find(u => u.id === loggedUserId);
      if (foundUser) {
        setUser(foundUser);
        setIsAuthorized(false); // Требуем ввод PIN
      }
    }
  }, []);

  // 🔹 Логин (ищет пользователя в users.ts + MMKV)
  const login = (identifier: string, password: string) => {
    const storedUsers = storage.getString('users');
    if (!storedUsers) return false;

    try {
      const usersArray: User[] = JSON.parse(storedUsers);
      const foundUser = usersArray.find(
        u =>
          (u.login === identifier || u.email === identifier) &&
          u.password === password,
      );

      if (foundUser) {
        setUser(foundUser);
        setIsAuthorized(false);
        storage.set('loggedUser', foundUser.id);
        return true;
      }
    } catch (error) {
      console.error('Ошибка логина:', error);
    }
    return false;
  };

  // 🔹 Верификация PIN-кода
  const verifyPin = (pin: string) => {
    if (user && user.pin === pin) {
      setIsAuthorized(true);
      return true;
    }
    return false;
  };

  // 🔹 Регистрация (добавляет пользователя в MMKV)
  const register = (newUser: User, pin: string) => {
    let storedUsers: User[] = [];
    const usersFromStorage = storage.getString('users');

    if (usersFromStorage) {
      try {
        storedUsers = JSON.parse(usersFromStorage);
      } catch (error) {
        console.error('Ошибка чтения пользователей:', error);
      }
    }

    // Проверка уникальности логина/почты
    const isUserExist = storedUsers.some(
      u => u.login === newUser.login || u.email === newUser.email,
    );
    if (isUserExist) return false;

    // Формируем PIN и ФИО
    newUser.pin = pin;
    newUser.fullName = `${newUser.surname} ${newUser.name} ${newUser.patronymic}`;

    // Добавляем нового пользователя в массив
    storedUsers.push(newUser);
    storage.set('users', JSON.stringify(storedUsers));
    storage.set('loggedUser', newUser.id);

    setUser(newUser);
    setIsAuthorized(false);

    console.log('✅ Сохраненные пользователи:', storage.getString('users'));
    return true;
  };

  // 🔹 Добавление карты
  const addCard = (newCard: Card) => {
    if (user) {
      const updatedUser = {...user, cards: [...user.cards, newCard]};

      try {
        const storedUsers = storage.getString('users');
        if (!storedUsers) return;

        let usersArray: User[] = JSON.parse(storedUsers);
        usersArray = usersArray.map(u => (u.id === user.id ? updatedUser : u));

        storage.set('users', JSON.stringify(usersArray));
        storage.set('loggedUser', user.id);

        setUser(updatedUser);
      } catch (error) {
        console.error('Ошибка сохранения карты:', error);
      }
    }
  };

  // 🔹 Выход
  const logout = () => {
    setUser(null);
    setIsAuthorized(false);
    storage.delete('loggedUser');
  };

  return (
    <AuthContext.Provider
      value={{user, isAuthorized, login, verifyPin, register, logout, addCard}}>
      {children}
    </AuthContext.Provider>
  );
};
