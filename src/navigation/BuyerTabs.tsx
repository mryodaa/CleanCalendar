import React, {useContext} from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import BuyerStack from './BuyerStack';
import CartScreen from '../screens/CartScreen';
import CatalogStack from './CatalogStack';
import DiscountedProductsScreen from '../screens/DiscountProductsScreen'; // Новый экран
import {ThemeContext} from '../contexts/ThemeContext';
import {CartContext} from '../contexts/CartContext';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BuyerTabBar = (props: any) => {
  const {getTotal} = useContext(CartContext);
  const {colors} = useContext(ThemeContext);

  return (
    <View>
      <View
        style={[
          styles.totalContainer,
          {backgroundColor: colors.background, borderColor: colors.button},
        ]}>
        <Text style={[styles.totalText, {color: colors.text}]}>
          Общая сумма:{' '}
          {new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
          }).format(getTotal())}
        </Text>
      </View>
      <BottomTabBar {...props} />
    </View>
  );
};

const BuyerTabs = () => {
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

          if (route.name === 'ShopStack') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Discounts') {
            iconName = focused ? 'pricetag' : 'pricetag-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBar={props => <BuyerTabBar {...props} />}>
      <Tab.Screen
        name="ShopStack"
        component={BuyerStack}
        options={{title: 'Магазин'}}
      />
      <Tab.Screen
        name="Categories"
        component={CatalogStack}
        options={{title: 'Категории'}}
      />
      <Tab.Screen
        name="Discounts"
        component={DiscountedProductsScreen} // Добавленная вкладка
        options={{title: 'Скидки'}}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{title: 'Корзина'}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  totalContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    borderTopWidth: 1,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BuyerTabs;
