import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider, ThemeContext} from './src/contexts/ThemeContext';
import {ProductsProvider} from './src/contexts/ProductsContext';
import {CartProvider} from './src/contexts/CartContext';
import {CategoriesProvider} from './src/contexts/CategoriesContext';
import {AuthProvider} from './src/contexts/AuthContext';
import RoleSelectionScreen from './src/screens/RoleSelectionScreen';
import BuyerTabs from './src/navigation/BuyerTabs';
import SellerTabs from './src/navigation/SellerTabs';
import ProductDetail from './src/screens/ProductDetail';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const {theme} = React.useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="RoleSelection">
        <Stack.Screen
          name="RoleSelection"
          component={RoleSelectionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BuyerFlow"
          component={BuyerTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SellerFlow"
          component={SellerTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{title: 'Детали товара'}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Вход'}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{title: 'Регистрация'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <CategoriesProvider>
          <ProductsProvider>
            <CartProvider>
              <AppNavigator />
            </CartProvider>
          </ProductsProvider>
        </CategoriesProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
