// src/navigation/MainStack.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import EditTaskScreen from '../screens/EditTaskScreen';
import {Task} from '../data/types';

export type RootStackParamList = {
  Tabs: undefined;
  EditTask: {task: Task};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditTask"
        component={EditTaskScreen}
        options={{title: 'Редактирование'}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
