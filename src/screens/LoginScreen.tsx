import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {AuthContext} from '../contexts/AuthContext';
import {ThemeContext} from '../contexts/ThemeContext';

const LoginScreen = ({navigation}: any) => {
  const {login} = useContext(AuthContext);
  const {colors} = useContext(ThemeContext);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!identifier || !password) {
      Alert.alert('Ошибка', 'Введите данные.');
      return;
    }

    if (login(identifier, password)) {
      navigation.replace('SellerFlow');
    } else {
      Alert.alert('Ошибка', 'Неверный логин или пароль.');
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={[styles.label, {color: colors.text}]}>Логин или Email:</Text>
      <TextInput
        style={[styles.input, {borderColor: colors.button, color: colors.text}]}
        value={identifier}
        onChangeText={setIdentifier}
      />
      <Text style={[styles.label, {color: colors.text}]}>Пароль:</Text>
      <TextInput
        style={[styles.input, {borderColor: colors.button, color: colors.text}]}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Войти" onPress={handleLogin} color={colors.button} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={[styles.registerText, {color: colors.text}]}>
          Нет аккаунта? Зарегистрируйтесь
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  label: {fontSize: 16, marginBottom: 5},
  input: {borderWidth: 1, borderRadius: 4, padding: 10, marginBottom: 15},
  registerText: {marginTop: 10, textAlign: 'center', fontSize: 14},
});

export default LoginScreen;
