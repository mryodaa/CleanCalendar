import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import {ProductsContext} from '../contexts/ProductsContext';
import {ThemeContext} from '../contexts/ThemeContext';
import {CategoriesContext} from '../contexts/CategoriesContext';
import {Picker} from '@react-native-picker/picker';

const AddProductScreen = ({navigation}: any) => {
  const {addProduct} = useContext(ProductsContext);
  const {colors} = useContext(ThemeContext);
  const {categories} = useContext(CategoriesContext);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [discount, setDiscount] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');

  useEffect(() => {
    if (categories.length > 0) {
      setSelectedCategory(categories[0].id);
      if (categories[0].subcategories?.length) {
        setSelectedSubcategory(categories[0].subcategories[0].id);
      }
    }
  }, [categories]);

  const onCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    const category = categories.find(c => c.id === catId);
    if (category?.subcategories?.length) {
      setSelectedSubcategory(category.subcategories[0].id);
    } else {
      setSelectedSubcategory('');
    }
  };

  const handleAddProduct = () => {
    const numericPrice = parseFloat(price);
    const numericStock = parseInt(stock, 10);
    const numericDiscount = parseInt(discount, 10);

    if (
      !name ||
      isNaN(numericPrice) ||
      numericPrice <= 0 ||
      isNaN(numericStock) ||
      numericStock < 0 ||
      isNaN(numericDiscount) ||
      numericDiscount < 0 ||
      numericDiscount > 100
    ) {
      Alert.alert('Ошибка', 'Введите корректные значения для всех полей.');
      return;
    }

    const newProduct = {
      id: Date.now().toString(),
      name,
      price: numericPrice,
      stock: numericStock,
      discount: numericDiscount,
      description,
      image: image || 'https://via.placeholder.com/300',
      categoryId: selectedSubcategory || selectedCategory,
    };

    addProduct(newProduct);
    navigation.goBack();
  };

  const selectedCat = categories.find(c => c.id === selectedCategory);
  const subcategories = selectedCat?.subcategories || [];

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={[styles.label, {color: colors.text}]}>Название товара:</Text>
      <TextInput
        style={[styles.input, {borderColor: colors.button, color: colors.text}]}
        placeholder="Введите название"
        placeholderTextColor={colors.text}
        value={name}
        onChangeText={setName}
      />

      <Text style={[styles.label, {color: colors.text}]}>Цена товара:</Text>
      <TextInput
        style={[styles.input, {borderColor: colors.button, color: colors.text}]}
        placeholder="Введите цену"
        placeholderTextColor={colors.text}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <Text style={[styles.label, {color: colors.text}]}>
        Количество на складе:
      </Text>
      <TextInput
        style={[styles.input, {borderColor: colors.button, color: colors.text}]}
        placeholder="Введите количество"
        placeholderTextColor={colors.text}
        value={stock}
        onChangeText={setStock}
        keyboardType="numeric"
      />

      <Text style={[styles.label, {color: colors.text}]}>Скидка (%):</Text>
      <TextInput
        style={[styles.input, {borderColor: colors.button, color: colors.text}]}
        placeholder="Введите скидку"
        placeholderTextColor={colors.text}
        value={discount}
        onChangeText={text => {
          const num = parseInt(text, 10);
          if (!isNaN(num) && num >= 0 && num <= 100) {
            setDiscount(text);
          }
        }}
        keyboardType="numeric"
      />

      <Text style={[styles.label, {color: colors.text}]}>Описание товара:</Text>
      <TextInput
        style={[
          styles.input,
          styles.textArea,
          {borderColor: colors.button, color: colors.text},
        ]}
        placeholder="Введите описание"
        placeholderTextColor={colors.text}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={[styles.label, {color: colors.text}]}>
        Ссылка на изображение:
      </Text>
      <TextInput
        style={[styles.input, {borderColor: colors.button, color: colors.text}]}
        placeholder="https://example.com/image.jpg"
        placeholderTextColor={colors.text}
        value={image}
        onChangeText={setImage}
      />

      <Image
        source={{uri: image || 'https://via.placeholder.com/300'}}
        style={styles.previewImage}
      />

      <Text style={[styles.label, {color: colors.text}]}>
        Выберите категорию:
      </Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={onCategoryChange}
          style={[styles.picker, {color: colors.text}]}
          dropdownIconColor={colors.text}>
          {categories.map(cat => (
            <Picker.Item key={cat.id} label={cat.name} value={cat.id} />
          ))}
        </Picker>
      </View>

      {subcategories.length > 0 && (
        <>
          <Text style={[styles.label, {color: colors.text}]}>
            Выберите подкатегорию:
          </Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedSubcategory}
              onValueChange={setSelectedSubcategory}
              style={[styles.picker, {color: colors.text}]}
              dropdownIconColor={colors.text}>
              {subcategories.map(sub => (
                <Picker.Item key={sub.id} label={sub.name} value={sub.id} />
              ))}
            </Picker>
          </View>
        </>
      )}

      <View style={styles.buttonContainer}>
        <Button
          title="Добавить товар"
          onPress={handleAddProduct}
          color={colors.button}
          disabled={!name || !price || !stock || isNaN(parseFloat(price))}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  label: {fontSize: 16, marginBottom: 5},
  input: {borderWidth: 1, borderRadius: 4, padding: 10, marginBottom: 15},
  textArea: {height: 100, textAlignVertical: 'top'},
  previewImage: {width: '100%', height: 200, borderRadius: 8, marginBottom: 15},
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 15,
    overflow: 'hidden',
  },
  picker: {height: 50, width: '100%'},
  buttonContainer: {marginTop: 10},
});

export default AddProductScreen;
