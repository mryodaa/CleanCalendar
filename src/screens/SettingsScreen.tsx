import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {ThemeContext} from '../contexts/ThemeContext';
import {AuthContext} from '../contexts/AuthContext';

const SettingsScreen = () => {
  const {colors} = useContext(ThemeContext);
  const {user, logout} = useContext(AuthContext);

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={[styles.text, {color: colors.text}]}>
        Вы вошли как: {user?.username}
      </Text>
      <Button title="Выйти" onPress={logout} color={colors.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 18, marginBottom: 20},
});

export default SettingsScreen;
