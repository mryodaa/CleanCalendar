import React, {useContext} from 'react';
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
import {AuthProvider, AuthContext} from './src/contexts/AuthContext';
import RoleSelectionScreen from './src/screens/RoleSelectionScreen';
import BuyerTabs from './src/navigation/BuyerTabs';
import SellerTabs from './src/navigation/SellerTabs';
import ProductDetail from './src/screens/ProductDetail';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import HomeScreen from './src/screens/HomeScreen';
import MainTabs from './src/navigation/MainTabs';
import PinScreen from './src/screens/PinScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const {theme} = useContext(ThemeContext);
  const {user, isAuthorized} = useContext(AuthContext);

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        {!user ? (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{title: 'Вход', headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{title: 'Регистрация'}}
            />
          </>
        ) : !isAuthorized ? (
          <Stack.Screen
            name="PinScreen"
            component={PinScreen}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name="MainTabs"
              component={MainTabs}
              options={{headerShown: false}}
            />
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
              name="Checkout"
              component={CheckoutScreen}
              options={{title: 'Оформление заказа'}}
            />
          </>
        )}
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
