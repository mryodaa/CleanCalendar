import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {ThemeContext} from '../contexts/ThemeContext';
import {CartContext} from '../contexts/CartContext';
import {ProductsContext} from '../contexts/ProductsContext';
import getFormattedPriceParts from '../utils/getFormattedPriceParts';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductDetail = ({route, navigation}: any) => {
  const {product} = route.params;
  const {products} = useContext(ProductsContext);
  const {colors} = useContext(ThemeContext);
  const {addToCart} = useContext(CartContext);

  const existingProduct = products.find(p => p.id === product.id);
  if (!existingProduct) {
    return (
      <View style={[styles.container, {backgroundColor: colors.background}]}>
        <Text style={[styles.title, {color: colors.text}]}>Товар удален</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <Image
        source={{
          uri: existingProduct.image || 'https://via.placeholder.com/300',
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={[styles.title, {color: colors.text}]}>
          {existingProduct.name}
        </Text>
        <Text style={[styles.price, {color: colors.text}]}>
          {getFormattedPriceParts(
            existingProduct.price,
            existingProduct.discount,
          )}
        </Text>
        <Text style={[styles.stock, {color: colors.text}]}>
          На складе: {existingProduct.stock}
        </Text>
        <Button
          title="Добавить в корзину"
          onPress={() => addToCart(existingProduct)}
          color={colors.button}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: 10,
  },
  content: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    marginBottom: 12,
  },
  stock: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ProductDetail;
