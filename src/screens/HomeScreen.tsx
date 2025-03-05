import React, {useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {ThemeContext} from '../contexts/ThemeContext';
import {AuthContext} from '../contexts/AuthContext';
import BannerSlider from '../components/BannerSlider';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const {colors} = useContext(ThemeContext);
  const {user} = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <BannerSlider />
      <View style={styles.greetingContainer}>
        <Text style={[styles.greetingText, {color: colors.text}]}>
          {user ? `Здравствуйте, ${user.name}!` : 'Здравствуйте!'}
        </Text>
        <Text style={[styles.subtitle, {color: colors.text}]}>
          Добро пожаловать в наш банк
        </Text>
      </View>

      <View style={styles.servicesContainer}>
        <TouchableOpacity style={styles.serviceButton}>
          <Icon name="swap-horizontal" size={24} color="#fff" />
          <Text style={styles.serviceText}>Переводы</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceButton}>
          <Icon name="cash-outline" size={24} color="#fff" />
          <Text style={styles.serviceText}>Платежи</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => navigation.navigate('RoleSelection' as never)}>
          <Icon name="cart-outline" size={24} color="#fff" />
          <Text style={styles.serviceText}>Магазин</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.sectionTitle, {color: colors.text}]}>
        Популярные услуги
      </Text>
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.quickAction}>
          <Icon name="wallet-outline" size={24} color={colors.text} />
          <Text style={[styles.quickActionText, {color: colors.text}]}>
            Открыть вклад
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickAction}>
          <Icon name="add-circle-outline" size={24} color={colors.text} />
          <Text style={[styles.quickActionText, {color: colors.text}]}>
            Пополнить баланс
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickAction}>
          <Icon name="document-text-outline" size={24} color={colors.text} />
          <Text style={[styles.quickActionText, {color: colors.text}]}>
            Оформить кредит
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 15},
  greetingContainer: {marginTop: 15, marginBottom: 20},
  greetingText: {fontSize: 22, fontWeight: 'bold'},
  subtitle: {fontSize: 16},

  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  serviceButton: {
    flex: 1,
    backgroundColor: '#ff9900',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  serviceText: {color: '#fff', fontWeight: 'bold', marginTop: 5},

  sectionTitle: {fontSize: 18, fontWeight: 'bold', marginBottom: 10},

  quickActions: {flexDirection: 'row', justifyContent: 'space-between'},
  quickAction: {alignItems: 'center', width: '30%'},
  quickActionText: {marginTop: 5, textAlign: 'center', fontSize: 14},
});

export default HomeScreen;
