import React, {useContext} from 'react';
import {
  View,
  FlatList,
  Button,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {ProductsContext} from '../contexts/ProductsContext';
import {Product} from '../data/types';
import {CartContext} from '../contexts/CartContext';
import {ThemeContext} from '../contexts/ThemeContext';

const BuyerHome = ({navigation}: any) => {
  const {products} = useContext(ProductsContext);
  const {addToCart} = useContext(CartContext);
  const {colors} = useContext(ThemeContext);

  const renderItem = ({item}: {item: Product}) => (
    <TouchableOpacity
      style={[
        styles.card,
        {backgroundColor: colors.background, borderColor: colors.button},
      ]}
      onPress={() => navigation.navigate('ProductDetail', {product: item})}
      activeOpacity={0.8}>
      <Image
        source={{uri: item.image || 'https://via.placeholder.com/150'}}
        style={styles.cardImage}
      />

      <View style={styles.cardContent}>
        <Text style={[styles.cardTitle, {color: colors.text}]}>
          {item.name}
        </Text>
        <Text style={[styles.cardPrice, {color: colors.text}]}>
          {new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
          }).format(item.price || 0)}
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="В корзину"
            onPress={() => addToCart(item)}
            color={colors.button}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      {products.length > 0 ? (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <Text style={[styles.emptyText, {color: colors.text}]}>
          Нет доступных товаров
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 2, // Android
    shadowColor: '#000', // iOS
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardPrice: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    alignSelf: 'flex-start',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
});

export default BuyerHome;
