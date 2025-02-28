import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const getFormattedPriceParts = (price?: number, discount?: number) => {
  // Проверяем, что price - число
  if (typeof price !== 'number') return null;

  // Определяем, есть ли скидка
  const hasDiscount = typeof discount === 'number' && discount > 0;
  const discountedPrice = hasDiscount
    ? price - (price * discount) / 100
    : price;

  return (
    <View style={styles.priceContainer}>
      {hasDiscount ? (
        <>
          <Text style={styles.oldPrice}>
            {new Intl.NumberFormat('ru-RU', {
              style: 'currency',
              currency: 'RUB',
            }).format(price)}
          </Text>
          <Text style={styles.newPrice}>
            {new Intl.NumberFormat('ru-RU', {
              style: 'currency',
              currency: 'RUB',
            }).format(discountedPrice)}
          </Text>
          <View style={styles.discountBadgeContainer}>
            <Text style={styles.discountBadge}>-{discount}%</Text>
          </View>
        </>
      ) : (
        <Text style={styles.regularPrice}>
          {new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
          }).format(price)}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  priceContainer: {flexDirection: 'row', alignItems: 'center'},
  oldPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    marginRight: 5,
    color: 'gray',
  },
  newPrice: {fontSize: 18, fontWeight: 'bold', color: 'red'},
  discountBadgeContainer: {
    backgroundColor: 'red',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 5,
  },
  discountBadge: {fontSize: 14, fontWeight: 'bold', color: 'white'},
  regularPrice: {fontSize: 18, fontWeight: 'bold'},
});

export default getFormattedPriceParts;
