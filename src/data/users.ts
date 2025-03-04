import {User} from './types';

export const users: User[] = [
  {
    id: '1',
    fullName: 'Иванов Иван Иванович',
    username: 'ivanov',
    email: 'ivanov@example.com',
    accountNumber: 'KZ123456789012345678',
    balance: 500000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '1234 5678 9012 3456',
        expiry: '12/26',
        cvv: '123',
        type: 'debit',
      },
      {
        cardNumber: '9876 5432 1098 7654',
        expiry: '08/25',
        cvv: '456',
        type: 'credit',
      },
    ],
    login: 'ivanov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '2',
    fullName: 'Петров Петр Петрович',
    username: 'petrov',
    email: 'petrov@example.com',
    accountNumber: 'KZ987654321098765432',
    balance: 250000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '1111 2222 3333 4444',
        expiry: '06/27',
        cvv: '789',
        type: 'debit',
      },
    ],
    login: 'petrov',
    password: '123456',
    pin: '2222',
    isAuthorized: false,
  },
];
