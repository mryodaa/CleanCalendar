import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../contexts/ThemeContext';

const AccountsScreen = () => {
  const {colors} = useContext(ThemeContext);

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={[styles.text, {color: colors.text}]}>
        Тут будут карты и счета
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 18, fontWeight: 'bold'},
});

export default AccountsScreen;
