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
import {Category} from '../data/types';
import {ThemeContext} from '../contexts/ThemeContext';

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;
const blockSize = screenWidth / numColumns - 20;

const SubcategoriesScreen = ({route, navigation}: any) => {
  const {category} = route.params as {category: Category};
  const {colors} = useContext(ThemeContext);

  const subcategories = category.subcategories || [];

  const renderItem = ({item}: {item: Category}) => (
    <TouchableOpacity
      style={[styles.categoryBlock, {width: blockSize, height: blockSize}]}
      onPress={() =>
        navigation.navigate('FilteredProducts', {categoryId: item.id})
      }
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
      {subcategories.length > 0 ? (
        <FlatList
          data={subcategories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={numColumns}
          columnWrapperStyle={styles.row}
        />
      ) : (
        <Text style={[styles.emptyText, {color: colors.text}]}>
          В этой категории нет подкатегорий
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
  row: {justifyContent: 'space-between', marginBottom: 10},
  categoryBlock: {borderRadius: 8, overflow: 'hidden'},
  imageBackground: {flex: 1, justifyContent: 'flex-start'},
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
    fontSize: 16,
    marginTop: 20,
  },
});

export default SubcategoriesScreen;
