import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CalendarScreen from '../screens/CalendarScreen';
import TaskListScreen from '../screens/TaskListScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import StatsScreen from '../screens/StatsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title: 'Календарь',
          headerTitle: 'Календарь уборок',
          tabBarIcon: ({color, size}) => (
            <Icon name="calendar-month" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={TaskListScreen}
        options={{
          title: 'Уборки',
          tabBarIcon: ({color, size}) => (
            <Icon name="broom" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddTaskScreen}
        options={{
          title: 'Запланировать',
          tabBarIcon: ({color, size}) => (
            <Icon name="plus-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={StatsScreen}
        options={{
          title: 'Статистика',
          tabBarIcon: ({color, size}) => (
            <Icon name="chart-bar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Настройки',
          tabBarIcon: ({color, size}) => (
            <Icon name="cog-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
