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
import {Priority, RepeatType, Task} from '../data/types';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {useTaskContext} from '../contexts/TaskContext';

const EditTaskScreen = () => {
  const {colors} = useContext(ThemeContext);
  const themedStyles = getStyles(colors);
  const navigation = useNavigation();
  const route = useRoute<RouteProp<{params: {task: Task}}, 'params'>>();
  const {task} = route.params;

  const [title, setTitle] = useState(task.title);
  const [category, setCategory] = useState(task.category);
  const [date, setDate] = useState(new Date(task.date));
  const [time, setTime] = useState(task.time || '');
  const [priority, setPriority] = useState<Priority>(task.priority);
  const [repeat, setRepeat] = useState<RepeatType>(task.repeat);
  const [reminder, setReminder] = useState(!!task.notificationId);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const {update} = useTaskContext();

  const handleUpdate = () => {
    if (!title.trim()) return Alert.alert('Ошибка', 'Введите название задачи');
    if (!category.trim()) return Alert.alert('Ошибка', 'Укажите категорию');

    update(
      {
        ...task,
        title,
        category,
        date: date.toISOString().split('T')[0],
        time,
        priority,
        repeat,
      },
      reminder,
    );

    Alert.alert('Успешно', 'Задача обновлена');
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={themedStyles.container}>
      <Text style={themedStyles.label}>Название</Text>
      <TextInput
        style={themedStyles.input}
        value={title}
        onChangeText={setTitle}
        placeholderTextColor={colors.text + '66'}
      />

      <Text style={themedStyles.label}>Категория</Text>
      <TextInput
        style={themedStyles.input}
        value={category}
        onChangeText={setCategory}
        placeholderTextColor={colors.text + '66'}
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
                .replace(/^\d:/, '0$&');
              setTime(formatted);
            }
          }}
        />
      )}

      <Text style={themedStyles.label}>Приоритет</Text>
      <View style={themedStyles.pickerWrapper}>
        <Picker selectedValue={priority} onValueChange={v => setPriority(v)}>
          <Picker.Item label="Низкий" value="low" />
          <Picker.Item label="Средний" value="medium" />
          <Picker.Item label="Высокий" value="high" />
        </Picker>
      </View>

      <Text style={themedStyles.label}>Повтор</Text>
      <View style={themedStyles.pickerWrapper}>
        <Picker selectedValue={repeat} onValueChange={v => setRepeat(v)}>
          <Picker.Item label="Без повтора" value="none" />
          <Picker.Item label="Ежедневно" value="daily" />
          <Picker.Item label="Еженедельно" value="weekly" />
        </Picker>
      </View>

      <View style={themedStyles.toggleRow}>
        <Text style={themedStyles.label}>Напоминание</Text>
        <Switch
          value={reminder}
          onValueChange={setReminder}
          thumbColor={reminder ? colors.button : '#ccc'}
        />
      </View>

      <TouchableOpacity style={themedStyles.saveButton} onPress={handleUpdate}>
        <Text style={themedStyles.saveText}>Обновить</Text>
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
    toggleRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 16,
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

export default EditTaskScreen;
