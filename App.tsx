import React, {useContext, useEffect} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {ThemeProvider, ThemeContext} from './src/contexts/ThemeContext';
import BottomTabs from './src/navigation/BottomTabs';
import {TaskProvider} from './src/contexts/TaskContext';
import notifee, {AndroidImportance} from '@notifee/react-native';
import MainStack from './src/navigation/MainStack';

const AppNavigator = () => {
  const {theme} = useContext(ThemeContext);
  useEffect(() => {
    async function setupNotifications() {
      await notifee.requestPermission();

      await notifee.createChannel({
        id: 'default',
        name: 'Уведомления задач',
        importance: AndroidImportance.HIGH,
      });
    }

    setupNotifications();
  }, []);

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <MainStack />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <TaskProvider>
        <AppNavigator />
      </TaskProvider>
    </ThemeProvider>
  );
};

export default App;
