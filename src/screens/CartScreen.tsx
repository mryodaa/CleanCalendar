import React, {useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {CartContext} from '../contexts/CartContext';
import {CartItem} from '../data/types';
import {ThemeContext} from '../contexts/ThemeContext';

const CartScreen = ({navigation}: any) => {
  const {cart, removeFromCart, updateQuantity, getTotal} =
    useContext(CartContext);
  const {colors} = useContext(ThemeContext);

  const renderItem = ({item}: {item: CartItem}) => (
    <TouchableOpacity
      style={[
        styles.item,
        {backgroundColor: colors.background, borderColor: colors.button},
      ]}
      onPress={() => navigation.navigate('ProductDetail', {product: item})}
      activeOpacity={0.8}>
      <Image
        source={{uri: item.image || 'https://via.placeholder.com/100'}}
        style={styles.productImage}
      />
      <View style={styles.infoContainer}>
        <Text style={[styles.itemText, {color: colors.text}]}>{item.name}</Text>
        <Text style={[styles.priceText, {color: colors.text}]}>
          {new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
          }).format(item.price || 0)}
        </Text>
        <View style={styles.quantityContainer}>
          <Button
            title="-"
            onPress={() =>
              updateQuantity(item.id, Math.max(1, item.quantity - 1))
            }
            color={colors.button}
          />
          <TextInput
            style={[
              styles.quantityInput,
              {color: colors.text, borderColor: colors.button},
            ]}
            keyboardType="numeric"
            value={item.quantity.toString()}
            onChangeText={text => {
              const num = parseInt(text, 10);
              if (!isNaN(num) && num > 0) {
                updateQuantity(item.id, num);
              }
            }}
          />
          <Button
            title="+"
            onPress={() => updateQuantity(item.id, item.quantity + 1)}
            color={colors.button}
          />
        </View>
      </View>
      <View style={styles.removeContainer}>
        <Button
          title="Удалить"
          onPress={() => removeFromCart(item.id)}
          color={colors.button}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      {cart.length === 0 ? (
        <Text style={[styles.emptyText, {color: colors.text}]}>
          В корзине нет товаров
        </Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={renderItem}
          />
          <View style={styles.totalContainer}>
            <Text style={[styles.totalText, {color: colors.text}]}>
              Общая стоимость:{' '}
              {new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: 'RUB',
              }).format(getTotal())}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
  priceText: {
    fontSize: 16,
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityInput: {
    borderWidth: 1,
    borderRadius: 4,
    width: 50,
    height: 35,
    textAlign: 'center',
    padding: 5,
    marginHorizontal: 10,
  },
  removeContainer: {
    marginLeft: 10,
  },
  totalContainer: {
    marginTop: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    paddingTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CartScreen;
