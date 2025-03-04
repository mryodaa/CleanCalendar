import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AccountsScreen from '../screens/AccountsScreen';
import {ThemeContext} from '../contexts/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  const {colors} = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {backgroundColor: colors.background},
        tabBarActiveTintColor: colors.button,
        tabBarInactiveTintColor: colors.text,
        tabBarIcon: ({color, size}) => {
          let iconName = '';

          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Accounts') iconName = 'card-outline';

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Главная'}}
      />
      <Tab.Screen
        name="Accounts"
        component={AccountsScreen}
        options={{title: 'Карты и счета'}}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
