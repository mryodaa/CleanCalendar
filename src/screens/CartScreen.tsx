import React, {useContext, useState} from 'react';
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
import getFormattedPriceParts from '../utils/getFormattedPriceParts';

const CartScreen = ({navigation}: any) => {
  const {cart, removeFromCart, updateQuantity, getTotal} =
    useContext(CartContext);
  const {colors} = useContext(ThemeContext);
  const [inputValues, setInputValues] = useState<Record<string, string>>({});

  const handleQuantityChange = (id: string, text: string) => {
    setInputValues(prev => ({...prev, [id]: text}));
  };

  const handleBlur = (id: string, maxStock: number) => {
    let value = parseInt(inputValues[id] || '1', 10);

    if (isNaN(value) || value <= 0) {
      value = 1;
    } else if (value > maxStock) {
      value = maxStock;
    }

    updateQuantity(id, value);
    setInputValues(prev => ({...prev, [id]: value.toString()}));
  };

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
        <Text style={[styles.stockText, {color: colors.text}]}>
          В наличии: {item.stock} шт.
        </Text>
        {getFormattedPriceParts(item.price, item.discount)}

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
            value={inputValues[item.id] ?? item.quantity.toString()}
            onChangeText={text => handleQuantityChange(item.id, text)}
            onBlur={() => handleBlur(item.id, item.stock)}
          />
          <Button
            title="+"
            onPress={() =>
              updateQuantity(item.id, Math.min(item.quantity + 1, item.stock))
            }
            color={colors.button}
            disabled={item.quantity >= item.stock} // 🔹 Блокируем, если достигнут лимит
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

          {/* Фиксированная кнопка с суммой */}
          <TouchableOpacity
            style={[styles.checkoutButton, {backgroundColor: colors.button}]}
            onPress={() => navigation.navigate('Checkout')}>
            <Text style={[styles.checkoutText, {color: colors.buttonText}]}>
              Оформить заказ (
              {new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: 'RUB',
              }).format(getTotal())}
              )
            </Text>
          </TouchableOpacity>
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
  stockText: {
    fontSize: 14,
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
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  checkoutButton: {
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 8,
  },
  checkoutText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartScreen;
