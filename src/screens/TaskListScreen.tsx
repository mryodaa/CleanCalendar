import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {ThemeContext} from '../contexts/ThemeContext';
import {useTaskContext} from '../contexts/TaskContext';
import {Task, Priority} from '../data/types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainStack';

const TaskListScreen = () => {
  const {colors} = useContext(ThemeContext);
  const {tasks, toggle, remove} = useTaskContext();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [filterStatus, setFilterStatus] = useState<'all' | 'done' | 'undone'>(
    'all',
  );
  const [filterPriority, setFilterPriority] = useState<'all' | Priority>('all');

  const styles = getStyles(colors);

  const filteredTasks = tasks.filter(task => {
    const statusMatch =
      filterStatus === 'all' ||
      (filterStatus === 'done' && task.isDone) ||
      (filterStatus === 'undone' && !task.isDone);

    const priorityMatch =
      filterPriority === 'all' || task.priority === filterPriority;

    return statusMatch && priorityMatch;
  });

  const grouped = groupTasksByDate(filteredTasks);

  const renderTask = ({item}: {item: Task}) => {
    const priorityColors: Record<Priority, string> = {
      low: '#8BC34A',
      medium: '#FFC107',
      high: '#F44336',
    };

    return (
      <View style={styles.task}>
        <TouchableOpacity onPress={() => toggle(item.id)}>
          <View
            style={[styles.status, item.isDone && {backgroundColor: '#4CAF50'}]}
          />
        </TouchableOpacity>

        <View style={styles.textWrapper}>
          <Text style={[styles.title, item.isDone && styles.titleDone]}>
            {item.title}
          </Text>
          <Text style={styles.meta}>
            {item.time || 'Без времени'} • {item.category}
          </Text>
        </View>

        <View
          style={[
            styles.priorityDot,
            {backgroundColor: priorityColors[item.priority]},
          ]}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('EditTask', {task: item})}
          style={{paddingLeft: 12}}>
          <Icon name="edit" size={20} color={colors.text} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Все задачи</Text>

      {/* Фильтры */}
      <View style={styles.filters}>
        <View style={styles.filterGroup}>
          {(['all', 'undone', 'done'] as const).map(type => (
            <TouchableOpacity
              key={type}
              style={[
                styles.filterButton,
                filterStatus === type && styles.filterButtonActive,
              ]}
              onPress={() => setFilterStatus(type)}>
              <Text
                style={[
                  styles.filterText,
                  filterStatus === type && styles.filterTextActive,
                ]}>
                {{all: 'Все', undone: 'Активные', done: 'Выполненные'}[type]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.filterGroup}>
          {(['all', 'low', 'medium', 'high'] as const).map(level => (
            <TouchableOpacity
              key={level}
              style={[
                styles.filterButton,
                filterPriority === level && styles.filterButtonActive,
              ]}
              onPress={() => setFilterPriority(level)}>
              <Text
                style={[
                  styles.filterText,
                  filterPriority === level && styles.filterTextActive,
                ]}>
                {
                  {
                    all: 'Любой',
                    low: 'Низкий',
                    medium: 'Средний',
                    high: 'Высокий',
                  }[level]
                }
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <SectionList
        sections={grouped}
        keyExtractor={item => item.id}
        renderItem={renderTask}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        SectionSeparatorComponent={() => <View style={{height: 20}} />}
        contentContainerStyle={{paddingBottom: 40}}
      />
    </View>
  );
};

const groupTasksByDate = (tasks: Task[]) => {
  const map = new Map<string, Task[]>();

  tasks.forEach(task => {
    if (!map.has(task.date)) {
      map.set(task.date, []);
    }
    map.get(task.date)!.push(task);
  });

  return Array.from(map.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, data]) => ({
      title: formatDate(date),
      data,
    }));
};

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};

const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 16,
      paddingTop: 12,
    },
    heading: {
      fontSize: 22,
      fontWeight: '700',
      color: colors.text,
      marginBottom: 12,
    },
    filters: {
      marginBottom: 16,
    },
    filterGroup: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 8,
    },
    filterButton: {
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 20,
      backgroundColor: '#ccc',
    },
    filterButtonActive: {
      backgroundColor: colors.button,
    },
    filterText: {
      color: '#333',
    },
    filterTextActive: {
      color: colors.buttonText,
      fontWeight: '600',
    },
    sectionHeader: {
      fontSize: 18,
      fontWeight: '600',
      color: colors.button,
      marginBottom: 8,
      marginTop: 16,
    },
    task: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    status: {
      width: 18,
      height: 18,
      borderRadius: 9,
      borderWidth: 2,
      borderColor: '#4CAF50',
      marginRight: 12,
    },
    textWrapper: {
      flex: 1,
    },
    title: {
      fontSize: 16,
      fontWeight: '500',
      color: colors.text,
    },
    titleDone: {
      textDecorationLine: 'line-through',
      color: '#888',
    },
    meta: {
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

export default TaskListScreen;
