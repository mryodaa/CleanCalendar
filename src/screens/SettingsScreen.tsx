import React, {useContext} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {ThemeContext} from '../contexts/ThemeContext';

const SettingsScreen = () => {
  const {theme, toggleTheme, colors} = useContext(ThemeContext);
  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Настройки</Text>

      <View style={styles.item}>
        <Text style={styles.label}>Тёмная тема</Text>
        <Switch
          value={theme === 'dark'}
          onValueChange={toggleTheme}
          thumbColor={colors.button}
        />
      </View>

      {/* Будущие настройки можно вставлять сюда */}
    </View>
  );
};

const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 20,
    },
    heading: {
      fontSize: 22,
      fontWeight: '700',
      color: colors.text,
      marginBottom: 24,
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      color: colors.text,
    },
  });

export default SettingsScreen;
