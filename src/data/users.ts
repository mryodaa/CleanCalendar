import {User} from './types';

export const users: User[] = [
  {
    id: 'user1',
    fullName: 'Иван Иванов',
    accountNumber: 'KZ123456789012345678',
    balance: 250000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '4400 1234 5678 9010',
        cvv: '123',
        expiry: '12/27',
        type: 'debit',
      },
      {
        cardNumber: '5200 9876 5432 1011',
        cvv: '456',
        expiry: '05/26',
        type: 'credit',
      },
    ],
    login: 'ivanov',
    password: '123456',
  },
  {
    id: 'user2',
    fullName: 'Алексей Смирнов',
    accountNumber: 'KZ876543210987654321',
    balance: 180000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '5500 1111 2222 3333',
        cvv: '789',
        expiry: '09/25',
        type: 'debit',
      },
    ],
    login: 'smirnov',
    password: '123456',
  },
];
