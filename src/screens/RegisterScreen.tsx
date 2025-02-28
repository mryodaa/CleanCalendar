import React, {useState, useContext, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {AuthContext} from '../contexts/AuthContext';
import {ThemeContext} from '../contexts/ThemeContext';

const RegisterScreen = ({navigation}: any) => {
  const {register, user} = useContext(AuthContext);
  const {colors} = useContext(ThemeContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user) {
      navigation.replace('SellerFlow'); // Если уже авторизован, сразу в SellerFlow
    }
  }, [user]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = () => {
    if (!username || !email || !password) {
      Alert.alert('Ошибка', 'Заполните все поля.');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Ошибка', 'Введите корректный email.');
      return;
    }

    if (register(username, email, password)) {
      navigation.replace('SellerFlow'); // После регистрации сразу заходим в систему
    } else {
      Alert.alert(
        'Ошибка',
        'Пользователь с таким именем или почтой уже существует.',
      );
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={[styles.label, {color: colors.text}]}>Логин</Text>
      <TextInput
        placeholder="Введите логин"
        placeholderTextColor={colors.text}
        value={username}
        onChangeText={setUsername}
        style={[styles.input, {borderColor: colors.button, color: colors.text}]}
      />

      <Text style={[styles.label, {color: colors.text}]}>Email</Text>
      <TextInput
        placeholder="Введите email"
        placeholderTextColor={colors.text}
        value={email}
        onChangeText={setEmail}
        style={[styles.input, {borderColor: colors.button, color: colors.text}]}
        keyboardType="email-address"
      />

      <Text style={[styles.label, {color: colors.text}]}>Пароль</Text>
      <TextInput
        placeholder="Введите пароль"
        placeholderTextColor={colors.text}
        value={password}
        onChangeText={setPassword}
        style={[styles.input, {borderColor: colors.button, color: colors.text}]}
        secureTextEntry
      />

      <Button
        title="Зарегистрироваться"
        onPress={handleRegister}
        color={colors.button}
      />

      <Text
        style={[styles.loginText, {color: colors.button}]}
        onPress={() => navigation.replace('Login')}>
        Уже есть аккаунт? Войти
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, justifyContent: 'center'},
  label: {fontSize: 16, marginBottom: 5},
  input: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
  },
  loginText: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default RegisterScreen;
