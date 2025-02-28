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
import RoleSelectionScreen from './src/screens/RoleSelectionScreen';
import BuyerTabs from './src/navigation/BuyerTabs';
import SellerTabs from './src/navigation/SellerTabs';
import ProductDetail from './src/screens/ProductDetail';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <CategoriesProvider>
        <ProductsProvider>
          <CartProvider>
            <AppNavigator />
          </CartProvider>
        </ProductsProvider>
      </CategoriesProvider>
    </ThemeProvider>
  );
};

export default App;
