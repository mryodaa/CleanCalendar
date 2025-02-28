import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SellerHome from '../screens/SellerHome';
import SellerProductDetail from '../screens/SellerProductDetail';

export type SellerStackParamList = {
  SellerHome: undefined;
  SellerProductDetail: {product: {id: string; name: string; price: number}};
};

const Stack = createNativeStackNavigator<SellerStackParamList>();

const SellerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SellerHome"
        component={SellerHome}
        options={{title: 'Товары'}}
      />
      <Stack.Screen
        name="SellerProductDetail"
        component={SellerProductDetail}
        options={{title: 'Карточка товара'}}
      />
    </Stack.Navigator>
  );
};

export default SellerStack;
