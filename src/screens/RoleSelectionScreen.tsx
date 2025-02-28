import React, {useContext} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import {ThemeContext} from '../contexts/ThemeContext';
import {AuthContext} from '../contexts/AuthContext';

const RoleSelectionScreen = ({navigation}: any) => {
  const {theme, toggleTheme, colors} = useContext(ThemeContext);
  const {user} = useContext(AuthContext);

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
          onPress={() =>
            user
              ? navigation.navigate('SellerFlow')
              : navigation.navigate('Login')
          }
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
  text: {marginBottom: 20, fontSize: 16},
  buttonWrapper: {marginVertical: 5, width: '80%'},
});

export default RoleSelectionScreen;
