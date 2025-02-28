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

export type ThemeType = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  text: string;
  button: string;
  buttonText: string;
}
