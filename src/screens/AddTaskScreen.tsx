import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  Alert,
  Switch,
} from 'react-native';
import {ThemeContext} from '../contexts/ThemeContext';
import {Picker} from '@react-native-picker/picker';
import {Priority, RepeatType} from '../data/types';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';
import {useTaskContext} from '../contexts/TaskContext';

const AddTaskScreen = () => {
  const {colors} = useContext(ThemeContext);
  const themedStyles = getStyles(colors);
  const navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [repeat, setRepeat] = useState<RepeatType>('none');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [isReminderEnabled, setIsReminderEnabled] = useState(true);

  const {add} = useTaskContext();

  const handleSave = () => {
    if (!title.trim()) return Alert.alert('Ошибка', 'Введите название задачи');
    if (!category.trim()) return Alert.alert('Ошибка', 'Укажите категорию');

    add({
      title,
      category,
      date: date.toISOString().split('T')[0],
      time,
      priority,
      repeat,
      reminder: isReminderEnabled, // 👈 прокидываем
    });

    Alert.alert('Готово', 'Задача добавлена');
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={themedStyles.container}>
      <Text style={themedStyles.label}>Название</Text>
      <TextInput
        style={themedStyles.input}
        placeholder="Введите название"
        placeholderTextColor={colors.text + '66'}
        value={title}
        onChangeText={setTitle}
      />

      <Text style={themedStyles.label}>Категория</Text>
      <TextInput
        style={themedStyles.input}
        placeholder="Например: Кухня"
        placeholderTextColor={colors.text + '66'}
        value={category}
        onChangeText={setCategory}
      />

      <Text style={themedStyles.label}>Дата</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <TextInput
          style={themedStyles.input}
          value={date.toLocaleDateString('ru-RU')}
          editable={false}
        />
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(_, selected) => {
            setShowDatePicker(false);
            if (selected) setDate(selected);
          }}
        />
      )}

      <Text style={themedStyles.label}>Время (опционально)</Text>
      <TouchableOpacity onPress={() => setShowTimePicker(true)}>
        <TextInput
          style={themedStyles.input}
          value={time}
          placeholder="Выберите время"
          placeholderTextColor={colors.text + '66'}
          editable={false}
        />
      </TouchableOpacity>

      {showTimePicker && (
        <DateTimePicker
          value={new Date()}
          mode="time"
          is24Hour
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(_, selected) => {
            setShowTimePicker(false);
            if (selected) {
              const formatted = selected
                .toLocaleTimeString('ru-RU', {
                  hour: '2-digit',
                  minute: '2-digit',
                })
                .replace(/^(\d):/, '0$1');
              setTime(formatted);
            }
          }}
        />
      )}

      <Text style={themedStyles.label}>Приоритет</Text>
      <View style={themedStyles.pickerWrapper}>
        <Picker
          selectedValue={priority}
          onValueChange={v => setPriority(v)}
          style={{color: colors.text}}>
          <Picker.Item label="Низкий" value="low" />
          <Picker.Item label="Средний" value="medium" />
          <Picker.Item label="Высокий" value="high" />
        </Picker>
      </View>

      <Text style={themedStyles.label}>Повтор</Text>
      <View style={themedStyles.pickerWrapper}>
        <Picker
          selectedValue={repeat}
          onValueChange={v => setRepeat(v)}
          style={{color: colors.text}}>
          <Picker.Item label="Без повтора" value="none" />
          <Picker.Item label="Ежедневно" value="daily" />
          <Picker.Item label="Еженедельно" value="weekly" />
        </Picker>
      </View>

      {/* ✅ Переключатель напоминания */}
      <View style={themedStyles.reminderRow}>
        <Text style={themedStyles.label}>Добавить напоминание</Text>
        <Switch
          value={isReminderEnabled}
          onValueChange={setIsReminderEnabled}
          trackColor={{false: '#888', true: colors.button}}
          thumbColor={colors.buttonText}
        />
      </View>

      <TouchableOpacity style={themedStyles.saveButton} onPress={handleSave}>
        <Text style={themedStyles.saveText}>Сохранить</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: colors.background,
    },
    label: {
      fontSize: 16,
      fontWeight: '500',
      color: colors.text,
      marginBottom: 4,
      marginTop: 16,
    },
    input: {
      backgroundColor: colors.background === '#ffffff' ? '#f2f2f2' : '#1c1c1c',
      color: colors.text,
      borderRadius: 10,
      paddingHorizontal: 14,
      paddingVertical: 12,
      fontSize: 16,
    },
    pickerWrapper: {
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: colors.background === '#ffffff' ? '#f2f2f2' : '#1c1c1c',
      marginTop: 4,
    },
    reminderRow: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    saveButton: {
      marginTop: 30,
      backgroundColor: colors.button,
      borderRadius: 12,
      paddingVertical: 14,
      alignItems: 'center',
    },
    saveText: {
      color: colors.buttonText,
      fontSize: 18,
      fontWeight: '600',
    },
  });

export default AddTaskScreen;
