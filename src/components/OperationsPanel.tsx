import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../contexts/ThemeContext';

interface OperationsPanelProps {
  showDetails: boolean;
  toggleDetails: () => void;
  showAccountDetails: boolean;
  toggleAccountDetails: () => void;
}

const operations = [
  {id: '1', title: 'Перевод между счетами', icon: 'swap-horizontal'},
  {id: '2', title: 'Оплата услуг', icon: 'receipt'},
  {id: '3', title: 'Пополнение счета', icon: 'credit-card-plus-outline'},
];

const OperationsPanel = ({
  showDetails,
  toggleDetails,
  showAccountDetails,
  toggleAccountDetails,
}: OperationsPanelProps) => {
  const {colors} = useContext(ThemeContext);

  const handleOperationPress = (title: string) => {
    console.log(`Вы выбрали: ${title}`);
  };

  return (
    <View style={styles.container}>
      {/* Переключение отображения реквизитов карты */}
      <TouchableOpacity
        style={[styles.toggleItem, {borderBottomColor: colors.text}]}
        onPress={toggleDetails}
        activeOpacity={0.7}>
        <View style={styles.toggleContent}>
          <Icon
            name={showDetails ? 'eye-off-outline' : 'eye-outline'}
            size={24}
            color={colors.text}
            style={styles.icon}
          />
          <Text style={[styles.toggleText, {color: colors.text}]}>
            {showDetails
              ? 'Скрыть реквизиты карты'
              : 'Показать реквизиты карты'}
          </Text>
        </View>
      </TouchableOpacity>
      {/* Переключение отображения реквизитов счета */}
      <TouchableOpacity
        style={[styles.toggleItem, {borderBottomColor: colors.text}]}
        onPress={toggleAccountDetails}
        activeOpacity={0.7}>
        <View style={styles.toggleContent}>
          <Icon
            name={
              showAccountDetails ? 'account-off-outline' : 'account-outline'
            }
            size={24}
            color={colors.text}
            style={styles.icon}
          />
          <Text style={[styles.toggleText, {color: colors.text}]}>
            {showAccountDetails
              ? 'Скрыть реквизиты счета'
              : 'Показать реквизиты счета'}
          </Text>
        </View>
      </TouchableOpacity>
      {/* Остальные операции */}
      {operations.map(op => (
        <TouchableOpacity
          key={op.id}
          style={[styles.operationItem, {borderBottomColor: colors.text}]}
          onPress={() => handleOperationPress(op.title)}
          activeOpacity={0.7}>
          <View style={styles.operationContent}>
            <Icon
              name={op.icon}
              size={24}
              color={colors.text}
              style={styles.icon}
            />
            <Text style={[styles.operationText, {color: colors.text}]}>
              {op.title}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default OperationsPanel;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: '90%',
    alignSelf: 'center',
  },
  toggleItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  toggleContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 16,
    fontWeight: '600',
  },
  operationItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
  },
  operationContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  operationText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
