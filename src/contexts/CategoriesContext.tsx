import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {MMKV} from 'react-native-mmkv';
import {categories as defaultCategories} from '../data/categories';
import {Category} from '../data/types';

// Инициализация MMKV
const storage = new MMKV();

interface CategoriesContextProps {
  categories: Category[];
  getCategoryById: (id: string) => Category | undefined;
}

export const CategoriesContext = createContext<CategoriesContextProps>({
  categories: [],
  getCategoryById: () => undefined,
});

interface CategoriesProviderProps {
  children: ReactNode;
}

export const CategoriesProvider = ({children}: CategoriesProviderProps) => {
  const [categories, setCategories] = useState<Category[]>([]);

  // Загружаем категории из MMKV и объединяем с defaultCategories
  useEffect(() => {
    const loadCategories = () => {
      const storedCategories = storage.getString('categories');
      const parsedStoredCategories: Category[] = storedCategories
        ? JSON.parse(storedCategories)
        : [];

      // Объединяем данные: сначала загруженные, потом дефолтные, чтобы не дублировать
      const mergedCategories = [
        ...parsedStoredCategories,
        ...defaultCategories.filter(
          cat => !parsedStoredCategories.some(sc => sc.id === cat.id),
        ),
      ];

      setCategories(mergedCategories);
    };

    loadCategories();
  }, []);

  // Функция поиска категории по ID
  const getCategoryById = (id: string): Category | undefined => {
    return (
      categories.find(cat => cat.id === id) ||
      categories
        .flatMap(cat => cat.subcategories || [])
        .find(sub => sub.id === id)
    );
  };

  return (
    <CategoriesContext.Provider value={{categories, getCategoryById}}>
      {children}
    </CategoriesContext.Provider>
  );
};

