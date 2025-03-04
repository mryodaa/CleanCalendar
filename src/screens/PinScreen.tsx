import React, {useState, useContext, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {AuthContext} from '../contexts/AuthContext';
import {ThemeContext} from '../contexts/ThemeContext';

const PinScreen = ({navigation}: any) => {
  const {verifyPin} = useContext(AuthContext);
  const {colors} = useContext(ThemeContext);

  const [pin, setPin] = useState(['', '', '', '']);
  const inputsRef = useRef<(TextInput | null)[]>([]);

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
      if (verifyPin(enteredPin)) {
        navigation.replace('MainTabs');
      } else {
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
              inputsRef.current[index] = ref; // Присваиваем ref без возврата
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
});

export default PinScreen;
