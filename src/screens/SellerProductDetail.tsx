import React, {useContext, useMemo, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import {ThemeContext} from '../contexts/ThemeContext';
import {ProductsContext} from '../contexts/ProductsContext';
import {Product} from '../data/types';

const SellerProductDetail = ({route, navigation}: any) => {
  const {product: initialProduct} = route.params;
  const {products, updateProduct} = useContext(ProductsContext);
  const {colors} = useContext(ThemeContext);

  // Получаем актуальные данные товара
  const product: Product = useMemo(
    () => products.find(p => p.id === initialProduct.id) || initialProduct,
    [products, initialProduct.id],
  );

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price?.toString() || '');
  const [stock, setStock] = useState(product.stock?.toString() || '0');
  const [discount, setDiscount] = useState(product.discount?.toString() || '0');
  const [description, setDescription] = useState(product.description || '');
  const [image, setImage] = useState(product.image);

  const handleSave = () => {
    const numericPrice = parseFloat(price);
    const numericStock = parseInt(stock, 10);
    const numericDiscount = parseInt(discount, 10);

    if (!name || isNaN(numericPrice) || numericPrice < 0) {
      Alert.alert('Ошибка', 'Введите корректное название и цену.');
      return;
    }
    if (isNaN(numericStock) || numericStock < 0) {
      Alert.alert(
        'Ошибка',
        'Количество на складе не может быть отрицательным.',
      );
      return;
    }
    if (
      isNaN(numericDiscount) ||
      numericDiscount < 0 ||
      numericDiscount > 100
    ) {
      Alert.alert('Ошибка', 'Скидка должна быть от 0 до 100%.');
      return;
    }

    updateProduct({
      ...product,
      name,
      price: numericPrice,
      stock: numericStock,
      discount: numericDiscount,
      description,
      image,
    });
    setIsEditing(false);
    Alert.alert('Сохранено', 'Изменения сохранены');
  };

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.background}]}>
      {isEditing ? (
        <>
          <Text style={[styles.label, {color: colors.text}]}>
            Название товара:
          </Text>
          <TextInput
            style={[
              styles.input,
              {borderColor: colors.button, color: colors.text},
            ]}
            value={name}
            onChangeText={setName}
          />

          <Text style={[styles.label, {color: colors.text}]}>Цена товара:</Text>
          <TextInput
            style={[
              styles.input,
              {borderColor: colors.button, color: colors.text},
            ]}
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />

          <Text style={[styles.label, {color: colors.text}]}>
            Количество на складе:
          </Text>
          <TextInput
            style={[
              styles.input,
              {borderColor: colors.button, color: colors.text},
            ]}
            value={stock}
            onChangeText={setStock}
            keyboardType="numeric"
          />

          <Text style={[styles.label, {color: colors.text}]}>Скидка (%):</Text>
          <TextInput
            style={[
              styles.input,
              {borderColor: colors.button, color: colors.text},
            ]}
            value={discount}
            onChangeText={setDiscount}
            keyboardType="numeric"
          />

          <Text style={[styles.label, {color: colors.text}]}>
            Описание товара:
          </Text>
          <TextInput
            style={[
              styles.input,
              styles.textArea,
              {borderColor: colors.button, color: colors.text},
            ]}
            value={description}
            onChangeText={setDescription}
            multiline
          />

          <Text style={[styles.label, {color: colors.text}]}>
            Ссылка на изображение:
          </Text>
          <TextInput
            style={[
              styles.input,
              {borderColor: colors.button, color: colors.text},
            ]}
            value={image}
            onChangeText={setImage}
          />

          <Image
            source={{uri: image || 'https://via.placeholder.com/300'}}
            style={styles.previewImage}
          />

          <Button
            title="Сохранить"
            onPress={handleSave}
            color={colors.button}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Отмена"
              onPress={() => setIsEditing(false)}
              color={colors.button}
            />
          </View>
        </>
      ) : (
        <>
          <Image
            source={{uri: product.image || 'https://via.placeholder.com/300'}}
            style={styles.previewImage}
          />
          <Text style={[styles.title, {color: colors.text}]}>
            {product.name}
          </Text>
          <Text style={[styles.price, {color: colors.text}]}>
            Цена: {product.price}₽
          </Text>
          <Text style={[styles.stock, {color: colors.text}]}>
            На складе: {product.stock}
          </Text>
          <Text style={[styles.discount, {color: colors.text}]}>
            Скидка: {product.discount}%
          </Text>
          <Text style={[styles.description, {color: colors.text}]}>
            {product.description || 'Описание отсутствует.'}
          </Text>

          <View style={styles.buttonContainer}>
            <Button
              title="Редактировать"
              onPress={() => setIsEditing(true)}
              color={colors.button}
            />
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  previewImage: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    marginBottom: 10,
  },
  stock: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  discount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginVertical: 10,
  },
});

export default SellerProductDetail;
