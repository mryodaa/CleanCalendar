// src/navigation/SellerTabs.tsx
import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SellerStack from './SellerStack'; // заменяем SellerHome на SellerStack
import AddProductScreen from '../screens/AddProductScreen';
import {ThemeContext} from '../contexts/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const SellerTabs = () => {
  const {colors} = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {backgroundColor: colors.button},
        tabBarActiveTintColor: colors.buttonText,
        tabBarInactiveTintColor: colors.text,
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';

          if (route.name === 'Products') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'AddProduct') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Products"
        component={SellerStack} // Используем стек, содержащий SellerHome и SellerProductDetail
        options={{title: 'Товары'}}
      />
      <Tab.Screen
        name="AddProduct"
        component={AddProductScreen}
        options={{title: 'Добавить товар'}}
      />
    </Tab.Navigator>
  );
};

export default SellerTabs;
