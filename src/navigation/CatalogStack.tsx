// src/navigation/CategoriesStack.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import SubcategoriesScreen from '../screens/SubcategoriesScreen';
import FilteredProductsScreen from '../screens/FilteredProductsScreen';
import ProductDetail from '../screens/ProductDetail';

export type CategoriesStackParamList = {
  CategoryList: undefined; // переименовали экран "Categories" в "CategoryList"
  Subcategories: {category: any};
  FilteredProducts: {categoryId: string};
  ProductDetail: {product: any};
};

const Stack = createNativeStackNavigator<CategoriesStackParamList>();

const CategoriesStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CategoryList" component={CategoriesScreen} />
      <Stack.Screen name="Subcategories" component={SubcategoriesScreen} />
      <Stack.Screen
        name="FilteredProducts"
        component={FilteredProductsScreen}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerShown: true,
          title: 'Детали товара',
        }}
      />
    </Stack.Navigator>
  );
};

export default CategoriesStack;
