import React, {useState, useContext, useEffect} from 'react';
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
  const {login, user} = useContext(AuthContext);
  const {colors} = useContext(ThemeContext);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user) {
      // navigation.replace('MainTabs'); // Если уже авторизован, сразу на SellerFlow
    }
  }, [user]);

  const handleLogin = () => {
    if (!identifier || !password) {
      Alert.alert('Ошибка', 'Введите данные.');
      return;
    }

    if (login(identifier, password)) {
      setTimeout(() => {
        // navigation.replace('MainTabs'); // 🔹 Добавлена задержка 1 секунда
      }, 100);
    } else {
      Alert.alert('Ошибка', 'Неверный логин или пароль.');
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={[styles.label, {color: colors.text}]}>Логин или Email:</Text>
      <TextInput
        placeholder="Введите логин или email"
        placeholderTextColor={colors.text} // Теперь placeholder точно виден
        style={[styles.input, {borderColor: colors.button, color: colors.text}]}
        value={identifier}
        onChangeText={setIdentifier}
      />

      <Text style={[styles.label, {color: colors.text}]}>Пароль:</Text>
      <TextInput
        placeholder="Введите пароль"
        placeholderTextColor={colors.text}
        style={[styles.input, {borderColor: colors.button, color: colors.text}]}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Войти" onPress={handleLogin} color={colors.button} />

      <TouchableOpacity onPress={() => navigation.replace('Register')}>
        <Text style={[styles.registerText, {color: colors.button}]}>
          Нет аккаунта? Зарегистрируйтесь
        </Text>
      </TouchableOpacity>
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
  registerText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14,
  },
});

export default LoginScreen;
