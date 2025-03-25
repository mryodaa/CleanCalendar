import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';

type Navigation = NativeStackNavigationProp<RootStackParamList, 'Calendar'>;

const AddTackScreen = () => {
  const navigation = useNavigation<Navigation>();

  return (
    <View>
      <Text>Экран добавления таски</Text>
    </View>
  );
};

export default AddTackScreen;
