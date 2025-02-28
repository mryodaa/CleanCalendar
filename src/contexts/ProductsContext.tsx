import React, {createContext, useState, useEffect, ReactNode} from 'react';
import {MMKV} from 'react-native-mmkv';
import {Product} from '../data/types';
import {products as defaultProducts} from '../data/products'; // Импортируем JSON-товары

// Инициализация MMKV
const storage = new MMKV();

interface ProductsContextProps {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (updatedProduct: Product) => void;
  removeProduct: (productId: string) => void;
}

export const ProductsContext = createContext<ProductsContextProps>({
  products: [],
  addProduct: () => {},
  updateProduct: () => {},
  removeProduct: () => {},
});

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsProvider = ({children}: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  // Загружаем товары из MMKV + добавляем стандартные товары
  useEffect(() => {
    const loadProducts = () => {
      const storedProducts = storage.getString('products');
      const parsedProducts: Product[] = storedProducts
        ? JSON.parse(storedProducts)
        : [];

      // 🛑 Загружаем `defaultProducts`, но без тех, которые уже были удалены пользователем
      const deletedProductsIds = storage.getString('deletedProducts');
      const deletedIds: string[] = deletedProductsIds
        ? JSON.parse(deletedProductsIds)
        : [];

      const filteredDefaults = defaultProducts.filter(
        p => !deletedIds.includes(p.id),
      );

      // 🔥 Объединяем товары из JSON и сохраненные
      const combinedProducts = [...filteredDefaults, ...parsedProducts];

      console.log('📦 Загруженные товары:', combinedProducts);
      setProducts(combinedProducts);
    };

    loadProducts();
  }, []);

  // Обновляем MMKV при каждом изменении списка товаров
  useEffect(() => {
    const userProducts = products.filter(
      p => !defaultProducts.some(d => d.id === p.id),
    );
    storage.set('products', JSON.stringify(userProducts));
  }, [products]);

  // Добавляем товар (не дублируем стандартные)
  const addProduct = (product: Product) => {
    setProducts(prev => [...prev, product]);
  };

  // Обновляем товар
  const updateProduct = (updatedProduct: Product) => {
    setProducts(prev =>
      prev.map(prod => (prod.id === updatedProduct.id ? updatedProduct : prod)),
    );
  };

  // Удаляем товар (если он стандартный, сохраняем его ID в "deletedProducts")
  const removeProduct = (productId: string) => {
    setProducts(prev => {
      const updatedProducts = prev.filter(product => product.id !== productId);

      // 🛑 Если товар из `defaultProducts`, добавляем его ID в "deletedProducts"
      if (defaultProducts.some(p => p.id === productId)) {
        const deletedProductsIds = storage.getString('deletedProducts');
        const deletedIds: string[] = deletedProductsIds
          ? JSON.parse(deletedProductsIds)
          : [];
        deletedIds.push(productId);
        storage.set('deletedProducts', JSON.stringify(deletedIds));
      }

      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider
      value={{products, addProduct, updateProduct, removeProduct}}>
      {children}
    </ProductsContext.Provider>
  );
};
