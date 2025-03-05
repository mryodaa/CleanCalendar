import React, {useState, useContext, useEffect} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import {AuthContext} from '../contexts/AuthContext';
import {ThemeContext} from '../contexts/ThemeContext';
import {User} from '../data/types';

const RegisterScreen = ({navigation}: any) => {
  const {register, user} = useContext(AuthContext);
  const {colors} = useContext(ThemeContext);

  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [patronymic, setPatronymic] = useState('');
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

  const generateAccountNumber = () => Math.random().toString().slice(2, 18);

  const handleRegister = () => {
    if (
      !surname ||
      !name ||
      !patronymic ||
      !username ||
      !email ||
      !password ||
      !pin ||
      !confirmPin
    ) {
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

    const newUser: User = {
      id: Date.now().toString(),
      name,
      surname,
      patronymic,
      fullName: `${surname} ${name} ${patronymic}`,
      username,
      email,
      accountNumber: `KZ${generateAccountNumber()}`,
      balance: 0,
      currency: 'KZT',
      cards: [],
      login: username,
      password,
      isAuthorized: false, // Новый пользователь не авторизован сразу
      pin: '',
    };

    const success = register(newUser, pin);

    if (success) {
      // navigation.replace('Home'); // Отключаем ручную навигацию (возможно условный рендеринг в App.tsx)
    } else {
      Alert.alert(
        'Ошибка',
        'Пользователь с таким логином или email уже существует.',
      );
    }
  };

  return (
    <ScrollView
      style={[styles.scrollContainer, {backgroundColor: colors.background}]}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled">
      <Text style={[styles.label, {color: colors.text}]}>Фамилия</Text>
      <TextInput
        placeholder="Введите фамилию"
        placeholderTextColor={colors.text}
        value={surname}
        onChangeText={setSurname}
        style={[styles.input, {borderColor: colors.button, color: colors.text}]}
      />

      <Text style={[styles.label, {color: colors.text}]}>Имя</Text>
      <TextInput
        placeholder="Введите имя"
        placeholderTextColor={colors.text}
        value={name}
        onChangeText={setName}
        style={[styles.input, {borderColor: colors.button, color: colors.text}]}
      />

      <Text style={[styles.label, {color: colors.text}]}>Отчество</Text>
      <TextInput
        placeholder="Введите отчество"
        placeholderTextColor={colors.text}
        value={patronymic}
        onChangeText={setPatronymic}
        style={[styles.input, {borderColor: colors.button, color: colors.text}]}
      />

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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
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
  loginText: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default RegisterScreen;
