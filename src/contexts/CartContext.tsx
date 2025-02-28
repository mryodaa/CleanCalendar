import React, {createContext, useState, useEffect, ReactNode} from 'react';
import {MMKV} from 'react-native-mmkv';
import {Product, CartItem} from '../data/types';
import {Alert} from 'react-native';

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

  // Добавляет товар в корзину (но не больше, чем есть в наличии)
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        if (existing.quantity >= product.stock) {
          Alert.alert('Ошибка: На складе недостаточно товара!');
          return prev;
        }
        return prev.map(item =>
          item.id === product.id
            ? {...item, quantity: item.quantity + 1}
            : item,
        );
      } else {
        return product.stock > 0 ? [...prev, {...product, quantity: 1}] : prev;
      }
    });
  };

  // Удаляет товар из корзины
  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  // Обновляет количество товара (не может превышать `stock`)
  const updateQuantity = (productId: string, quantity: number) => {
    setCart(prev =>
      prev.map(item => {
        if (item.id === productId) {
          const maxQuantity = Math.min(quantity, item.stock);
          return {...item, quantity: maxQuantity};
        }
        return item;
      }),
    );
  };

  // Подсчитывает итоговую сумму товаров в корзине с учетом скидки
  const getTotal = () => {
    return cart.reduce((sum, item) => {
      const discountedPrice = item.discount
        ? item.price - (item.price * item.discount) / 100
        : item.price;
      return sum + (discountedPrice || 0) * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{cart, addToCart, removeFromCart, updateQuantity, getTotal}}>
      {children}
    </CartContext.Provider>
  );
};
