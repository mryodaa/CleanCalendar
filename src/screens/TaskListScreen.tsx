import React, {useContext} from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {ThemeContext} from '../contexts/ThemeContext';
import {useTasks} from '../hooks/useTasks';
import {Task, Priority} from '../data/types';

const TaskListScreen = () => {
  const {colors} = useContext(ThemeContext);
  const {tasks, toggle, remove} = useTasks('');

  const grouped = groupTasksByDate(tasks);
  const styles = getStyles(colors);

  const renderTask = ({item}: {item: Task}) => {
    const priorityColors: Record<Priority, string> = {
      low: '#8BC34A',
      medium: '#FFC107',
      high: '#F44336',
    };

    return (
      <TouchableOpacity
        style={styles.task}
        onPress={() => toggle(item.id)}
        onLongPress={() => remove(item.id)}>
        <View
          style={[styles.status, item.isDone && {backgroundColor: '#4CAF50'}]}
        />
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
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Все задачи</Text>
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

  // Возвращаем в виде массива секций
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
