import React, {useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {CategoriesContext} from '../contexts/CategoriesContext';
import {Category} from '../data/types';
import {ThemeContext} from '../contexts/ThemeContext';

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;
const blockSize = screenWidth / numColumns - 20; // отступы учтены

const CategoriesScreen = ({navigation}: any) => {
  const {categories} = useContext(CategoriesContext);
  const {colors} = useContext(ThemeContext);

  const renderItem = ({item}: {item: Category}) => (
    <TouchableOpacity
      style={[styles.categoryBlock, {width: blockSize, height: blockSize}]}
      onPress={() => navigation.navigate('Subcategories', {category: item})}
      activeOpacity={0.8}>
      <ImageBackground
        source={{uri: item.image || 'https://via.placeholder.com/300'}}
        style={styles.imageBackground}
        resizeMode="cover">
        <View style={styles.overlay} />
        <Text style={styles.categoryText}>{item.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      {categories.length > 0 ? (
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={numColumns}
          columnWrapperStyle={styles.row}
        />
      ) : (
        <Text style={[styles.emptyText, {color: colors.text}]}>
          Категории отсутствуют
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
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  categoryBlock: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  categoryText: {
    margin: 5,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
});

export default CategoriesScreen;
