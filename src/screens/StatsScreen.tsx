import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../contexts/ThemeContext';
import {useTasks} from '../hooks/useTasks';
import {Task} from '../data/types';

const StatsScreen = () => {
  const {colors} = useContext(ThemeContext);
  const {tasks} = useTasks('');
  const styles = getStyles(colors);

  const total = tasks.length;
  const done = tasks.filter(t => t.isDone).length;
  const undone = total - done;

  const byPriority = {
    low: tasks.filter(t => t.priority === 'low').length,
    medium: tasks.filter(t => t.priority === 'medium').length,
    high: tasks.filter(t => t.priority === 'high').length,
  };

  const lastDate = tasks.length
    ? new Date(
        Math.max(...tasks.map(t => new Date(t.date).getTime())),
      ).toLocaleDateString('ru-RU')
    : '-';

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Статистика</Text>

      <View style={styles.block}>
        <Text style={styles.label}>Всего задач</Text>
        <Text style={styles.value}>{total}</Text>
      </View>

      <View style={styles.blockRow}>
        <View style={styles.blockHalf}>
          <Text style={styles.label}>Выполнено</Text>
          <Text style={styles.value}>{done}</Text>
        </View>
        <View style={styles.blockHalf}>
          <Text style={styles.label}>Осталось</Text>
          <Text style={styles.value}>{undone}</Text>
        </View>
      </View>

      <View style={styles.block}>
        <Text style={styles.label}>Приоритеты</Text>
        <Text style={styles.subvalue}>Низкий: {byPriority.low}</Text>
        <Text style={styles.subvalue}>Средний: {byPriority.medium}</Text>
        <Text style={styles.subvalue}>Высокий: {byPriority.high}</Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.label}>Последняя дата активности</Text>
        <Text style={styles.value}>{lastDate}</Text>
      </View>
    </View>
  );
};

const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: colors.background,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 20,
    },
    block: {
      marginBottom: 20,
    },
    blockRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 20,
    },
    blockHalf: {
      flex: 1,
    },
    label: {
      fontSize: 16,
      color: colors.text,
      marginBottom: 4,
    },
    value: {
      fontSize: 20,
      fontWeight: '600',
      color: colors.button,
    },
    subvalue: {
      fontSize: 15,
      color: colors.text,
      marginTop: 2,
    },
  });

export default StatsScreen;
