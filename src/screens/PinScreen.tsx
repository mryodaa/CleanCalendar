import React, {useState, useContext, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import {AuthContext} from '../contexts/AuthContext';
import {ThemeContext} from '../contexts/ThemeContext';
import {CommonActions} from '@react-navigation/native';

const PinScreen = ({navigation}: any) => {
  const {verifyPin, user, isAuthorized} = useContext(AuthContext);
  const {colors} = useContext(ThemeContext);
  const [pin, setPin] = useState(['', '', '', '']);
  const inputsRef = useRef<(TextInput | null)[]>([]);
  const rnBiometrics = new ReactNativeBiometrics();

  useEffect(() => {
    checkBiometricAvailability();
  }, []);

  useEffect(() => {
    if (isAuthorized) {
      navigation.reset({
        index: 0,
        routes: [{name: 'MainTabs'}],
      });
    }
  }, [isAuthorized, navigation]);

  const checkBiometricAvailability = async () => {
    const {available} = await rnBiometrics.isSensorAvailable();
    if (available) {
      handleBiometricAuth();
    }
  };

  const handleBiometricAuth = async () => {
    const {available} = await rnBiometrics.isSensorAvailable();
    console.log('Поддержка биометрии:', available);

    if (!available) {
      Alert.alert('Ошибка', 'Биометрическая аутентификация не поддерживается');
      return;
    }

    const {success} = await rnBiometrics.simplePrompt({
      promptMessage: 'Подтвердите вход биометрией',
    });

    if (success) {
      if (user) {
        verifyPin(user.pin);
      }
    } else {
      Alert.alert('Ошибка', 'Биометрическая аутентификация не удалась');
    }
  };

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text)) {
      const newPin = [...pin];
      newPin[index] = text;
      setPin(newPin);

      if (index < 3) {
        inputsRef.current[index + 1]?.focus();
      } else {
        handleSubmit(newPin.join(''));
      }
    }
  };

  const handleDelete = (index: number) => {
    if (pin[index]) {
      const newPin = [...pin];
      newPin[index] = '';
      setPin(newPin);
    } else if (index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (enteredPin: string) => {
    if (enteredPin.length === 4) {
      if (!verifyPin(enteredPin)) {
        Alert.alert('Ошибка', 'Неверный PIN-код');
        setPin(['', '', '', '']);
        inputsRef.current[0]?.focus();
      }
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={[styles.title, {color: colors.text}]}>Введите PIN-код</Text>
      <View style={styles.pinContainer}>
        {pin.map((digit, index) => (
          <TextInput
            key={index}
            ref={ref => {
              inputsRef.current[index] = ref;
            }}
            style={[
              styles.pinInput,
              {
                borderColor: digit ? colors.button : colors.text,
                color: colors.text,
              },
            ]}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={text => handleChange(text, index)}
            onKeyPress={({nativeEvent}) => {
              if (nativeEvent.key === 'Backspace') handleDelete(index);
            }}
          />
        ))}
      </View>

      <TouchableOpacity
        style={[
          styles.submitButton,
          {backgroundColor: pin.every(d => d) ? colors.button : '#ccc'},
        ]}
        onPress={() => handleSubmit(pin.join(''))}
        disabled={!pin.every(d => d)}>
        <Text style={styles.submitText}>Войти</Text>
      </TouchableOpacity>

      {/* 🔹 Кнопка биометрии */}
      <TouchableOpacity
        style={[styles.biometricButton, {backgroundColor: colors.button}]}
        onPress={handleBiometricAuth}>
        <Text style={styles.submitText}>🔒 Войти по биометрии</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 22, fontWeight: 'bold', marginBottom: 20},
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  pinInput: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    marginHorizontal: 8,
  },
  submitButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  submitText: {color: '#fff', fontSize: 18, fontWeight: 'bold'},
  biometricButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
  },
});

export default PinScreen;
