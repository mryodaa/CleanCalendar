import React, {useContext} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {ThemeProvider, ThemeContext} from './src/contexts/ThemeContext';
import BottomTabs from './src/navigation/BottomTabs';
import {TaskProvider} from './src/contexts/TaskContext';

const AppNavigator = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <BottomTabs />
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
