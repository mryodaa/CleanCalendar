import React, {useState, useContext, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Dimensions,
  ViewToken,
  TouchableOpacity,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../contexts/AuthContext';
import {ThemeContext} from '../contexts/ThemeContext';
import OperationsPanel from '../components/OperationsPanel';

const {width, height} = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;
const CARD_MARGIN = 10;
const CARD_SPACING = CARD_WIDTH + CARD_MARGIN * 2;
const CARD_HEIGHT = CARD_WIDTH / 1.586;

// Тип для элемента массива FlatList: либо карта, либо элемент с кнопкой "Добавить карту"
type CardData = Card | {isNew: true};

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
        {/* Отображение баланса карты */}
        <Text style={styles.cardBalance}>
          Баланс: {card.balance.toLocaleString('ru-RU')} ₸
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
  const {user, addCard} = useContext(AuthContext);
  const {theme, colors} = useContext(ThemeContext);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showAccountDetails, setShowAccountDetails] = useState(false);
  const [showCardCreationModal, setShowCardCreationModal] = useState(false);

  const onViewRef = useRef(({viewableItems}: {viewableItems: ViewToken[]}) => {
    if (viewableItems && viewableItems.length > 0) {
      setSelectedCardIndex(viewableItems[0].index ?? 0);
    }
  });
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  // Animated value для модального окна создания карты
  const cardCreationAnim = useRef(new Animated.Value(height)).current;
  const cardModalAnim = useRef(new Animated.Value(height)).current;
  const accountModalAnim = useRef(new Animated.Value(height)).current;
  useEffect(() => {
    Animated.timing(cardCreationAnim, {
      toValue: showCardCreationModal ? 0 : height,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [showCardCreationModal, cardCreationAnim]);
  useEffect(() => {
    Animated.timing(cardModalAnim, {
      toValue: showCardDetails ? 0 : height,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [showCardDetails, cardModalAnim]);
  useEffect(() => {
    Animated.timing(accountModalAnim, {
      toValue: showAccountDetails ? 0 : height,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [showAccountDetails, accountModalAnim]);

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
  // Объединяем существующие карты с кнопкой "Добавить карту" (добавляем элемент всегда)
  const cardsData: CardData[] = [...user.cards, {isNew: true}];

  // Функция генерации случайных цифр заданной длины
  const randomDigits = (length: number) =>
    Math.floor(Math.random() * Math.pow(10, length))
      .toString()
      .padStart(length, '0');

  // Функция генерации карты по типу
  const generateCard = (cardType: 'debit' | 'credit'): Card => {
    const cardNumber = `${randomDigits(4)} ${randomDigits(4)} ${randomDigits(
      4,
    )} ${randomDigits(4)}`;
    const currentYear = new Date().getFullYear();
    const expiryYear = cardType === 'debit' ? currentYear + 3 : currentYear + 5;
    const month = Math.floor(Math.random() * 12) + 1;
    const expiryMonth = month < 10 ? `0${month}` : month.toString();
    const expiry = `${expiryMonth}/${expiryYear.toString().slice(-2)}`;
    const cvv = randomDigits(3);
    const balance = cardType === 'debit' ? 0 : 10000;
    return {
      cardNumber,
      expiry,
      cvv,
      type: cardType,
      balance,
    };
  };

  const handleCardCreation = (cardType: 'debit' | 'credit') => {
    const newCard = generateCard(cardType);
    addCard(newCard);
    setShowCardCreationModal(false);
  };

  const renderCardCreationModal = () => (
    <View style={styles.modalOverlay} pointerEvents="box-none">
      <TouchableOpacity
        style={styles.overlayTouchable}
        onPress={() => setShowCardCreationModal(false)}
        activeOpacity={1}
      />
      <Animated.View
        style={[
          styles.modalContainer,
          {
            transform: [{translateY: cardCreationAnim}],
            backgroundColor: colors.background,
          },
        ]}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setShowCardCreationModal(false)}>
          <Icon name="close" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.modalTitle, {color: colors.text}]}>
          Создать новую карту
        </Text>
        <TouchableOpacity
          style={styles.modalOption}
          onPress={() => handleCardCreation('debit')}>
          <Text style={[styles.modalOptionText, {color: colors.text}]}>
            Дебетовая карта
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.modalOption}
          onPress={() => handleCardCreation('credit')}>
          <Text style={[styles.modalOptionText, {color: colors.text}]}>
            Кредитная карта
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );

  // Рендерим OperationsPanel только если у пользователя есть хотя бы одна карта
  const showOperations = user.cards.length > 0;

  // Для деталей: в темной теме для контраста используем белый фон, иначе background
  const detailsCardBackground = theme === 'dark' ? '#333' : colors.background;
  const detailsAccountBackground =
    theme === 'dark' ? '#333' : colors.background;
  const detailsTextColor = theme === 'dark' ? '#fff' : colors.text;

  return (
    <SafeAreaView
      style={[styles.screenContainer, {backgroundColor: colors.background}]}>
      <Text style={[styles.title, {color: colors.text}]}>Ваши карты</Text>
      <FlatList
        data={cardsData}
        horizontal
        snapToInterval={CARD_SPACING}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) =>
          'isNew' in item ? `new-${index}` : (item as Card).cardNumber
        }
        renderItem={({item, index}) =>
          'isNew' in item ? (
            <TouchableOpacity
              style={[styles.cardWrapper, styles.plusCard]}
              onPress={() => setShowCardCreationModal(true)}>
              <View style={styles.plusContent}>
                <Icon name="plus" size={48} color="#777" />
                <Text style={styles.plusText}>Добавить карту</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <CardItem card={item as Card} index={index} />
          )
        }
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        contentContainerStyle={{paddingHorizontal: (width - CARD_WIDTH) / 2}}
      />
      {showOperations && (
        <OperationsPanel
          showDetails={showCardDetails}
          toggleDetails={() => setShowCardDetails(prev => !prev)}
          showAccountDetails={showAccountDetails}
          toggleAccountDetails={() => setShowAccountDetails(prev => !prev)}
        />
      )}
      {/* Модальное окно для реквизитов карты */}
      {showCardDetails && (
        <View style={styles.modalOverlay}>
          <TouchableOpacity
            style={styles.overlayTouchable}
            onPress={() => setShowCardDetails(false)}
            activeOpacity={1}
          />
          <Animated.View
            style={[
              styles.modalContainer,
              {
                transform: [{translateY: cardModalAnim}],
                backgroundColor: detailsCardBackground,
              },
            ]}>
            {/* Кнопка закрытия модалки */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowCardDetails(false)}>
              <Icon name="close" size={24} color={detailsTextColor} />
            </TouchableOpacity>
            <Text style={[styles.modalTitle, {color: detailsTextColor}]}>
              Реквизиты карты
            </Text>
            <Text style={[styles.modalLabel, {color: detailsTextColor}]}>
              Номер карты:
            </Text>
            <Text style={[styles.modalText, {color: detailsTextColor}]}>
              {selectedCard.cardNumber}
            </Text>
            <Text style={[styles.modalLabel, {color: detailsTextColor}]}>
              Срок действия:
            </Text>
            <Text style={[styles.modalText, {color: detailsTextColor}]}>
              {selectedCard.expiry}
            </Text>
            <Text style={[styles.modalLabel, {color: detailsTextColor}]}>
              Тип карты:
            </Text>
            <Text style={[styles.modalText, {color: detailsTextColor}]}>
              {selectedCard.type.toUpperCase()}
            </Text>
            <Text style={[styles.modalLabel, {color: detailsTextColor}]}>
              CVV:
            </Text>
            <Text style={[styles.modalText, {color: detailsTextColor}]}>
              {selectedCard.cvv}
            </Text>
            <Text style={[styles.modalLabel, {color: detailsTextColor}]}>
              Баланс карты:
            </Text>
            <Text style={[styles.modalText, {color: detailsTextColor}]}>
              {selectedCard.balance.toLocaleString('ru-RU')} ₸
            </Text>
          </Animated.View>
        </View>
      )}
      {/* Модальное окно для реквизитов счета */}
      {showAccountDetails && (
        <View style={styles.modalOverlay}>
          <TouchableOpacity
            style={styles.overlayTouchable}
            onPress={() => setShowAccountDetails(false)}
            activeOpacity={1}
          />
          <Animated.View
            style={[
              styles.modalContainer,
              {
                transform: [{translateY: accountModalAnim}],
                backgroundColor: detailsAccountBackground,
              },
            ]}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowAccountDetails(false)}>
              <Icon name="close" size={24} color={detailsTextColor} />
            </TouchableOpacity>
            <Text style={[styles.modalTitle, {color: detailsTextColor}]}>
              Реквизиты счета
            </Text>
            <Text style={[styles.modalLabel, {color: detailsTextColor}]}>
              ФИО:
            </Text>
            <Text style={[styles.modalText, {color: detailsTextColor}]}>
              {user.fullName}
            </Text>
            <Text style={[styles.modalLabel, {color: detailsTextColor}]}>
              Номер счета:
            </Text>
            <Text style={[styles.modalText, {color: detailsTextColor}]}>
              {user.accountNumber}
            </Text>
          </Animated.View>
        </View>
      )}
      {showCardCreationModal && renderCardCreationModal()}
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
  cardBalance: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
    marginTop: 8,
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
  plusCard: {
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    fontSize: 16,
    color: '#777',
    marginTop: 10,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 50,
    justifyContent: 'flex-end',
  },
  overlayTouchable: {
    flex: 1,
  },
  modalContainer: {
    width: '100%',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 100,
    elevation: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 20,
    zIndex: 101,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalLabel: {
    fontSize: 14,
    marginTop: 10,
  },
  modalText: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
  toggleButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  modalOption: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalOptionText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
