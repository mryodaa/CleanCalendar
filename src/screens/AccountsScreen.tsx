import React, {useState, useContext, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Dimensions,
  ViewToken,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../contexts/AuthContext';
import {ThemeContext} from '../contexts/ThemeContext';
import OperationsPanel from '../components/OperationsPanel';

const {width} = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;
const CARD_MARGIN = 10;
const CARD_SPACING = CARD_WIDTH + CARD_MARGIN * 2;
const CARD_HEIGHT = CARD_WIDTH / 1.586;

interface Card {
  cardNumber: string;
  expiry: string;
  cvv: string;
  type: 'debit' | 'credit';
  balance: number;
}

interface CardItemProps {
  card: Card;
  index: number;
}

const CardItem = ({card, index}: CardItemProps) => {
  const formatCardNumber = (number: string) => {
    return number
      .split(' ')
      .map((group, idx, arr) => (idx < arr.length - 1 ? '****' : group))
      .join(' ');
  };

  let gradientColors;
  if (index === 0) {
    gradientColors = ['#FF7E00', '#FFB347'];
  } else if (index === 1) {
    gradientColors = ['#0D47A1', '#42A5F5'];
  } else {
    gradientColors = ['#FF7E00', '#FFB347'];
  }

  return (
    <View style={styles.cardWrapper}>
      <LinearGradient
        colors={gradientColors}
        style={styles.cardContainer}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <View style={styles.cardHeader}>
          <Text style={styles.bankName}>MyBank</Text>
        </View>
        <Text style={styles.cardNumber}>
          {formatCardNumber(card.cardNumber)}
        </Text>
        <View style={styles.cardFooter}>
          <View>
            <Text style={styles.label}>Срок</Text>
            <Text style={styles.footerText}>{card.expiry}</Text>
          </View>
          <View>
            <Text style={styles.label}>Тип</Text>
            <Text style={styles.footerText}>{card.type.toUpperCase()}</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const AccountsScreen = () => {
  const {user} = useContext(AuthContext);
  const {theme, colors} = useContext(ThemeContext);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const onViewRef = useRef(({viewableItems}: {viewableItems: ViewToken[]}) => {
    if (viewableItems && viewableItems.length > 0) {
      setSelectedCardIndex(viewableItems[0].index ?? 0);
    }
  });
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  if (!user) {
    return (
      <View
        style={[
          styles.centeredContainer,
          {backgroundColor: colors.background},
        ]}>
        <Text style={[styles.message, {color: colors.text}]}>
          Пользователь не авторизован
        </Text>
      </View>
    );
  }

  const selectedCard = user.cards[selectedCardIndex];

  // Если тема темная, переопределим стили для деталей:
  const detailsTextColor = theme === 'dark' ? '#fff' : colors.text;
  const detailsBackground = theme === 'dark' ? '#333' : '#fff'; // можно менять, если нужно

  return (
    <SafeAreaView
      style={[styles.screenContainer, {backgroundColor: colors.background}]}>
      <Text style={[styles.title, {color: colors.text}]}>Ваши карты</Text>
      <FlatList
        data={user.cards}
        horizontal
        snapToInterval={CARD_SPACING}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.cardNumber}
        renderItem={({item, index}) => <CardItem card={item} index={index} />}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        contentContainerStyle={{paddingHorizontal: (width - CARD_WIDTH) / 2}}
      />
      <OperationsPanel
        showDetails={showDetails}
        toggleDetails={() => setShowDetails(prev => !prev)}
      />
      {showDetails && (
        <View
          style={[
            styles.detailsContainer,
            {backgroundColor: detailsBackground},
          ]}>
          <Text style={[styles.detailsTitle, {color: detailsTextColor}]}>
            Реквизиты карты
          </Text>
          <Text style={[styles.detailLabel, {color: detailsTextColor}]}>
            Номер карты:
          </Text>
          <Text style={[styles.detailText, {color: detailsTextColor}]}>
            {selectedCard.cardNumber}
          </Text>
          <Text style={[styles.detailLabel, {color: detailsTextColor}]}>
            Срок действия:
          </Text>
          <Text style={[styles.detailText, {color: detailsTextColor}]}>
            {selectedCard.expiry}
          </Text>
          <Text style={[styles.detailLabel, {color: detailsTextColor}]}>
            Тип карты:
          </Text>
          <Text style={[styles.detailText, {color: detailsTextColor}]}>
            {selectedCard.type.toUpperCase()}
          </Text>
          <Text style={[styles.detailLabel, {color: detailsTextColor}]}>
            CVV:
          </Text>
          <Text style={[styles.detailText, {color: detailsTextColor}]}>
            {selectedCard.cvv}
          </Text>
          <Text style={[styles.detailLabel, {color: detailsTextColor}]}>
            Баланс карты:
          </Text>
          <Text style={[styles.detailText, {color: detailsTextColor}]}>
            {selectedCard.balance.toLocaleString('ru-RU')} ₸
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default AccountsScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
  },
  cardWrapper: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginHorizontal: CARD_MARGIN,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  cardContainer: {
    flex: 1,
    borderRadius: 15,
    padding: 20,
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  bankName: {
    fontSize: 16,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.8)',
  },
  cardNumber: {
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 10,
    color: '#fff',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.8)',
  },
  footerText: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 4,
    color: '#fff',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
  },
  detailsContainer: {
    marginTop: 20,
    width: '90%',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center',
  },
  detailLabel: {
    fontSize: 14,
    marginTop: 10,
  },
  detailText: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
});
