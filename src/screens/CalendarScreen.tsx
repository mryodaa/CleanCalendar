import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {ThemeContext} from '../contexts/ThemeContext';
import {Priority, RepeatType} from '../data/types';
import {useTaskContext} from '../contexts/TaskContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const CalendarScreen = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const {colors} = useContext(ThemeContext);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0],
  );

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {tasks, toggle, remove} = useTaskContext();
  const filteredTasks = tasks.filter(task => task.date === selectedDate);
  const themedStyles = getStyles(colors);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatMonth = (date: Date): string => {
    return new Intl.DateTimeFormat('ru-RU', {
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  const handleMonthChange = (months: {dateString: string}[]) => {
    if (months.length > 0) {
      setCurrentMonth(new Date(months[0].dateString));
    }
  };

  const handleLongPress = (id: string) => {
    Alert.alert(
      'Удалить задачу?',
      'Вы действительно хотите удалить эту задачу?',
      [
        {text: 'Отмена', style: 'cancel'},
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => remove(id),
        },
      ],
    );
  };

  const renderTask = ({item}: any) => {
    const priorityColors: Record<Priority, string> = {
      low: '#8BC34A',
      medium: '#FFC107',
      high: '#F44336',
    };

    const priorityColor = priorityColors[item.priority as Priority];

    return (
      <TouchableOpacity
        style={themedStyles.taskRow}
        activeOpacity={0.7}
        onPress={() => toggle(item.id)}
        onLongPress={() => handleLongPress(item.id)}>
        <View
          style={[
            themedStyles.statusCircle,
            item.isDone && themedStyles.statusDone,
          ]}
        />
        <View style={themedStyles.taskInfo}>
          <Text
            style={[
              themedStyles.taskTitle,
              item.isDone && themedStyles.taskTitleDone,
            ]}>
            {item.title}
          </Text>
          <Text style={themedStyles.taskMeta}>
            {item.category} • {item.time || 'Без времени'} •{' '}
            {getRepeatLabel(item.repeat)}
          </Text>
        </View>
        <View
          style={[themedStyles.priorityDot, {backgroundColor: priorityColor}]}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('EditTask', {task: item})}
          style={{marginLeft: 10}}>
          <Icon name="edit" size={20} color={colors.button} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  return (
    <View style={themedStyles.container}>
      <Calendar
        onVisibleMonthsChange={handleMonthChange}
        onDayPress={day => {
          setSelectedDate(day.dateString);
        }}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: colors.button,
          },
        }}
        renderHeader={() => (
          <Text style={themedStyles.customHeader}>
            {formatMonth(currentMonth)}
          </Text>
        )}
        style={themedStyles.calendar}
        theme={{
          backgroundColor: colors.background,
          calendarBackground: colors.background,
          textSectionTitleColor: colors.text,
          dayTextColor: colors.text,
          todayTextColor: colors.button,
          selectedDayBackgroundColor: colors.button,
          selectedDayTextColor: colors.buttonText,
          arrowColor: colors.button,
          monthTextColor: colors.button,
          textDisabledColor: colors.text + '66',
          textDayFontWeight: '500',
          textMonthFontWeight: '700',
          textDayHeaderFontWeight: '600',
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 14,
        }}
      />

      <View style={themedStyles.taskSection}>
        <Text style={themedStyles.heading}>
          Задачи на {formatDate(selectedDate)}
        </Text>

        <FlatList
          data={filteredTasks}
          keyExtractor={item => item.id}
          renderItem={renderTask}
          ItemSeparatorComponent={() => <View style={{height: 12}} />}
          contentContainerStyle={{paddingBottom: 20}}
          ListEmptyComponent={
            <Text style={{color: colors.text, fontSize: 16}}>
              Нет задач на эту дату
            </Text>
          }
        />
      </View>
    </View>
  );
};

const getRepeatLabel = (repeat: RepeatType): string => {
  switch (repeat) {
    case 'daily':
      return 'ежедневно';
    case 'weekly':
      return 'еженедельно';
    default:
      return 'без повтора';
  }
};

const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    calendar: {
      borderBottomWidth: 1,
      borderBottomColor: colors.text + '22',
    },
    taskSection: {
      flex: 1,
      padding: 16,
    },
    customHeader: {
      fontSize: 18,
      fontWeight: '600',
      color: colors.button,
      textAlign: 'center',
      marginVertical: 8,
    },
    heading: {
      fontSize: 20,
      fontWeight: '600',
      color: colors.text,
      marginBottom: 12,
    },
    taskRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
    },
    statusCircle: {
      width: 18,
      height: 18,
      borderRadius: 9,
      borderWidth: 2,
      borderColor: '#4CAF50',
      marginRight: 12,
    },
    statusDone: {
      backgroundColor: '#4CAF50',
    },
    taskInfo: {
      flex: 1,
    },
    taskTitle: {
      fontSize: 16,
      fontWeight: '500',
      color: colors.text,
    },
    taskTitleDone: {
      color: '#888',
      textDecorationLine: 'line-through',
    },
    taskMeta: {
      fontSize: 13,
      color: '#666',
      marginTop: 2,
    },
    priorityDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginLeft: 12,
    },
  });

export default CalendarScreen;
