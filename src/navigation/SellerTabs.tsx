import React, {useContext, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SellerStack from './SellerStack';
import AddProductScreen from '../screens/AddProductScreen';
import SettingsScreen from '../screens/SettingsScreen'; // ✅ Импортируем вынесенный экран
import {ThemeContext} from '../contexts/ThemeContext';
import {AuthContext} from '../contexts/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const SellerTabs = ({navigation}: any) => {
  const {colors} = useContext(ThemeContext);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      navigation.replace('Login');
    }
  }, [user]);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {backgroundColor: colors.button},
        tabBarActiveTintColor: colors.buttonText,
        tabBarInactiveTintColor: colors.text,
        tabBarIcon: ({color, size}) => {
          let iconName = '';

          if (route.name === 'Products') iconName = 'list';
          else if (route.name === 'AddProduct') iconName = 'add-circle';
          else if (route.name === 'Settings') iconName = 'settings';

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Products"
        component={SellerStack}
        options={{title: 'Товары'}}
      />
      <Tab.Screen
        name="AddProduct"
        component={AddProductScreen}
        options={{title: 'Добавить товар'}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{title: 'Настройки'}}
      />
    </Tab.Navigator>
  );
};

export default SellerTabs;
