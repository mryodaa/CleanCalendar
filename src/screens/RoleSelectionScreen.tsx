import React, {useContext} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import {ThemeContext} from '../contexts/ThemeContext';

const RoleSelectionScreen = ({navigation}: any) => {
  const {theme, toggleTheme, colors} = useContext(ThemeContext);

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={[styles.text, {color: colors.text}]}>
        Текущая тема: {theme}
      </Text>
      <View style={styles.buttonWrapper}>
        <Button
          title="Переключить тему"
          onPress={toggleTheme}
          color={colors.button}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Войти как Покупатель"
          onPress={() => navigation.navigate('BuyerFlow')}
          color={colors.button}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Войти как Продавец"
          onPress={() => navigation.navigate('SellerFlow')}
          color={colors.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonWrapper: {
    marginVertical: 8,
    width: '80%',
  },
});

export default RoleSelectionScreen;
