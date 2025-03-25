import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';

type Navigation = NativeStackNavigationProp<RootStackParamList, 'Calendar'>;

const SettingsScreen = () => {
  const navigation = useNavigation<Navigation>();

  return (
    <View>
      <Text>Экран настроек</Text>
    </View>
  );
};

export default SettingsScreen;
