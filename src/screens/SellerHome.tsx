import React, {useContext} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import {ProductsContext} from '../contexts/ProductsContext';
import {Product} from '../data/types';
import {ThemeContext} from '../contexts/ThemeContext';
import getFormattedPriceParts from '../utils/getFormattedPriceParts';

const SellerHome = ({navigation}: any) => {
  const {products, removeProduct} = useContext(ProductsContext);
  const {colors} = useContext(ThemeContext);

  const handleRemove = (productId: string) => {
    Alert.alert(
      'Удаление товара',
      'Вы действительно хотите удалить этот товар?',
      [
        {text: 'Отмена', style: 'cancel'},
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => removeProduct(productId),
        },
      ],
    );
  };

  const renderItem = ({item}: {item: Product}) => (
    <View
      style={[
        styles.card,
        {backgroundColor: colors.background, borderColor: colors.button},
      ]}>
      {/* Область карточки, кликабельная для перехода */}
      <TouchableOpacity
        style={styles.cardContentWrapper}
        onPress={() =>
          navigation.navigate('SellerProductDetail', {product: item})
        }
        activeOpacity={0.8}>
        <Image
          source={{uri: item.image || 'https://via.placeholder.com/150'}}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={[styles.itemText, {color: colors.text}]}>
            {item.name}
          </Text>
          <Text style={[styles.itemPrice, {color: colors.text}]}>
            {getFormattedPriceParts(item.price, item.discount)}
          </Text>
        </View>
      </TouchableOpacity>
      {/* Кнопка удаления, расположенная справа */}
      <TouchableOpacity
        style={[styles.deleteButton, {backgroundColor: 'red'}]}
        onPress={() => handleRemove(item.id)}
        activeOpacity={0.8}>
        <Text style={[styles.deleteButtonText, {color: colors.buttonText}]}>
          Удалить
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      {products.length > 0 ? (
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      ) : (
        <Text style={[styles.emptyText, {color: colors.text}]}>
          Список товаров пуст. Добавьте новый товар.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
  card: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  cardContentWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
  },
  deleteButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginLeft: 10,
  },
  deleteButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default SellerHome;
