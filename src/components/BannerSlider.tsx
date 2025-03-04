import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ListRenderItem,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {banners} from '../data/banners';
import {Banner} from '../data/types';

const {width} = Dimensions.get('window');

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<Banner>>(null);
  const navigation = useNavigation();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex === banners.length - 1 ? 0 : prevIndex + 1;
        flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
        return nextIndex;
      });
    }, 5000);
  };

  useEffect(() => {
    startAutoScroll();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const onScrollBeginDrag = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const onMomentumScrollEnd = (event: any) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(newIndex);
    startAutoScroll();
  };

  const renderItem: ListRenderItem<Banner> = ({item}) => (
    <View style={styles.bannerItem}>
      <Image source={{uri: item.image}} style={styles.bannerImage} />
      <View style={styles.overlay} />
      <View style={styles.bannerContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(item.link as never)}>
          <Text style={styles.buttonText}>{item.actionText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.sliderContainer}>
      <FlatList
        ref={flatListRef}
        data={banners}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        onScrollBeginDrag={onScrollBeginDrag}
        onMomentumScrollEnd={onMomentumScrollEnd}
        scrollEventThrottle={16}
        snapToInterval={width}
        decelerationRate={'fast'}
      />
      <View style={styles.indicatorContainer}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentIndex === index ? styles.activeIndicator : {},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    height: 200,
  },
  bannerItem: {
    width,
    height: 200,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  bannerContent: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#ff9900',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#bbb',
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#ff9900',
  },
});

export default BannerSlider;
