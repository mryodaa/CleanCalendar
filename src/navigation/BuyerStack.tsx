// src/navigation/BuyerStack.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BuyerHome from '../screens/BuyerHome';
import ProductDetail from '../screens/ProductDetail';
import SubcategoriesScreen from '../screens/SubcategoriesScreen';
import FilteredProductsScreen from '../screens/FilteredProductsScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

export type BuyerStackParamList = {
  BuyerHome: undefined;
  ProductDetail: {product: any};
  Subcategories: {category: any};
  FilteredProducts: {categoryId: string};
  Checkout: undefined;
};

const Stack = createNativeStackNavigator<BuyerStackParamList>();

const BuyerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BuyerHome"
        component={BuyerHome}
        options={{title: 'Магазин'}}
      />
      <Stack.Screen
        name="Subcategories"
        component={SubcategoriesScreen}
        options={{title: 'Подкатегории'}}
      />
      <Stack.Screen
        name="FilteredProducts"
        component={FilteredProductsScreen}
        options={{title: 'Товары'}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          title: 'Детали товара',
        }}
      />
    </Stack.Navigator>
  );
};

export default BuyerStack;
