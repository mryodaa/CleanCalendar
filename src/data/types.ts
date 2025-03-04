// PRODUCTS
export interface Product {
  id: string;
  name: string;
  description?: string;
  image?: string;
  price: number;
  stock: number;
  discount: number;
  categoryId: string; // 👈 Теперь это обязательное поле!
}

// Подкатегория НЕ содержит товары, а только ID товаров
export interface Subcategory {
  id: string;
  name: string;
  image?: string;
}

// Категория содержит только подкатегории
export interface Category {
  id: string;
  name: string;
  image?: string;
  subcategories?: Subcategory[];
}

export interface CartItem extends Product {
  quantity: number;
}

// THEME
export type ThemeType = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  text: string;
  button: string;
  buttonText: string;
}

// BANK
export interface Card {
  cardNumber: string;
  cvv: string;
  expiry: string;
  type: 'debit' | 'credit';
}

export interface Banner {
  id: string;
  image: string;
  title: string;
  description: string;
  actionText: string;
  link: string;
}

export interface User {
  id: string;
  fullName: string;
  accountNumber: string;
  balance: number;
  currency: 'KZT';
  cards: Card[];
  login: string;
  password: string;
}
