import React, {useContext} from 'react';
import {View, Text, Image, Button, ScrollView, StyleSheet} from 'react-native';
import {ThemeContext} from '../contexts/ThemeContext';
import {CartContext} from '../contexts/CartContext';

const ProductDetail = ({route}: any) => {
  const {product} = route.params;
  const {colors} = useContext(ThemeContext);
  const {addToCart} = useContext(CartContext);

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <Image
        source={{uri: product.image || 'https://via.placeholder.com/300'}}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={[styles.title, {color: colors.text}]}>{product.name}</Text>
        <Text style={[styles.price, {color: colors.text}]}>
          {new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
          }).format(product.price || 0)}
        </Text>
        <Text style={[styles.description, {color: colors.text}]}>
          {product.description || 'Описание отсутствует.'}
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Добавить в корзину"
            onPress={() => addToCart(product)}
            color={colors.button}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
  },
  buttonContainer: {
    alignSelf: 'stretch',
  },
});

export default ProductDetail;
