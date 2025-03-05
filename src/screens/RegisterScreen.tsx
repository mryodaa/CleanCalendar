import React, {useState, useContext, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {AuthContext} from '../contexts/AuthContext';
import {ThemeContext} from '../contexts/ThemeContext';
import {User} from '../data/types';

const RegisterScreen = ({navigation}: any) => {
  const {register, user} = useContext(AuthContext);
  const {colors} = useContext(ThemeContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');

  useEffect(() => {
    if (user) {
      navigation.replace('HomeScreen'); // Если пользователь уже авторизован, сразу в HomeScreen
    }
  }, [user]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = () => {
    if (!username || !email || !password || !pin || !confirmPin) {
      Alert.alert('Ошибка', 'Заполните все поля.');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Ошибка', 'Введите корректный email.');
      return;
    }

    if (pin !== confirmPin) {
      Alert.alert('Ошибка', 'PIN-коды не совпадают.');
      return;
    }

    if (pin.length !== 4 || !/^\d{4}$/.test(pin)) {
      Alert.alert('Ошибка', 'PIN-код должен состоять из 4 цифр.');
      return;
    }

    // Создаём нового пользователя с дефолтными значениями для отсутствующих полей.
    const newUser: User = {
      id: Date.now().toString(),
      fullName: username, // Можно добавить отдельное поле для ФИО
      name: username,
      surname: '',
      patronymic: '',
      username: username,
      email: email,
      accountNumber: '000000000000000000', // Задайте генерацию номера счета по необходимости
      balance: 0,
      currency: 'KZT',
      cards: [],
      login: username,
      password: password,
      pin: '', // PIN будет установлен в функции register
      isAuthorized: false,
    };

    if (register(newUser, pin)) {
      navigation.replace('HomeScreen'); // После регистрации перенаправляем в HomeScreen
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

      <Text style={[styles.label, {color: colors.text}]}>PIN-код</Text>
      <TextInput
        placeholder="Введите PIN-код (4 цифры)"
        placeholderTextColor={colors.text}
        value={pin}
        onChangeText={setPin}
        style={[styles.input, {borderColor: colors.button, color: colors.text}]}
        keyboardType="numeric"
        maxLength={4}
        secureTextEntry
      />

      <Text style={[styles.label, {color: colors.text}]}>
        Подтвердите PIN-код
      </Text>
      <TextInput
        placeholder="Повторите PIN-код"
        placeholderTextColor={colors.text}
        value={confirmPin}
        onChangeText={setConfirmPin}
        style={[styles.input, {borderColor: colors.button, color: colors.text}]}
        keyboardType="numeric"
        maxLength={4}
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
