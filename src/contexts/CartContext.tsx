import React, {createContext, useState, useEffect, ReactNode} from 'react';
import {MMKV} from 'react-native-mmkv';

import {Product, CartItem} from '../data/types';

// Инициализация MMKV
const storage = new MMKV();

interface CartContextProps {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  getTotal: () => number;
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  getTotal: () => 0,
});

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({children}: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Загружаем корзину из MMKV при старте
  useEffect(() => {
    const loadCart = () => {
      const storedCart = storage.getString('cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    };

    loadCart();
  }, []);

  // Сохраняем корзину в MMKV при каждом изменении cart
  useEffect(() => {
    storage.set('cart', JSON.stringify(cart));
  }, [cart]);

  // Добавляет товар в корзину (или увеличивает количество)
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? {...item, quantity: item.quantity + 1}
            : item,
        );
      } else {
        return [...prev, {...product, quantity: 1}];
      }
    });
  };

  // Удаляет товар из корзины
  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  // Обновляет количество товара (если 0, удаляет)
  const updateQuantity = (productId: string, quantity: number) => {
    setCart(prev =>
      quantity <= 0
        ? prev.filter(item => item.id !== productId)
        : prev.map(item =>
            item.id === productId ? {...item, quantity} : item,
          ),
    );
  };

  // Подсчитывает итоговую сумму товаров в корзине
  const getTotal = () => {
    return cart.reduce(
      (sum, item) => sum + (item.price || 0) * item.quantity,
      0,
    );
  };

  return (
    <CartContext.Provider
      value={{cart, addToCart, removeFromCart, updateQuantity, getTotal}}>
      {children}
    </CartContext.Provider>
  );
};
