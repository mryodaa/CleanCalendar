import React, {useContext} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {ProductsContext} from '../contexts/ProductsContext';
import {ThemeContext} from '../contexts/ThemeContext';
import {Product} from '../data/types';

const DiscountedProductsScreen = ({navigation}: any) => {
  const {products} = useContext(ProductsContext);
  const {colors} = useContext(ThemeContext);

  // Фильтруем товары со скидкой
  const discountedProducts = products.filter(p => p.discount && p.discount > 0);

  const renderItem = ({item}: {item: Product}) => {
    const discountedPrice = item.price
      ? item.price - (item.price * item.discount) / 100
      : 0;

    return (
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
          <View style={styles.priceContainer}>
            <Text style={[styles.oldPrice, {color: colors.text}]}>
              {new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: 'RUB',
              }).format(item.price || 0)}
            </Text>
            <Text style={[styles.newPrice, {color: colors.text}]}>
              {new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: 'RUB',
              }).format(discountedPrice)}
            </Text>
            <Text style={styles.discountBadge}>-{item.discount}%</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      {discountedProducts.length === 0 ? (
        <Text style={[styles.emptyText, {color: colors.text}]}>
          Нет товаров со скидкой
        </Text>
      ) : (
        <FlatList
          data={discountedProducts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
  listContainer: {paddingBottom: 20},
  card: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  },
  cardImage: {width: '100%', height: 150},
  cardContent: {padding: 10},
  cardTitle: {fontSize: 18, fontWeight: 'bold', marginBottom: 5},
  priceContainer: {flexDirection: 'row', alignItems: 'center'},
  oldPrice: {fontSize: 16, textDecorationLine: 'line-through', marginRight: 5},
  newPrice: {fontSize: 18, fontWeight: 'bold', color: 'red'},
  discountBadge: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 8,
  },
  emptyText: {fontSize: 16, textAlign: 'center', marginTop: 20},
});

export default DiscountedProductsScreen;
