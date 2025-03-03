import {Product} from '../data/types';

export const products: Product[] = [
  {
    id: 'prod1',
    name: 'Samsung Galaxy S23 Ultra',
    price: 50,
    description:
      'Флагманский смартфон с мощной камерой и топовым процессором. Отличается большим экраном и ёмкой батареей. Поддерживает быструю зарядку и беспроводную зарядку.',
    image:
      'https://5zv.by/image/cache/catalog/easyphoto/38143/s23-ultra-9-1000x1000-jpg_9-1000x1000.jpg',
    stock: 25,
    discount: 0,
    categoryId: 'smartphones', // Привязываем товар к подкатегории
  },
  {
    id: 'prod2',
    name: 'iPhone 14 Pro Max',
    price: 120,
    description:
      'Передовой смартфон от Apple с обновлённой камерой и ProMotion дисплеем. Обеспечивает невероятную производительность благодаря новому процессору. Совместим с аксессуарами MagSafe.',
    image: 'https://cdn1.ozone.ru/s3/multimedia-l/6487692849.jpg',
    stock: 870,
    discount: 35,
    categoryId: 'smartphones',
  },
  {
    id: 'prod3',
    name: 'Google Pixel 7 Pro',
    price: 90,
    description:
      'Инновационный смартфон от Google с улучшенной ночной съемкой. Работает на чистом Android с долгосрочной поддержкой обновлений. Камера с AI-алгоритмами обеспечивает высочайшее качество снимков.',
    image: 'https://cdn1.ozone.ru/s3/multimedia-5/6537512441.jpg',
    stock: 5200,
    discount: 0,
    categoryId: 'smartphones',
  },
  {
    id: 'prod4',
    name: 'OnePlus 11',
    price: 80,
    description:
      'Флагманский смартфон с мощным процессором Snapdragon и поддержкой 120 Гц дисплея. Обеспечивает плавную работу системы и высокую автономность. Поддерживает сверхбыструю зарядку.',
    image:
      'https://www.gizmochina.com/wp-content/uploads/2023/01/OnePlus-11.png',
    stock: 134,
    discount: 27,
    categoryId: 'smartphones',
  },
  {
    id: 'prod5',
    name: 'Xiaomi 13 Pro',
    price: 70,
    description:
      'Современный смартфон с камерой Leica для профессиональной съёмки. Оснащён мощным процессором и AMOLED-дисплеем. Поддерживает 120 Вт быструю зарядку.',
    image:
      'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-14/738/284/951/121/18/100047688348b0.png',
    stock: 9820,
    discount: 50,
    categoryId: 'smartphones',
  },
  {
    id: 'prod6',
    name: 'Sony Xperia 1 V',
    price: 110,
    description:
      'Флагман Sony с 4K OLED-дисплеем и топовой камерой. Подходит для профессиональной видеосъёмки. Поддерживает Dolby Atmos и высококачественный звук.',
    image:
      'https://cdn.mos.cms.futurecdn.net/7WpDqbsscnTmmvBEmtDQCb-970-80.jpg',
    stock: 59,
    discount: 5,
    categoryId: 'smartphones',
  },
  {
    id: 'prod7',
    name: 'Huawei P60 Pro',
    price: 95,
    description:
      'Флагманский смартфон с мощной камерой и оптикой Leica. Оснащён мощным процессором и системой быстрой зарядки. Поддерживает уникальные алгоритмы фотообработки.',
    image:
      'https://www.mechta.kz/export/1cbitrix/import_files/3c/3c9665d0-f3c8-11ed-a25a-005056b6dbd7.jpeg',
    stock: 4300,
    discount: 18,
    categoryId: 'smartphones',
  },
  {
    id: 'prod8',
    name: 'Realme GT 3',
    price: 65,
    description:
      'Производительный смартфон с мощным процессором и игровым режимом. Поддерживает сверхбыструю зарядку и 144 Гц экран. Отличается качественным звуком и дизайном.',
    image: 'https://ir.ozone.ru/s3/multimedia-9/c1000/6735516921.jpg',
    stock: 678,
    discount: 0,
    categoryId: 'smartphones',
  },
  {
    id: 'prod9',
    name: 'Samsung Neo QLED 8K',
    price: 2500,
    description:
      'Премиальный телевизор с 8K-разрешением и технологией Quantum Mini LED. Обеспечивает реалистичное изображение и высокую яркость. Поддерживает интеллектуальную обработку изображения.',
    image:
      'https://online-samsung.ru/sites/default/files/2024-08/QE75QN900BUXCE_2.png',
    stock: 743,
    discount: 20,
    categoryId: 'tv',
  },
  {
    id: 'prod10',
    name: 'LG OLED C3',
    price: 1800,
    description:
      'Телевизор с OLED-матрицей и поддержкой Dolby Vision. Глубокий черный цвет и точная цветопередача. Поддержка NVIDIA G-SYNC для геймеров.',
    image:
      'https://newmart.ru/upload/iblock/fc2/fc2f46da710b59371f383dbf9bfd3741.jpg',
    stock: 3120,
    discount: 0,
    categoryId: 'tv',
  },
  {
    id: 'prod11',
    name: 'Sony Bravia XR A95K',
    price: 2200,
    description:
      'Флагманский OLED-телевизор с интеллектуальным процессором XR. Высокое качество изображения и реалистичный звук. Поддержка IMAX Enhanced и Acoustic Surface Audio.',
    image:
      'https://d1ncau8tqf99kp.cloudfront.net/converted/101422_original_local_1200x1050_v3_converted.webp',
    stock: 128,
    discount: 0,
    categoryId: 'tv',
  },
  {
    id: 'prod12',
    name: 'TCL 6-Series Mini LED',
    price: 900,
    description:
      'Доступный телевизор с технологией Mini LED и QLED-дисплеем. Высокая контрастность и поддержка HDR10+. Подходит для просмотра фильмов и игр.',
    image:
      'https://avatars.mds.yandex.net/i?id=28718528a8fe27b457c52238f6f807edd75e2ee0-9068443-images-thumbs&n=13',
    stock: 5750,
    discount: 10,
    categoryId: 'tv',
  },
  {
    id: 'prod13',
    name: 'Hisense U8H',
    price: 800,
    description:
      'Телевизор с ULED-технологией и поддержкой Dolby Vision. Яркие цвета и высокая контрастность. Поддерживает обновление экрана 120 Гц.',
    image: 'https://m.media-amazon.com/images/I/71acFqj-OGL.jpg',
    stock: 932,
    discount: 25,
    categoryId: 'tv',
  },
  {
    id: 'prod14',
    name: 'Philips OLED+936',
    price: 2000,
    description:
      'OLED-телевизор с технологией Ambilight для полного погружения. Высокое качество изображения и встроенная аудиосистема Bowers & Wilkins. Идеален для кинолюбителей.',
    image:
      'https://avatars.mds.yandex.net/i?id=e0d4c94f765923e01630d5e05f113bdadf22bacd-12539768-images-thumbs&n=13',
    stock: 420,
    discount: 0,
    categoryId: 'tv',
  },
  {
    id: 'prod15',
    name: 'Vizio P-Series Quantum X',
    price: 1100,
    description:
      'Телевизор с поддержкой 4K и HDR10+ для яркого и насыщенного изображения. Поддержка FreeSync для плавного геймплея. Высокая яркость и точная цветопередача.',
    image:
      'https://avatars.mds.yandex.net/i?id=5a38df03f64ea959f6c00ca5bc5b0adc4eabdf950381b616-10287336-images-thumbs&n=13',
    stock: 2875,
    discount: 18,
    categoryId: 'tv',
  },
  {
    id: 'prod16',
    name: 'Куртка зимняя North Face',
    price: 320,
    description:
      'Теплая зимняя куртка с водонепроницаемым покрытием. Отлично защищает от холода и ветра. Подходит для экстремальных погодных условий.',
    image:
      'https://avatars.mds.yandex.net/i?id=75eba9fe32052a75a09be4cc3ca8b450c5ecd084-9181211-images-thumbs&n=13',
    stock: 512,
    discount: 0,
    categoryId: 'clothesMale',
  },
  {
    id: 'prod17',
    name: 'Джинсы Levi’s 501',
    price: 120,
    description:
      'Классические мужские джинсы прямого кроя. Отличаются прочностью и удобством. Подходят для повседневной носки.',
    image:
      'https://avatars.mds.yandex.net/i?id=d1fa4cdf5e1338597ea5ddaf64b7632360ff179f-5242719-images-thumbs&n=13',
    stock: 3240,
    discount: 15,
    categoryId: 'clothesMale',
  },
  {
    id: 'prod18',
    name: 'Футболка Nike Dri-FIT',
    price: 45,
    description:
      'Легкая спортивная футболка с технологией отведения влаги. Идеальна для занятий спортом и активного образа жизни. Обеспечивает комфорт в течение дня.',
    image:
      'https://avatars.mds.yandex.net/i?id=28b2444fab640507af5322bef9c69a25dfbeb39d-4120434-images-thumbs&n=13',
    stock: 827,
    discount: 10,
    categoryId: 'clothesMale',
  },
  {
    id: 'prod19',
    name: 'Костюм Hugo Boss',
    price: 780,
    description:
      'Элегантный мужской костюм для официальных мероприятий. Выполнен из качественных материалов. Идеально сидит по фигуре.',
    image:
      'https://avatars.mds.yandex.net/i?id=a33a0474a4b19a68334a60bbb86f5be537bf2c39-10088009-images-thumbs&n=13',
    stock: 190,
    discount: 30,
    categoryId: 'clothesMale',
  },
  {
    id: 'prod20',
    name: 'Кроссовки Adidas Ultraboost',
    price: 220,
    description:
      'Беговые кроссовки с амортизацией Boost. Подходят для длительных пробежек и активного отдыха. Обеспечивают комфорт и поддержку стопы.',
    image:
      'https://avatars.mds.yandex.net/i?id=273746a25a4f70f5a1e8b4bc2a45822ac38592c0-5483063-images-thumbs&n=13',
    stock: 1530,
    discount: 20,
    categoryId: 'clothesMale',
  },
  {
    id: 'prod21',
    name: 'Рубашка Tommy Hilfiger',
    price: 95,
    description:
      'Стильная мужская рубашка с приталенным кроем. Отличный вариант как для работы, так и для повседневного использования. Качественные материалы и аккуратный пошив.',
    image:
      'https://avatars.mds.yandex.net/i?id=f60af59acfcefdc65ea9fcef7ff88f29e833273c-5515133-images-thumbs&n=13',
    stock: 835,
    discount: 12,
    categoryId: 'clothesMale',
  },
  {
    id: 'prod22',
    name: 'Шорты Puma',
    price: 50,
    description:
      'Легкие спортивные шорты для активного отдыха. Удобная посадка и дышащий материал. Подходят для занятий спортом.',
    image:
      'https://avatars.mds.yandex.net/i?id=c4e9807a73e892e21850f9766d200d509e8e0b85badb9335-12900328-images-thumbs&n=13',
    stock: 265,
    discount: 18,
    categoryId: 'clothesMale',
  },
  {
    id: 'prod23',
    name: 'Платье Gucci',
    price: 1200,
    description:
      'Элегантное платье от Gucci, выполненное из премиальных материалов. Отлично подчеркивает фигуру и подходит для торжественных мероприятий. Комфортное и стильное.',
    image:
      'https://avatars.mds.yandex.net/i?id=5f9735a87b7377219b0214441f806f11f8bb37d9-10948701-images-thumbs&n=13',
    stock: 340,
    discount: 0,
    categoryId: 'clothesFemale',
  },
  {
    id: 'prod24',
    name: 'Джинсы Levi’s 721',
    price: 140,
    description:
      'Женские джинсы с высокой посадкой, обеспечивающие комфорт и стильный вид. Отлично сочетаются с разными видами одежды. Прочные и долговечные.',
    image:
      'https://avatars.mds.yandex.net/i?id=d01bebb7db17bf2ef9e8a6436b3fbc7cea2e2522-8497474-images-thumbs&n=13',
    stock: 2450,
    discount: 20,
    categoryId: 'clothesFemale',
  },
  {
    id: 'prod25',
    name: 'Блузка Zara',
    price: 65,
    description:
      'Легкая женская блузка с элегантным дизайном. Подходит как для работы, так и для повседневных выходов. Выполнена из приятной ткани.',
    image:
      'https://avatars.mds.yandex.net/i?id=0d8011e4e6c90146b80f2059ae990607-5210456-images-thumbs&n=13',
    stock: 700,
    discount: 15,
    categoryId: 'clothesFemale',
  },
  {
    id: 'prod26',
    name: 'Кроссовки Nike Air Max',
    price: 180,
    description:
      'Женские кроссовки с амортизацией Air Max. Идеальны для занятий спортом и активного отдыха. Обеспечивают комфорт на весь день.',
    image:
      'https://avatars.mds.yandex.net/i?id=345f578d522515a099b16b1a62112cdc76e1ba92-3163703-images-thumbs&n=13',
    stock: 1550,
    discount: 18,
    categoryId: 'clothesFemale',
  },
  {
    id: 'prod27',
    name: 'Куртка зимняя Moncler',
    price: 980,
    description:
      'Теплая зимняя куртка от Moncler, обеспечивающая максимальную защиту от холода. Легкая, удобная и стильная. Отличный выбор для холодного климата.',
    image:
      'https://avatars.mds.yandex.net/i?id=7da0dc3b5c62d1ab214671a6bf1416507bbf51a5-5086971-images-thumbs&n=13',
    stock: 210,
    discount: 22,
    categoryId: 'clothesFemale',
  },
  {
    id: 'prod28',
    name: 'Юбка Chanel',
    price: 750,
    description:
      'Классическая юбка от Chanel, выполненная из высококачественных материалов. Подчеркивает женственность и элегантность. Подходит для деловых встреч и торжественных случаев.',
    image:
      'https://avatars.mds.yandex.net/i?id=2b756dfd78c581c718be574b6da060c2530acdd832404179-5169365-images-thumbs&n=13',
    stock: 95,
    discount: 12,
    categoryId: 'clothesFemale',
  },
  {
    id: 'prod29',
    name: 'Шорты Adidas',
    price: 55,
    description:
      'Женские спортивные шорты для активного образа жизни. Легкие, удобные и дышащие. Отлично подходят для тренировок.',
    image:
      'https://avatars.mds.yandex.net/i?id=ed4627759d833280b5210fe639dab5d6522539f9-8473939-images-thumbs&n=13',
    stock: 485,
    discount: 0,
    categoryId: 'clothesFemale',
  },
  {
    id: 'prod30',
    name: 'Детский свитер GAP',
    price: 55,
    description:
      'Теплый и уютный свитер для детей. Изготовлен из мягкого хлопка. Подходит для повседневной носки в холодное время года.',
    image:
      'https://avatars.mds.yandex.net/i?id=e2776ed18780ee3e7d0478a985d00cb165b7cb70-12168040-images-thumbs&n=13',
    stock: 500,
    discount: 18,
    categoryId: 'clothesChild',
  },
  {
    id: 'prod31',
    name: 'Комбинезон H&M',
    price: 70,
    description:
      'Удобный детский комбинезон для прогулок. Дышащий материал и свободный крой обеспечивают комфорт. Подходит для зимы.',
    image:
      'https://avatars.mds.yandex.net/i?id=1d056e276cfd994877ed2d967277b3e6-2375701-images-thumbs&n=13',
    stock: 1200,
    discount: 15,
    categoryId: 'clothesChild',
  },
  {
    id: 'prod32',
    name: 'Детские носки Puma',
    price: 10,
    description:
      'Набор мягких и удобных носков. Дышащая ткань защищает от потливости. Отличный выбор для повседневного ношения.',
    image:
      'https://avatars.mds.yandex.net/i?id=eb1bc90cc74d24b2b30cecf024280d4052345331-7937305-images-thumbs&n=13',
    stock: 3500,
    discount: 25,
    categoryId: 'clothesChild',
  },
  {
    id: 'prod33',
    name: 'Детская шапка Adidas',
    price: 25,
    description:
      'Теплая зимняя шапка для детей. Приятный на ощупь материал. Хорошо сохраняет тепло.',
    image:
      'https://avatars.mds.yandex.net/i?id=2a88a2fecd188887046240a2c2b600a8-5652925-images-thumbs&n=13',
    stock: 800,
    discount: 0,
    categoryId: 'clothesChild',
  },
  {
    id: 'prod34',
    name: 'Пижама Disney',
    price: 45,
    description:
      'Мягкая и удобная пижама с рисунком любимых персонажей. Подходит для спокойного сна и отдыха. Изображены любимые персонажи.',
    image:
      'https://avatars.mds.yandex.net/i?id=33c19d1c1f7b72212b65d10b33b74b0b903a360b-5876833-images-thumbs&n=13',
    stock: 900,
    discount: 20,
    categoryId: 'clothesChild',
  },
  {
    id: 'prod35',
    name: 'Детские брюки Zara',
    price: 60,
    description:
      'Классические детские брюки для школы и мероприятий. Прочный материал и удобная посадка. Выглядит стильно и подходит к любому верху.',
    image:
      'https://avatars.mds.yandex.net/i?id=ccde75fc79bc62c5f01668d06d4310bd62d386a7-9242678-images-thumbs&n=13',
    stock: 600,
    discount: 0,
    categoryId: 'clothesChild',
  },
  {
    id: 'prod36',
    name: 'Диван угловой',
    price: 1200,
    description:
      'Комфортабельный угловой диван с мягкой обивкой. Идеально впишется в интерьер гостиной. Прочный каркас обеспечивает долговечность.',
    image:
      'https://spb.vykatnye-divanyi.ru/image/cache/data/product/18223/18223-0-1200x800.jpg',
    stock: 150,
    discount: 0,
    categoryId: 'furniture',
  },
  {
    id: 'prod37',
    name: 'Обеденный стол из массива',
    price: 850,
    description:
      'Прочный и стильный обеденный стол из натурального дерева. Подходит для большой семьи. Экологически чистые материалы.',
    image:
      'https://avatars.mds.yandex.net/i?id=1b6c5363a2aee176467043ee7163f5a80dc8ac05-4589529-images-thumbs&n=13',
    stock: 300,
    discount: 15,
    categoryId: 'furniture',
  },
  {
    id: 'prod38',
    name: 'Шкаф-купе',
    price: 950,
    description:
      'Современный шкаф-купе с зеркальными дверцами. Вместительное хранение вещей. Подходит для любой спальни.',
    image:
      'https://avatars.mds.yandex.net/i?id=5cf24f34ce4dc4861beaf9b2f69bbaac33afe1cc-12762283-images-thumbs&n=13',
    stock: 100,
    discount: 20,
    categoryId: 'furniture',
  },
  {
    id: 'prod39',
    name: 'Кресло-реклайнер',
    price: 600,
    description:
      'Удобное кресло с регулируемой спинкой. Отличный вариант для отдыха. Приятная тканевая обивка.',
    image:
      'https://avatars.mds.yandex.net/i?id=c95c3fcf4d8cf1bc36d09699f87e3db92802f0c5-5878952-images-thumbs&n=13',
    stock: 200,
    discount: 0,
    categoryId: 'furniture',
  },
  {
    id: 'prod40',
    name: 'Кровать двуспальная',
    price: 1100,
    description:
      'Просторная двуспальная кровать с ортопедическим основанием. Обеспечивает комфортный сон. Качественные материалы.',
    image:
      'https://avatars.mds.yandex.net/i?id=3a301a1202d9a1a61187c49debf64ccfb1c8b38c-2480692-images-thumbs&n=13',
    stock: 90,
    discount: 18,
    categoryId: 'furniture',
  },
  {
    id: 'prod41',
    name: 'Тумбочка прикроватная',
    price: 250,
    description:
      'Компактная прикроватная тумбочка с ящиком для хранения. Практичный и стильный элемент интерьера. Идеальна для спальни.',
    image:
      'https://avatars.mds.yandex.net/i?id=1a1799997052f11974bd53512e15501902ad0d8f2ef3e0b4-12569921-images-thumbs&n=13',
    stock: 400,
    discount: 8,
    categoryId: 'furniture',
  },
  {
    id: 'prod42',
    name: 'Настенное зеркало',
    price: 180,
    description:
      'Стильное настенное зеркало в деревянной раме. Отлично дополняет интерьер и визуально увеличивает пространство. Подходит для спальни и гостиной.',
    image:
      'https://avatars.mds.yandex.net/i?id=1a57514a8d54a272fa9ff9f1154e4f24704b87f2-7133642-images-thumbs&n=13',
    stock: 250,
    discount: 0,
    categoryId: 'decor',
  },
  {
    id: 'prod43',
    name: 'Картина маслом',
    price: 400,
    description:
      'Оригинальная картина, написанная маслом на холсте. Добавит уюта и уникальности вашему интерьеру. Отличный выбор для гостиной.',
    image:
      'https://avatars.mds.yandex.net/i?id=5393fa7cbcad6d74993ba437dbca7956bb39c919-5875681-images-thumbs&n=13',
    stock: 100,
    discount: 15,
    categoryId: 'decor',
  },
  {
    id: 'prod44',
    name: 'Настольная лампа',
    price: 75,
    description:
      'Элегантная настольная лампа с теплым светом. Подходит для создания уютной атмосферы. Идеальна для рабочего стола или прикроватной тумбы.',
    image:
      'https://avatars.mds.yandex.net/i?id=275523a5fd5c830495755c148b4cb2447e1adbb8-12900429-images-thumbs&n=13',
    stock: 350,
    discount: 12,
    categoryId: 'decor',
  },
  {
    id: 'prod45',
    name: 'Ваза керамическая',
    price: 60,
    description:
      'Красивая керамическая ваза с рельефным узором. Идеально подходит для живых цветов или декоративных композиций. Отлично смотрится в любом интерьере.',
    image:
      'https://avatars.mds.yandex.net/i?id=056fbee05972e408c201e77083dc36dd9a8b3f18-8500949-images-thumbs&n=13',
    stock: 500,
    discount: 8,
    categoryId: 'decor',
  },
  {
    id: 'prod46',
    name: 'Гирлянда светодиодная',
    price: 35,
    description:
      'Украшение для создания праздничной атмосферы. Светодиоды обеспечивают мягкое освещение. Подходит для дома и вечерних мероприятий.',
    image:
      'https://avatars.mds.yandex.net/i?id=ae54cdf828f0f92df75efb5f426c84e6f2d9622c-10869405-images-thumbs&n=13',
    stock: 1000,
    discount: 20,
    categoryId: 'decor',
  },
  {
    id: 'prod47',
    name: 'Часы настенные',
    price: 90,
    description:
      'Модные настенные часы с бесшумным механизмом. Подходят для гостиной или кабинета. Стильный и практичный элемент декора.',
    image:
      'https://avatars.mds.yandex.net/i?id=249432a30aae5c9aad0245a86b5adb5616e956d9f4bb9358-13071435-images-thumbs&n=13',
    stock: 220,
    discount: 10,
    categoryId: 'decor',
  },
  {
    id: 'prod48',
    name: 'Война и мир',
    price: 120,
    description:
      'Эпическое произведение Льва Толстого, охватывающее судьбы множества персонажей. Книга погружает в эпоху наполеоновских войн. Захватывающее сочетание истории, философии и человеческих судеб.',
    image:
      'https://avatars.mds.yandex.net/i?id=55071c4f767c57d5b0c3a252b70a09c59d2ea8cd-10699800-images-thumbs&n=13',
    stock: 500,
    discount: 0,
    categoryId: 'fiction',
  },
  {
    id: 'prod49',
    name: 'Преступление и наказание',
    price: 150,
    description:
      'Классика русской литературы от Фёдора Достоевского. История студента, решившего испытать свою теорию о праве на преступление. Глубокий психологический роман о муках совести и раскаянии.',
    image:
      'https://avatars.mds.yandex.net/i?id=5ac8392c34146510f1e4c149bd15aafb5a45508d-4290450-images-thumbs&n=13',
    stock: 300,
    discount: 20,
    categoryId: 'fiction',
  },
  {
    id: 'prod50',
    name: 'Гарри Поттер и философский камень',
    price: 120,
    description:
      'Первая книга знаменитой серии о юном волшебнике. Гарри узнаёт о своём магическом происхождении и отправляется в Хогвартс. Захватывающее начало истории, завоевавшей миллионы сердец.',
    image:
      'https://avatars.mds.yandex.net/i?id=5794c0ec8b2ac1573ba898c37c12824c5357a8a5-5237668-images-thumbs&n=13',
    stock: 1000,
    discount: 10,
    categoryId: 'fiction',
  },
  {
    id: 'prod51',
    name: '1984',
    price: 80,
    description:
      'Знаковый антиутопический роман Джорджа Оруэлла. История общества, находящегося под полным контролем государства. Книга, заставляющая задуматься о свободе и манипуляции сознанием.',
    image:
      'https://avatars.mds.yandex.net/i?id=92143fb5625ce16315bb3882d56c8860c43c8a60-5344946-images-thumbs&n=13',
    stock: 750,
    discount: 25,
    categoryId: 'fiction',
  },
  {
    id: 'prod52',
    name: 'Мастер и Маргарита',
    price: 170,
    description:
      'Философско-мистический роман Михаила Булгакова. В центре сюжета дьявольские происшествия в Москве 1930-х годов. Великий роман о любви, свободе и власти.',
    image:
      'https://avatars.mds.yandex.net/i?id=a42629c471258f416e381934347744056b6bb48a-4866977-images-thumbs&n=13',
    stock: 600,
    discount: 0,
    categoryId: 'fiction',
  },
  {
    id: 'prod53',
    name: 'Оно',
    price: 250,
    description:
      'Один из самых известных романов Стивена Кинга. История о группе друзей, противостоящих древнему злу в маленьком городке. Книга полна ужаса, дружбы и воспоминаний о детстве.',
    image:
      'https://avatars.mds.yandex.net/i?id=7437407e15319f6c13471d5e15a2665a74ed09fa-4522636-images-thumbs&n=13',
    stock: 550,
    discount: 30,
    categoryId: 'fiction',
  },
  {
    id: 'prod54',
    name: 'Шерлок Холмс: Полное собрание рассказов',
    price: 350,
    description:
      'Сборник всех историй о знаменитом детективе Шерлоке Холмсе. Головоломные расследования, харизматичные персонажи и атмосферный Лондон. Идеальный выбор для любителей детективного жанра.',
    image:
      'https://avatars.mds.yandex.net/i?id=c4a83a85f821103f3f3244334566f94e32e95e89-5118451-images-thumbs&n=13',
    stock: 200,
    discount: 40,
    categoryId: 'fiction',
  },
  {
    id: 'prod55',
    name: 'Дюна',
    price: 460,
    description:
      'Эпическое научно-фантастическое произведение Фрэнка Герберта. История борьбы за власть и ресурсы на пустынной планете Арракис. Одна из самых значимых книг в жанре sci-fi.',
    image:
      'https://avatars.mds.yandex.net/i?id=ab9ca01d4cd152885743e75c1a1ca71e77fa90dc-10242260-images-thumbs&n=13',
    stock: 150,
    discount: 0,
    categoryId: 'fiction',
  },
  {
    id: 'prod56',
    name: 'Краткая история времени',
    price: 220,
    description:
      'Знаменитая книга Стивена Хокинга о природе времени и вселенной. Простым языком объясняются сложные законы физики. Отличный выбор для любителей науки и космоса.',
    image:
      'https://avatars.mds.yandex.net/i?id=936fb7f266377c9b6e417b628fd0cdbad699334d27f32b82-9181079-images-thumbs&n=13',
    stock: 500,
    discount: 10,
    categoryId: 'nonFiction',
  },
  {
    id: 'prod57',
    name: 'Ген эгоиста',
    price: 180,
    description:
      'Ричард Докинз объясняет эволюцию с точки зрения генов. Книга рассказывает, как работают наследственность и естественный отбор. Важное произведение для понимания биологии.',
    image:
      'https://avatars.mds.yandex.net/i?id=2c141c592ffef6e2f306757e1aaf11cda728ac13-11924570-images-thumbs&n=13',
    stock: 400,
    discount: 15,
    categoryId: 'nonFiction',
  },
  {
    id: 'prod58',
    name: 'Сапиенс: Краткая история человечества',
    price: 270,
    description:
      'Юваль Ной Харари рассказывает об эволюции Homo sapiens. Книга охватывает историю человечества от древних времен до наших дней. Фундаментальный труд о развитии цивилизации.',
    image:
      'https://avatars.mds.yandex.net/i?id=48f9a2181ff9792ace02e7d50e7f423c37f64259694b21af-4402845-images-thumbs&n=13',
    stock: 1000,
    discount: 20,
    categoryId: 'nonFiction',
  },
  {
    id: 'prod59',
    name: 'Чёрные дыры и молодые вселенные',
    price: 190,
    description:
      'Сборник эссе Стивена Хокинга о черных дырах и космосе. Автор делится своими открытиями и мыслями о будущем науки. Книга вдохновляет на размышления о природе вселенной.',
    image:
      'https://avatars.mds.yandex.net/i?id=b40645a7981e00ef014eed2cbfae37790d7f0abe-6428875-images-thumbs&n=13',
    stock: 750,
    discount: 5,
    categoryId: 'nonFiction',
  },
  {
    id: 'prod60',
    name: 'Психология влияния',
    price: 150,
    description:
      'Роберт Чалдини раскрывает механизмы убеждения и манипуляции. Книга основана на научных исследованиях и реальных примерах. Полезное чтение для тех, кто хочет понимать поведение людей.',
    image:
      'https://avatars.mds.yandex.net/i?id=9799aa1b5844a272cc86107bd9cee9e4d6e831ee-10803820-images-thumbs&n=13',
    stock: 600,
    discount: 0,
    categoryId: 'nonFiction',
  },
  {
    id: 'prod61',
    name: 'Зачем мы спим',
    price: 200,
    description:
      'Мэттью Уокер объясняет, как сон влияет на здоровье и жизнь. Книга полна научных фактов и рекомендаций для улучшения сна. Обязательное чтение для заботящихся о своем благополучии.',
    image:
      'https://avatars.mds.yandex.net/i?id=32d70fe750eaeb1037cf8642272541b81bbae350-10844270-images-thumbs&n=13',
    stock: 850,
    discount: 30,
    categoryId: 'nonFiction',
  },
  {
    id: 'prod62',
    name: 'Вы, конечно, шутите, мистер Фейнман!',
    price: 250,
    description:
      'Автобиографическая книга Ричарда Фейнмана, великого физика. Она полна увлекательных историй и нестандартных взглядов на мир. Лёгкое и познавательное чтение о науке и жизни.',
    image:
      'https://avatars.mds.yandex.net/i?id=ceedf2ec3e09b522b5d1c630882d1d973d7cce86-4767024-images-thumbs&n=13',
    stock: 300,
    discount: 35,
    categoryId: 'nonFiction',
  },
  {
    id: 'prod63',
    name: 'Эмоциональный интеллект',
    price: 280,
    description:
      'Дэниел Гоулман объясняет, почему эмоциональный интеллект важнее IQ. Книга показывает, как развивать эмоциональные навыки для успеха. Практическое руководство по управлению эмоциями.',
    image:
      'https://avatars.mds.yandex.net/i?id=8f08cc34613b4989d92b277a541bf75f31deebd4-6059293-images-thumbs&n=13',
    stock: 550,
    discount: 40,
    categoryId: 'nonFiction',
  },
  {
    id: 'prod64',
    name: 'Астрономия для чайников',
    price: 200,
    description:
      'Простое руководство по основам астрономии. Описаны звезды, планеты и явления в космосе. Идеальный выбор для начинающих любителей астрономии.',
    image:
      'https://avatars.mds.yandex.net/i?id=fb0b03e59d4d81cf28666cb6c002d529_sr-3591326-images-thumbs&n=13',
    stock: 1500,
    discount: 0,
    categoryId: 'nonFiction',
  },
  {
    id: 'prod65',
    name: 'Скакалка с утяжелением',
    price: 120,
    description:
      'Профессиональная скакалка для кардиотренировок. Встроенные утяжелители увеличивают нагрузку на мышцы. Подходит для занятий боксом и фитнесом.',
    image:
      'https://avatars.mds.yandex.net/i?id=ba008dec3f00045ab6fe98a73d3e998f30ebe817-10952956-images-thumbs&n=13',
    stock: 800,
    discount: 10,
    categoryId: 'fitness',
  },
  {
    id: 'prod66',
    name: 'Йога-коврик 6 мм',
    price: 1800,
    description:
      'Удобный нескользящий коврик для йоги и пилатеса. Обеспечивает комфорт и амортизацию при занятиях. Легкий и прочный, легко сворачивается для хранения.',
    image:
      'https://avatars.mds.yandex.net/i?id=4f08053b35856f3fca32496923833315ff4a341d-12569778-images-thumbs&n=13',
    stock: 1000,
    discount: 20,
    categoryId: 'fitness',
  },
  {
    id: 'prod67',
    name: 'Фитнес-резинки (набор 5 шт.)',
    price: 1500,
    description:
      'Комплект эластичных резинок разного сопротивления. Подходят для силовых и реабилитационных тренировок. Укрепляют мышцы и улучшают координацию движений.',
    image:
      'https://avatars.mds.yandex.net/i?id=db2094bac859e22d21de0f98d1f5fc514d34825e-8185177-images-thumbs&n=13',
    stock: 750,
    discount: 0,
    categoryId: 'fitness',
  },
  {
    id: 'prod68',
    name: 'Гимнастический ролик',
    price: 230,
    description:
      'Тренажер для пресса и мышц корпуса. Укрепляет мышцы живота, спины и рук. Компактный и удобный для домашних тренировок.',
    image:
      'https://avatars.mds.yandex.net/i?id=fd0447473fc23e5d79c528d41d3411d82916a221-9029247-images-thumbs&n=13',
    stock: 600,
    discount: 30,
    categoryId: 'fitness',
  },
  {
    id: 'prod69',
    name: 'Смарт-браслет с пульсометром',
    price: 1200,
    description:
      'Фитнес-трекер с мониторингом пульса и шагомером. Позволяет отслеживать активность и качество сна. Синхронизируется со смартфоном через Bluetooth.',
    image:
      'https://avatars.mds.yandex.net/i?id=e5f3c4ffba9282a9af509d376332d4b68f0bff0c-9859478-images-thumbs&n=13',
    stock: 400,
    discount: 40,
    categoryId: 'fitness',
  },
  {
    id: 'prod70',
    name: 'Балансировочная платформа',
    price: 350,
    description:
      'Тренажер для развития координации и укрепления мышц. Используется для фитнеса, йоги и реабилитации. Помогает улучшить баланс и устойчивость.',
    image:
      'https://avatars.mds.yandex.net/i?id=27a37c133bee68289b5ffd73f61d1dcd01b9f520-5222129-images-thumbs&n=13',
    stock: 550,
    discount: 35,
    categoryId: 'fitness',
  },
  {
    id: 'prod71',
    name: 'Гантели разборные 20 кг',
    price: 550,
    description:
      'Комплект разборных гантелей для домашних тренировок. Позволяют регулировать вес в зависимости от уровня подготовки. Отличный выбор для силовых упражнений и фитнеса.',
    image:
      'https://avatars.mds.yandex.net/i?id=3685b806cdc1d6e0acca40f6745041517bec1b8b-4901907-images-thumbs&n=13',
    stock: 500,
    discount: 0,
    categoryId: 'fitness',
  },
  {
    id: 'prod72',
    name: 'Футбольный мяч профессиональный',
    price: 350,
    description:
      'Высококачественный футбольный мяч для игры на разных покрытиях. Имеет прочную конструкцию и отличную аэродинамику. Подходит как для тренировок, так и для соревнований.',
    image:
      'https://avatars.mds.yandex.net/i?id=0982576fa03f1de5ccf6bedf85a073915787c3df-4809949-images-thumbs&n=13',
    stock: 600,
    discount: 20,
    categoryId: 'comandSport',
  },
  {
    id: 'prod73',
    name: 'Баскетбольный мяч',
    price: 280,
    description:
      'Профессиональный мяч для игры в баскетбол. Обеспечивает надежный захват и контроль при бросках. Подходит для игры в зале и на улице.',
    image:
      'https://avatars.mds.yandex.net/i?id=2cdc996a8274f1a2fe0764e651c7151c147457c7-4240958-images-thumbs&n=13',
    stock: 750,
    discount: 0,
    categoryId: 'comandSport',
  },
  {
    id: 'prod74',
    name: 'Волейбольный мяч',
    price: 220,
    description:
      'Официальный мяч для игры в волейбол. Обладает мягкой поверхностью и отличной отскоковой способностью. Подходит для профессиональных и любительских матчей.',
    image:
      'https://avatars.mds.yandex.net/i?id=65c4511745ec29ff82c08ac1a6b47ce5c88ee0fe-10506067-images-thumbs&n=13',
    stock: 800,
    discount: 25,
    categoryId: 'comandSport',
  },
  {
    id: 'prod75',
    name: 'Набор для бадминтона',
    price: 300,
    description:
      'Комплект из двух ракеток и воланов для игры в бадминтон. Легкие и удобные ракетки обеспечивают точные удары. Подходит для активного отдыха и тренировок.',
    image:
      'https://avatars.mds.yandex.net/i?id=93bab2bd8f45ed6c16ace61609a24c9c-4146488-images-thumbs&n=13',
    stock: 500,
    discount: 0,
    categoryId: 'comandSport',
  },
  {
    id: 'prod76',
    name: 'Форма футбольная (комплект)',
    price: 750,
    description:
      'Комплект формы для футбольных команд. Включает футболку, шорты и гетры из дышащего материала. Обеспечивает комфорт и свободу движений.',
    image:
      'https://avatars.mds.yandex.net/i?id=13a4d0889e7e3230081691bd12d4369e224790a4-6533913-images-thumbs&n=13',
    stock: 400,
    discount: 35,
    categoryId: 'comandSport',
  },
  {
    id: 'prod77',
    name: 'Щитки футбольные',
    price: 170,
    description:
      'Надежные щитки для защиты голеней во время игры. Имеют анатомическую форму и мягкую подкладку. Обеспечивают безопасность без ограничения подвижности.',
    image:
      'https://avatars.mds.yandex.net/i?id=066cdeb651a13ee6963da2b34acca1ab4a724d1b-10517487-images-thumbs&n=13',
    stock: 900,
    discount: 0,
    categoryId: 'comandSport',
  },
  {
    id: 'prod78',
    name: 'Сетка для волейбола',
    price: 180,
    description:
      'Прочная волейбольная сетка для игры в зале и на улице. Изготовлена из устойчивых к износу материалов. Подходит для тренировок и соревнований.',
    image:
      'https://avatars.mds.yandex.net/i?id=98a4243440dd16f60d34607deff73fc9e8c0763f-4612093-images-thumbs&n=13',
    stock: 300,
    discount: 40,
    categoryId: 'comandSport',
  },
  {
    id: 'prod79',
    name: 'Конструктор "Город будущего"',
    price: 320,
    description:
      'Развивающий конструктор с множеством деталей. Позволяет создавать различные здания и транспорт. Отличный выбор для творчества и развития логики.',
    image:
      'https://avatars.mds.yandex.net/i?id=ed8fe77e1c2b0c5656de07c081dec0763148774b-9836683-images-thumbs&n=13',
    stock: 700,
    discount: 0,
    categoryId: 'toys',
  },
  {
    id: 'prod80',
    name: 'Плюшевый мишка 50 см',
    price: 180,
    description:
      'Мягкая и приятная на ощупь игрушка. Отличный подарок для ребенка любого возраста. Дарит тепло и уют.',
    image:
      'https://avatars.mds.yandex.net/i?id=6db717152948747186c9680bc9c95ec84e9436b1-8182686-images-thumbs&n=13',
    stock: 900,
    discount: 15,
    categoryId: 'toys',
  },
  {
    id: 'prod81',
    name: 'Детская железная дорога',
    price: 470,
    description:
      'Игровой набор с локомотивом и вагонами. Работает от батареек и имеет звуковые эффекты. Позволяет создать собственный железнодорожный маршрут.',
    image:
      'https://avatars.mds.yandex.net/i?id=635a7d7dfcefc45c03df74159cc51f2e839271e2-9098303-images-thumbs&n=13',
    stock: 600,
    discount: 0,
    categoryId: 'toys',
  },
  {
    id: 'prod82',
    name: 'Интерактивный робот',
    price: 750,
    description:
      'Игрушка с голосовым управлением и световыми эффектами. Может повторять слова и выполнять команды. Развивает внимание и воображение.',
    image:
      'https://avatars.mds.yandex.net/i?id=0c7a3df07fb45d4be9de36efc64977ab6fd12617-12911696-images-thumbs&n=13',
    stock: 500,
    discount: 20,
    categoryId: 'toys',
  },
  {
    id: 'prod83',
    name: 'Набор машинок 6 шт.',
    price: 250,
    description:
      'Коллекция металлических автомобилей разных моделей. Отличаются высокой детализацией и качественными материалами. Подходят для игр и коллекционирования.',
    image:
      'https://avatars.mds.yandex.net/i?id=6e68a2e7d69d23d99330f507cf9dc347eb7909e4-10527650-images-thumbs&n=13',
    stock: 800,
    discount: 10,
    categoryId: 'toys',
  },
  {
    id: 'prod84',
    name: 'Кукольный домик с мебелью',
    price: 1300,
    description:
      'Красочный домик для кукол с комплектом мебели. Позволяет разыгрывать интересные сценки и придумывать истории. Отличный подарок для девочек.',
    image:
      'https://avatars.mds.yandex.net/i?id=f01b2ac10ce1fa63bb9c9a2b86f644ad30ab2e72-6625580-images-thumbs&n=13',
    stock: 450,
    discount: 35,
    categoryId: 'toys',
  },
  {
    id: 'prod85',
    name: 'Детский набор инструментов',
    price: 790,
    description:
      'Игровой комплект с инструментами для маленького мастера. Включает молоток, отвертку, пилу и другие аксессуары. Развивает моторику и логику.',
    image:
      'https://avatars.mds.yandex.net/i?id=05d2417dcc7afed625d6b45e586323e867c03db4-10683820-images-thumbs&n=13',
    stock: 650,
    discount: 0,
    categoryId: 'toys',
  },
  {
    id: 'prod86',
    name: 'Музыкальный коврик с подсветкой',
    price: 370,
    description:
      'Интерактивный коврик с различными звуковыми эффектами. Реагирует на нажатия и светится разными цветами. Помогает развивать слух и координацию движений.',
    image:
      'https://avatars.mds.yandex.net/i?id=9393deb6db7e8941a14c225b3670d13958ca767e-9083254-images-thumbs&n=13',
    stock: 550,
    discount: 40,
    categoryId: 'toys',
  },
  {
    id: 'prod87',
    name: 'Ранец ортопедический',
    price: 450,
    description:
      'Удобный ранец с ортопедической спинкой и прочными лямками. Обеспечивает комфортную посадку и равномерное распределение нагрузки. Подходит для учеников младших и средних классов.',
    image:
      'https://avatars.mds.yandex.net/i?id=0c67abb1db55fffd1d2bd29d962664aba085d804-4841402-images-thumbs&n=13',
    stock: 600,
    discount: 25,
    categoryId: 'forSchool',
  },
  {
    id: 'prod88',
    name: 'Набор тетрадей (10 шт.)',
    price: 80,
    description:
      'Комплект тетрадей в клетку и линейку. Высококачественная бумага и прочная обложка. Подходят для занятий в школе и дома.',
    image:
      'https://avatars.mds.yandex.net/i?id=323c0b115fda9c12db2e70661d4d590c97de86c4-5233584-images-thumbs&n=13',
    stock: 1200,
    discount: 0,
    categoryId: 'forSchool',
  },
  {
    id: 'prod89',
    name: 'Школьный пенал с отделениями',
    price: 50,
    description:
      'Функциональный пенал с несколькими отделениями. Позволяет удобно хранить канцелярские принадлежности. Выполнен из прочного и легкого материала.',
    image:
      'https://avatars.mds.yandex.net/i?id=4b747b5c1f324b3f8706b51aa80f8973f1200b90-12428376-images-thumbs&n=13',
    stock: 800,
    discount: 20,
    categoryId: 'forSchool',
  },
  {
    id: 'prod90',
    name: 'Цветные карандаши (12 шт.)',
    price: 900,
    description:
      'Набор ярких цветных карандашей для рисования. Обеспечивают мягкое нанесение и насыщенные цвета. Подходят для школы и творчества.',
    image: '',
    stock: 1100,
    discount: 10,
    categoryId: 'forSchool',
  },
  {
    id: 'prod91',
    name: 'Школьный дневник',
    price: 70,
    description:
      'Дневник для учащихся начальных и средних классов. Включает удобное расписание и место для оценок. Помогает организовать учебный процесс.',
    image:
      'https://avatars.mds.yandex.net/i?id=30052319630483896d73a053d011322b765c9f874f3e7feb-12267805-images-thumbs&n=13',
    stock: 950,
    discount: 0,
    categoryId: 'forSchool',
  },
  {
    id: 'prod92',
    name: 'Линейка и набор циркулей',
    price: 160,
    description:
      'Комплект для точных измерений и построения чертежей. Включает линейку, угольник и два циркуля. Подходит для школьных занятий по математике.',
    image:
      'https://avatars.mds.yandex.net/i?id=1f368b00807e0a7da13d2ca935107c4718189da5-4337913-images-thumbs&n=13',
    stock: 700,
    discount: 20,
    categoryId: 'forSchool',
  },
  {
    id: 'prod93',
    name: 'Ручки гелевые (6 шт.)',
    price: 120,
    description:
      'Набор качественных гелевых ручек с мягким письмом. Обеспечивают плавное скольжение по бумаге. Отличный выбор для учебы и работы.',
    image:
      'https://avatars.mds.yandex.net/i?id=ee0d06594ff5efef016d11c61f645c35db5a75cf-5858290-images-thumbs&n=13',
    stock: 850,
    discount: 35,
    categoryId: 'forSchool',
  },
  {
    id: 'prod94',
    name: 'Альбом для рисования',
    price: 100,
    description:
      'Большой альбом с плотными страницами. Подходит для рисования красками, карандашами и фломастерами. Отличный выбор для творчества в школе и дома.',
    image:
      'https://avatars.mds.yandex.net/i?id=575fdac48fcb2abcb7d3b99436d945220cef3a5d-12527687-images-thumbs&n=13',
    stock: 1050,
    discount: 0,
    categoryId: 'forSchool',
  },
  {
    id: 'prod95',
    name: 'Увлажняющий крем для лица',
    price: 320,
    description:
      'Крем глубоко увлажняет кожу и предотвращает сухость. Подходит для всех типов кожи, включая чувствительную. Дарит ощущение свежести и комфорта на весь день.',
    image:
      'https://avatars.mds.yandex.net/i?id=5e29b7e9ca485dbe85ef46183c98e09b5bd46851-12399224-images-thumbs&n=13',
    stock: 600,
    discount: 20,
    categoryId: 'skincare',
  },
  {
    id: 'prod96',
    name: 'Гель для умывания',
    price: 180,
    description:
      'Нежно очищает кожу от загрязнений и макияжа. Не сушит и не раздражает, сохраняя естественный баланс. Подходит для ежедневного использования.',
    image:
      'https://avatars.mds.yandex.net/i?id=71dcac598a1750fabcae0de7f1fce34e130f675c-5177112-images-thumbs&n=13',
    stock: 750,
    discount: 15,
    categoryId: 'skincare',
  },
  {
    id: 'prod97',
    name: 'Сыворотка с гиалуроновой кислотой',
    price: 450,
    description:
      'Интенсивное увлажнение и восстановление кожи. Разглаживает мелкие морщины и придает упругость. Идеально подходит для вечернего ухода.',
    image:
      'https://avatars.mds.yandex.net/i?id=30187e008698c49dd26ae83cbb4e6cb3cfed24ff-10254554-images-thumbs&n=13',
    stock: 500,
    discount: 0,
    categoryId: 'skincare',
  },
  {
    id: 'prod98',
    name: 'Тоник с экстрактом алоэ',
    price: 230,
    description:
      'Освежает и тонизирует кожу, уменьшая покраснения. Улучшает цвет лица и придает здоровый вид. Отлично подготавливает кожу к нанесению крема.',
    image:
      'https://avatars.mds.yandex.net/get-yabs_performance/13227687/hatf2451428426204bde59df373fab99a1f/huge',
    stock: 850,
    discount: 30,
    categoryId: 'skincare',
  },
  {
    id: 'prod99',
    name: 'Очищающая маска для лица',
    price: 390,
    description:
      'Глубоко очищает поры и удаляет излишки себума. Делает кожу гладкой и матовой без пересушивания. Подходит для жирной и комбинированной кожи.',
    image:
      'https://avatars.mds.yandex.net/i?id=cf129650dc9032630cd84f7c6f3e2be1c3815b1d-12319660-images-thumbs&n=13',
    stock: 400,
    discount: 0,
    categoryId: 'skincare',
  },
  {
    id: 'prod100',
    name: 'Крем для рук с маслом ши',
    price: 150,
    description:
      'Питает и защищает кожу рук от сухости и трещин. Быстро впитывается и не оставляет липкости. Делает руки мягкими и ухоженными.',
    image:
      'https://avatars.mds.yandex.net/i?id=547f82f3f3f14cf3fbca7225a4ab04b478c5d85e-8497033-images-thumbs&n=13',
    stock: 950,
    discount: 10,
    categoryId: 'skincare',
  },
  {
    id: 'prod101',
    name: 'Мицеллярная вода',
    price: 270,
    description:
      'Бережно удаляет макияж и очищает кожу без смывания. Не раздражает глаза и подходит для чувствительной кожи. Оставляет ощущение свежести и чистоты.',
    image:
      'https://avatars.mds.yandex.net/i?id=2f3b20d9ba0f898dd7f5809045a72de2389407f7-11407033-images-thumbs&n=13',
    stock: 700,
    discount: 20,
    categoryId: 'skincare',
  },
  {
    id: 'prod102',
    name: 'Патчи для глаз с коллагеном',
    price: 380,
    description:
      'Уменьшают отечность и осветляют темные круги под глазами. Глубоко увлажняют и разглаживают кожу. Отличный способ быстро освежить взгляд.',
    image:
      'https://avatars.mds.yandex.net/i?id=e09f07d04f6708e91195cbee20042623edd3a9bf-9181188-images-thumbs&n=13',
    stock: 550,
    discount: 0,
    categoryId: 'skincare',
  },
  {
    id: 'prod103',
    name: 'Матовая губная помада',
    price: 450,
    description:
      'Обеспечивает насыщенный цвет и стойкость на весь день. Не сушит губы благодаря ухаживающим компонентам. Идеальна для создания элегантного образа.',
    image:
      'https://avatars.mds.yandex.net/i?id=36c6ea7411e29765ff094d824caea97b34d4f81e54d4a174-12513999-images-thumbs&n=13',
    stock: 700,
    discount: 20,
    categoryId: 'makeup',
  },
  {
    id: 'prod104',
    name: 'Тональный крем с эффектом сияния',
    price: 420,
    description:
      'Придает коже естественное сияние и маскирует несовершенства. Легкая текстура позволяет коже дышать. Подходит для всех типов кожи.',
    image:
      'https://avatars.mds.yandex.net/get-yabs_performance/14053089/hat4c23d5e751fa6f73ba8387777d6554f4/huge',
    stock: 500,
    discount: 25,
    categoryId: 'makeup',
  },
  {
    id: 'prod105',
    name: 'Палетка теней для век',
    price: 580,
    description:
      'Содержит 12 оттенков для создания разнообразных образов. Легко растушевывается и держится в течение всего дня. Подходит как для дневного, так и для вечернего макияжа.',
    image:
      'https://avatars.mds.yandex.net/i?id=b2e71d2fde6cc9c4553cc8cde2edd31b85b75ce4-10703717-images-thumbs&n=13',
    stock: 600,
    discount: 0,
    categoryId: 'makeup',
  },
  {
    id: 'prod106',
    name: 'Подводка для глаз',
    price: 290,
    description:
      'Создает идеальные стрелки с первого нанесения. Водостойкая формула обеспечивает стойкость на весь день. Удобная кисточка позволяет легко контролировать линию.',
    image:
      'https://avatars.mds.yandex.net/get-yabs_performance/5567282/hatfca08960bf9022a159c0b3b0ac27c75c/huge',
    stock: 800,
    discount: 15,
    categoryId: 'makeup',
  },
  {
    id: 'prod107',
    name: 'Пудра для лица',
    price: 310,
    description:
      'Фиксирует макияж и устраняет нежелательный блеск. Легкая текстура делает кожу гладкой и бархатистой. Подходит для всех типов кожи.',
    image:
      'https://avatars.mds.yandex.net/i?id=0cddfd642fc158f0a7c715065fd325e2-5859282-images-thumbs&n=13',
    stock: 550,
    discount: 20,
    categoryId: 'makeup',
  },
  {
    id: 'prod108',
    name: 'Тушь для ресниц',
    price: 270,
    description:
      'Придает ресницам объем и длину без комочков. Устойчива к влаге и не осыпается в течение дня. Идеальна для создания выразительного взгляда.',
    image:
      'https://avatars.mds.yandex.net/i?id=85fec597571034ee87417b025c5d8e1f5372369d-10915107-images-thumbs&n=13',
    stock: 650,
    discount: 0,
    categoryId: 'makeup',
  },
  {
    id: 'prod109',
    name: 'Румяна в стике',
    price: 230,
    description:
      'Легко растушевываются и придают свежий оттенок коже. Удобный формат позволяет быстро освежить макияж. Подходят для любого типа кожи.',
    image:
      'https://avatars.mds.yandex.net/i?id=681e88243c3d698bd23532bc6e21e5c0ba7ebdf3-9844469-images-thumbs&n=13',
    stock: 700,
    discount: 10,
    categoryId: 'makeup',
  },
  {
    id: 'prod110',
    name: 'Карандаш для бровей',
    price: 180,
    description:
      'Помогает создать естественный контур и заполнить пробелы. Устойчивая формула держится в течение всего дня. Подходит для любого оттенка волос.',
    image:
      'https://avatars.mds.yandex.net/i?id=775f98f946ee780f04d55e2a1fd5892e63e75c9fe289c6ee-12936542-images-thumbs&n=13',
    stock: 850,
    discount: 35,
    categoryId: 'makeup',
  },
  {
    id: 'prod111',
    name: 'Автомобильный держатель для телефона',
    price: 150,
    description:
      'Надежно фиксирует телефон на приборной панели или стекле. Регулируемый угол обзора обеспечивает удобство использования. Подходит для большинства смартфонов.',
    image:
      'https://avatars.mds.yandex.net/i?id=f8806598fe65a6b14b2250af5b21f57f8f3ef4c4-4496126-images-thumbs&n=13',
    stock: 900,
    discount: 0,
    categoryId: 'autoAccess',
  },
  {
    id: 'prod112',
    name: 'Комплект чехлов для сидений',
    price: 280,
    description:
      'Защищает сиденья от загрязнений и износа. Изготовлен из прочного и легко моющегося материала. Подходит для большинства автомобилей.',
    image:
      'https://avatars.mds.yandex.net/i?id=b94eee102bfa051d52799f244b17efbbdec21ead-3858847-images-thumbs&n=13',
    stock: 600,
    discount: 25,
    categoryId: 'autoAccess',
  },
  {
    id: 'prod113',
    name: 'Автомобильный компрессор',
    price: 750,
    description:
      'Позволяет быстро накачать шины в любых условиях. Компактный дизайн удобен для хранения в багажнике. Работает от прикуривателя 12V.',
    image:
      'https://avatars.mds.yandex.net/i?id=20533835c6839e276d15fae02bcf050d162d7c4e-12471923-images-thumbs&n=13',
    stock: 400,
    discount: 30,
    categoryId: 'autoAccess',
  },
  {
    id: 'prod114',
    name: 'Парковочные датчики',
    price: 480,
    description:
      'Помогают безопасно парковаться и избегать столкновений. Оснащены звуковыми и визуальными индикаторами. Простая установка и совместимость с разными моделями авто.',
    image:
      'https://avatars.mds.yandex.net/i?id=bab2c2eb7fb8ab88950f7ed5bc601ec6-4271045-images-thumbs&n=13',
    stock: 550,
    discount: 0,
    categoryId: 'autoAccess',
  },
  {
    id: 'prod115',
    name: 'Автомобильный пылесос',
    price: 520,
    description:
      'Компактный и мощный прибор для очистки салона. Работает от прикуривателя и оснащен сменными насадками. Эффективно удаляет пыль и мелкий мусор.',
    image:
      'https://avatars.mds.yandex.net/i?id=4bee9d31e8537f74d18ab5b46b243a2ad9900cbb-4027246-images-thumbs&n=13',
    stock: 700,
    discount: 20,
    categoryId: 'autoAccess',
  },
  {
    id: 'prod116',
    name: 'Подлокотник с бардачком',
    price: 580,
    description:
      'Добавляет удобство в салоне автомобиля. Оснащен отсеком для хранения мелочей. Устанавливается без дополнительных креплений.',
    image:
      'https://avatars.mds.yandex.net/i?id=36c47d3e7ad3ac4e9c8153a5c4e3ebf3a32dd4a7-10715950-images-thumbs&n=13',
    stock: 800,
    discount: 15,
    categoryId: 'autoAccess',
  },
  {
    id: 'prod117',
    name: 'GPS-навигатор',
    price: 750,
    description:
      'Точное и быстрое определение маршрута. Оснащен сенсорным экраном и обновляемыми картами. Идеальный помощник в путешествиях.',
    image:
      'https://avatars.mds.yandex.net/i?id=e93108e324bf5ac5fd567f46e9b82dfc8512a090-4735414-images-thumbs&n=13',
    stock: 350,
    discount: 35,
    categoryId: 'autoAccess',
  },
  {
    id: 'prod118',
    name: 'Органайзер в багажник',
    price: 280,
    description:
      'Позволяет удобно хранить инструменты и другие вещи. Изготовлен из прочного водоотталкивающего материала. Фиксируется в багажнике без скольжения.',
    image:
      'https://avatars.mds.yandex.net/i?id=2130eb54575a2e2c322d73f820835e0aa5d73625-4553918-images-thumbs&n=13',
    stock: 750,
    discount: 0,
    categoryId: 'autoAccess',
  },
  {
    id: 'prod119',
    name: 'Масляный фильтр',
    price: 620,
    description:
      'Эффективно очищает масло от загрязнений. Улучшает работу двигателя и продлевает его срок службы. Подходит для большинства автомобилей.',
    image:
      'https://avatars.mds.yandex.net/i?id=8173bbf9baa30257903ff6b0f705337d31f9bfd9-10629685-images-thumbs&n=13',
    stock: 500,
    discount: 15,
    categoryId: 'autoparts',
  },
  {
    id: 'prod120',
    name: 'Воздушный фильтр',
    price: 600,
    description:
      'Фильтрует воздух, поступающий в двигатель. Обеспечивает улучшенную работу системы впуска. Легко устанавливается без специальных инструментов.',
    image:
      'https://avatars.mds.yandex.net/i?id=f1cfecb371d25b82a12e696a9e5a3a994474362d-10868215-images-thumbs&n=13',
    stock: 700,
    discount: 10,
    categoryId: 'autoparts',
  },
  {
    id: 'prod121',
    name: 'Тормозные колодки',
    price: 450,
    description:
      'Обеспечивают надежное торможение и безопасность. Изготовлены из износостойкого материала. Совместимы с большинством моделей автомобилей.',
    image:
      'https://avatars.mds.yandex.net/i?id=751cb1de094445126080961796c13e132f18fe02-3826599-images-thumbs&n=13',
    stock: 300,
    discount: 0,
    categoryId: 'autoparts',
  },
  {
    id: 'prod122',
    name: 'Аккумулятор автомобильный',
    price: 1500,
    description:
      'Гарантирует стабильную работу электросистемы авто. Обладает высокой емкостью и долговечностью. Подходит для легковых и грузовых автомобилей.',
    image:
      'https://avatars.mds.yandex.net/i?id=3e4f3dd49bdddbc1b003ec1f15c6a4cd131701e621f219e0-12421995-images-thumbs&n=13',
    stock: 150,
    discount: 25,
    categoryId: 'autoparts',
  },
  {
    id: 'prod123',
    name: 'Свечи зажигания',
    price: 250,
    description:
      'Обеспечивают надежное воспламенение топливовоздушной смеси. Улучшают топливную экономичность двигателя. Изготовлены из жаропрочных материалов.',
    image:
      'https://avatars.mds.yandex.net/i?id=1361a20992af1b7b1d397666a951e4eb22c79d0f-5697811-images-thumbs&n=13',
    stock: 400,
    discount: 30,
    categoryId: 'autoparts',
  },
  {
    id: 'prod124',
    name: 'Ремень ГРМ',
    price: 180,
    description:
      'Передает крутящий момент на распределительный вал. Обеспечивает синхронизацию работы двигателя. Изготовлен из прочного износостойкого материала.',
    image:
      'https://avatars.mds.yandex.net/i?id=658c671af17ab8e52f6d4975c2c8b9bcd3228f56-5910334-images-thumbs&n=13',
    stock: 250,
    discount: 0,
    categoryId: 'autoparts',
  },
  {
    id: 'prod125',
    name: 'Амортизаторы передние',
    price: 720,
    description:
      'Снижают вибрации и улучшают комфорт вождения. Изготовлены из высокопрочных материалов. Подходят для различных марок автомобилей.',
    image:
      'https://avatars.mds.yandex.net/i?id=753a0ce0776ba7ec1386800a240e7b707b974fd7-7459442-images-thumbs&n=13',
    stock: 180,
    discount: 15,
    categoryId: 'autoparts',
  },
  {
    id: 'prod126',
    name: 'Топливный насос',
    price: 630,
    description:
      'Обеспечивает стабильную подачу топлива в двигатель. Улучшает производительность и экономичность авто. Подходит для инжекторных и карбюраторных систем.',
    image:
      'https://avatars.mds.yandex.net/i?id=fd74229d394205b57eab030f131650dd2e6f164f-5232181-images-thumbs&n=13',
    stock: 320,
    discount: 0,
    categoryId: 'autoparts',
  },
  {
    id: 'prod127',
    name: 'Death Grips – The Money Store (LP)',
    price: 1500,
    description:
      'Культовый альбом экспериментального хип-хопа. Агрессивный звук и нестандартные биты. Издание на виниле в высоком качестве.',
    image:
      'https://avatars.mds.yandex.net/i?id=7fa8cdb0b11b4e1a6558ac7c60603936815712ea-4828446-images-thumbs&n=13',
    stock: 200,
    discount: 15,
    categoryId: 'musicPhys',
  },
  {
    id: 'prod128',
    name: 'Clipping. – There Existed an Addiction to Blood (CD)',
    price: 3200,
    description:
      'Мрачный и атмосферный экспериментальный хип-хоп. Инновационный подход к звуку и текстам. Лимитированное издание на виниле.',
    image:
      'https://avatars.mds.yandex.net/i?id=7edbc3e32b91949a365f3ada4a2ba5d72dafc111-5682623-images-thumbs&n=13',
    stock: 150,
    discount: 0,
    categoryId: 'musicPhys',
  },
  {
    id: 'prod129',
    name: 'Run the Jewels – RTJ4 (LP)',
    price: 4000,
    description:
      'Сочетание мощного флоу и политических текстов. Экспериментальные аранжировки и фирменный стиль. Двойной винил с расширенным оформлением.',
    image:
      'https://avatars.mds.yandex.net/i?id=1fa03c4d7742a3a9c5e89edc106f88ca560a9aaa-8438571-images-thumbs&n=13',
    stock: 180,
    discount: 12,
    categoryId: 'musicPhys',
  },
  {
    id: 'prod130',
    name: 'Nine Inch Nails – The Downward Spiral (LP)',
    price: 3500,
    description:
      'Знаковый альбом, соединяющий металл и электронику. Жесткий индустриальный звук и концептуальная глубина. Оригинальное переиздание на виниле.',
    image:
      'https://avatars.mds.yandex.net/i?id=78e31146c6748c4e5898fb13c6299db49a2bf48a-10878377-images-thumbs&n=13',
    stock: 120,
    discount: 0,
    categoryId: 'musicPhys',
  },
  {
    id: 'prod131',
    name: 'Boris – Pink (CD)',
    price: 2800,
    description:
      'Культовый альбом японского экспериментального метала. Гремучая смесь стоунер-рока, нойза и шугейза. Специальное ремастеринговое издание.',
    image:
      'https://avatars.mds.yandex.net/i?id=99a6ec045e85a0b41769d1ffd17ef2f7-4012869-images-thumbs&n=13',
    stock: 160,
    discount: 18,
    categoryId: 'musicPhys',
  },
  {
    id: 'prod132',
    name: 'Swans – To Be Kind (LP)',
    price: 4000,
    description:
      'Мощное звучание на грани метала и пост-панка. Длительные композиции с гипнотической атмосферой. Лимитированное виниловое издание.',
    image:
      'https://avatars.mds.yandex.net/i?id=c95f706d47c36a21a92af81440199dabba04d9cc-8973599-images-thumbs&n=13',
    stock: 100,
    discount: 25,
    categoryId: 'musicPhys',
  },
  {
    id: 'prod133',
    name: 'Deathspell Omega – Paracletus (CD)',
    price: 1500,
    description:
      'Философский блэк-метал с хаотичной структурой. Глубокая лирика и сложные инструментальные партии. Оригинальное издание на CD.',
    image:
      'https://avatars.mds.yandex.net/i?id=40dacb64b1a0e56ba8f0e41683225fc9bc799178c0827b19-5042173-images-thumbs&n=13',
    stock: 140,
    discount: 15,
    categoryId: 'musicPhys',
  },
  {
    id: 'prod134',
    name: 'The Body – I Shall Die Here (LP)',
    price: 3800,
    description:
      'Экспериментальный дум-метал с элементами дроуна. Тяжелые, угнетающие звуковые текстуры. Эксклюзивное cd переиздание.',
    image:
      'https://avatars.mds.yandex.net/i?id=ed57797c16b4b901549707f3ee36608d-4306866-images-thumbs&n=13',
    stock: 90,
    discount: 0,
    categoryId: 'musicPhys',
  },
  {
    id: 'prod135',
    name: 'Электрогитара Fender Stratocaster',
    price: 4500,
    description:
      'Легендарная электрогитара с мощным звуком. Подходит для рок-музыки и джаза. Удобный гриф и качественная сборка.',
    image:
      'https://avatars.mds.yandex.net/i?id=6bed8fd9c077bcd0e36de16adbb8e1ee07284d40-13203112-images-thumbs&n=13',
    stock: 120,
    discount: 15,
    categoryId: 'musicInstruments',
  },
  {
    id: 'prod136',
    name: 'Акустическая гитара Yamaha F310',
    price: 2500,
    description:
      'Классическая акустическая гитара для начинающих и профессионалов. Чистый звук и прочный корпус. Идеально подходит для исполнения живой музыки.',
    image:
      'https://avatars.mds.yandex.net/i?id=5a63087e8b9180f37e3b7a36a95fc7032540f0b2-10629685-images-thumbs&n=13',
    stock: 180,
    discount: 10,
    categoryId: 'musicInstruments',
  },
  {
    id: 'prod137',
    name: 'Синтезатор Casio CTK-3500',
    price: 4000,
    description:
      'Полноразмерный синтезатор с 61 клавишей. Встроенные тембры и ритмы для творчества. Поддержка подключения к компьютеру.',
    image:
      'https://avatars.mds.yandex.net/i?id=79111ac81a589339967006d4a59e91f2f66a8c94-10932673-images-thumbs&n=13',
    stock: 150,
    discount: 20,
    categoryId: 'musicInstruments',
  },
  {
    id: 'prod138',
    name: 'Барабанная установка Pearl Export EXX',
    price: 6500,
    description:
      'Полноценный комплект для профессионалов и любителей. Глубокий и насыщенный звук барабанов. Прочные стойки и качественные мембраны.',
    image:
      'https://avatars.mds.yandex.net/i?id=119b0f16e260b29ef9799ca5bba0c315c33d5f64-9050054-images-thumbs&n=13',
    stock: 80,
    discount: 12,
    categoryId: 'musicInstruments',
  },
  {
    id: 'prod139',
    name: 'Электронные барабаны Roland TD-1K',
    price: 5500,
    description:
      'Компактная электронная барабанная установка. Отлично подходит для тренировок и студийных записей. Чувствительные пэды и удобное управление.',
    image:
      'https://avatars.mds.yandex.net/i?id=4890f9b04f99d2a1aa7fdcfafce56336b753cc01-5232014-images-thumbs&n=13',
    stock: 100,
    discount: 0,
    categoryId: 'musicInstruments',
  },
  {
    id: 'prod140',
    name: 'Скрипка Stentor 1500 4/4',
    price: 2200,
    description:
      'Классическая скрипка для учеников и профессионалов. Прекрасное звучание и качественная древесина. Комплектуется смычком и чехлом.',
    image:
      'https://avatars.mds.yandex.net/i?id=4424647842a08ecfa807fc23dc3449adb18db558-8455861-images-thumbs&n=13',
    stock: 130,
    discount: 10,
    categoryId: 'musicInstruments',
  },
  {
    id: 'prod141',
    name: 'Саксофон Yamaha YAS-280',
    price: 3800,
    description:
      'Идеальный инструмент для джаза и классической музыки. Легкость исполнения и чистый звук. Надежная конструкция и качественные материалы.',
    image:
      'https://avatars.mds.yandex.net/i?id=8d0c967104ea0ef79ca2a084452aee6df8c48e95-8200828-images-thumbs&n=13',
    stock: 75,
    discount: 14,
    categoryId: 'musicInstruments',
  },
  {
    id: 'prod142',
    name: 'Цифровое пианино Yamaha P-45',
    price: 4700,
    description:
      'Компактное цифровое пианино с полноразмерными клавишами. Реалистичное звучание и динамическая клавиатура. Отличный выбор для обучения и выступлений.',
    image:
      'https://avatars.mds.yandex.net/i?id=c0f9d261f5bb62713f7107358c34a79397f082cf-5747098-images-thumbs&n=13',
    stock: 95,
    discount: 0,
    categoryId: 'musicInstruments',
  },
  {
    id: 'prod143',
    name: 'Кофемашина DeLonghi Magnifica',
    price: 1500,
    description:
      'Автоматическая кофемашина для приготовления эспрессо и капучино. Оснащена встроенной кофемолкой и системой подачи молока. Простое управление и стильный дизайн.',
    image:
      'https://avatars.mds.yandex.net/i?id=ed126573d5b0aaed74e2974a84f4f05232fe2d39-4377564-images-thumbs&n=13',
    stock: 120,
    discount: 15,
    categoryId: 'kitchenAppliances',
  },
  {
    id: 'prod144',
    name: 'Блендер Philips HR3652',
    price: 700,
    description:
      'Мощный блендер с режимами измельчения и взбивания. Подходит для приготовления смузи, коктейлей и соусов. Прочный стеклянный кувшин и острые лезвия.',
    image:
      'https://avatars.mds.yandex.net/i?id=38dda7685cf495997f53bdf6d579fa758c65beef-8497242-images-thumbs&n=13',
    stock: 180,
    discount: 10,
    categoryId: 'kitchenAppliances',
  },
  {
    id: 'prod145',
    name: 'Мультиварка Redmond RMC-M90',
    price: 2400,
    description:
      'Многофункциональная мультиварка с программами приготовления. Позволяет готовить каши, супы, выпечку и тушеные блюда. Сенсорное управление и функция отложенного старта.',
    image:
      'https://avatars.mds.yandex.net/i?id=5e2d1542cff75690ef68b6e0466c5580242b63e2-10674688-images-thumbs&n=13',
    stock: 150,
    discount: 20,
    categoryId: 'kitchenAppliances',
  },
  {
    id: 'prod146',
    name: 'Электрический чайник Tefal KI150D',
    price: 1800,
    description:
      'Стильный электрочайник с быстрым нагревом. Объем 1.7 литра, защита от перегрева и автоотключение. Удобный поворотный механизм и скрытый нагревательный элемент.',
    image:
      'https://avatars.mds.yandex.net/i?id=771b202c660c3a1f52314a4bd245588f6cd076c8-9230514-images-thumbs&n=13',
    stock: 200,
    discount: 0,
    categoryId: 'kitchenAppliances',
  },
  {
    id: 'prod147',
    name: 'Тостер Bosch TAT6A003',
    price: 1700,
    description:
      'Компактный тостер с двумя отделениями. Регулировка степени поджаривания и функция размораживания. Съемный поддон для крошек и автоматическое отключение.',
    image:
      'https://avatars.mds.yandex.net/i?id=6a50738ccbff89b30f550f961bab2796c1dcdfc6-6073906-images-thumbs&n=13',
    stock: 130,
    discount: 18,
    categoryId: 'kitchenAppliances',
  },
  {
    id: 'prod148',
    name: 'Кухонный комбайн Kenwood FPM250',
    price: 2300,
    description:
      'Многофункциональный комбайн для нарезки, измельчения и смешивания. В комплекте насадки для теста, терки и блендер. Прочный корпус и мощный мотор.',
    image:
      'https://avatars.mds.yandex.net/i?id=b1b6abb5ad245aa907cdf5ca42e91c89f9b861f9-12501129-images-thumbs&n=13',
    stock: 110,
    discount: 25,
    categoryId: 'kitchenAppliances',
  },
  {
    id: 'prod149',
    name: 'Мясорубка Moulinex ME858D',
    price: 1900,
    description:
      'Электрическая мясорубка с высокой производительностью. В комплекте насадки для фарша, колбасок и шинковки. Прочный металлический корпус и защита от перегрузки.',
    image:
      'https://avatars.mds.yandex.net/i?id=b710c15bf23ec9fa1635017235ffcee38cffd00ff37999e4-5235144-images-thumbs&n=13',
    stock: 140,
    discount: 14,
    categoryId: 'kitchenAppliances',
  },
  {
    id: 'prod150',
    name: 'Микроволновая печь Samsung ME83X',
    price: 1700,
    description:
      'Компактная микроволновая печь с грилем. Удобное управление и режим разморозки. Внутреннее покрытие из биокерамики для легкой очистки.',
    image:
      'https://avatars.mds.yandex.net/i?id=07fea3252e9fad5f88c5a1f459945069b051cea6-7886515-images-thumbs&n=13',
    stock: 95,
    discount: 0,
    categoryId: 'kitchenAppliances',
  },
  {
    id: 'prod151',
    name: 'Очиститель воздуха Xiaomi Mi Air Purifier 3H',
    price: 900,
    description:
      'Эффективный очиститель воздуха с HEPA-фильтром. Удаляет пыль, аллергены и неприятные запахи. Поддержка управления через мобильное приложение.',
    image:
      'https://avatars.mds.yandex.net/i?id=ff04f902941f19bbe34fe0f50c0a09274de700ce-5876206-images-thumbs&n=13',
    stock: 100,
    discount: 20,
    categoryId: 'roomAppliances',
  },
  {
    id: 'prod152',
    name: 'Увлажнитель воздуха Philips HU4816',
    price: 900,
    description:
      'Мощный увлажнитель с технологией естественного испарения. Поддерживает оптимальный уровень влажности в помещении. Бесшумная работа и энергосбережение.',
    image:
      'https://avatars.mds.yandex.net/i?id=0492688e883352f12e01a1efa2195b2c95da04ea-4055809-images-thumbs&n=13',
    stock: 120,
    discount: 15,
    categoryId: 'roomAppliances',
  },
  {
    id: 'prod153',
    name: 'Обогреватель Electrolux ECH/AG-1500',
    price: 1200,
    description:
      'Современный конвекторный обогреватель с регулируемым термостатом. Быстро нагревает помещение и экономично расходует энергию. Защита от перегрева.',
    image:
      'https://avatars.mds.yandex.net/i?id=22cc248ea91bebe9be131136dc5573876dc39b4f-10233129-images-thumbs&n=13',
    stock: 90,
    discount: 0,
    categoryId: 'roomAppliances',
  },
  {
    id: 'prod154',
    name: 'Вентилятор напольный Polaris PSF 40',
    price: 900,
    description:
      'Мощный напольный вентилятор с тремя скоростями. Регулируемый наклон и поворотный механизм. Низкий уровень шума и стильный дизайн.',
    image:
      'https://avatars.mds.yandex.net/i?id=029b9be0c2e10781bbf197b22cd078a9ef455022-10071204-images-thumbs&n=13',
    stock: 140,
    discount: 12,
    categoryId: 'roomAppliances',
  },
  {
    id: 'prod155',
    name: 'Аромадиффузор Xiaomi Smart Diffuser',
    price: 900,
    description:
      'Умный аромадиффузор с регулировкой интенсивности. Работает с эфирными маслами для создания комфортной атмосферы. Управление через мобильное приложение.',
    image:
      'https://avatars.mds.yandex.net/i?id=4ec0d82a8dd6ac1b3990dc8addf4f46f1ff08b50-7593536-images-thumbs&n=13',
    stock: 160,
    discount: 0,
    categoryId: 'roomAppliances',
  },
  {
    id: 'prod156',
    name: 'Ионизатор воздуха AIC XJ-3800A1',
    price: 700,
    description:
      'Мощный ионизатор для очистки воздуха. Удаляет вирусы, бактерии и токсины. Подходит для помещений до 50 м².',
    image:
      'https://avatars.mds.yandex.net/i?id=801ea4af706a305ab5de68f3c7292119dd74ae51-4416220-images-thumbs&n=13',
    stock: 80,
    discount: 22,
    categoryId: 'roomAppliances',
  },
  {
    id: 'prod157',
    name: 'Настольная лампа Xiaomi Mi LED Desk Lamp 1S',
    price: 500,
    description:
      'Светодиодная настольная лампа с регулировкой яркости. Поддержка умного управления и различных режимов освещения. Долговечный и энергоэффективный свет.',
    image:
      'https://avatars.mds.yandex.net/i?id=7566e830951b1b73be4ac5a4df5d7d0c7cc68c82-10703102-images-thumbs&n=13',
    stock: 150,
    discount: 14,
    categoryId: 'roomAppliances',
  },
  {
    id: 'prod158',
    name: 'Электрическая простыня Beurer TS 23',
    price: 400,
    description:
      'Мягкая электрическая простыня с регулировкой температуры. Позволяет создать комфортное тепло в холодное время года. Безопасная технология защиты от перегрева.',
    image:
      'https://avatars.mds.yandex.net/i?id=c716508703d8f3d96ea9214a252efca7bb985c8e-4458806-images-thumbs&n=13',
    stock: 110,
    discount: 0,
    categoryId: 'roomAppliances',
  },
  {
    id: 'prod159',
    name: 'Игровая консоль Sony PlayStation 5',
    price: 4999,
    description:
      'Мощная игровая консоль с поддержкой 4K-графики. Быстрая загрузка благодаря SSD. Поддержка эксклюзивных игр и технологии Ray Tracing.',
    image:
      'https://avatars.mds.yandex.net/i?id=ee76e82d438648b4bca54ebb7f403be8c1495b55-8496968-images-thumbs&n=13',
    stock: 200,
    discount: 10,
    categoryId: 'console',
  },
  {
    id: 'prod160',
    name: 'Игровая консоль Microsoft Xbox Series X',
    price: 4799,
    description:
      'Флагманская консоль с высокой производительностью. Поддержка 4K-гейминга и технологий Ray Tracing. Огромная библиотека игр с Xbox Game Pass.',
    image:
      'https://avatars.mds.yandex.net/i?id=eaf7f3b3c87b51a6b0c786a19cb33bf6b76538d7-9233044-images-thumbs&n=13',
    stock: 180,
    discount: 12,
    categoryId: 'console',
  },
  {
    id: 'prod161',
    name: 'Игровая консоль Nintendo Switch OLED',
    price: 3299,
    description:
      'Гибридная игровая консоль с ярким OLED-дисплеем. Поддержка портативного и стационарного режимов. Уникальные игры от Nintendo.',
    image:
      'https://avatars.mds.yandex.net/i?id=53cc6fceaed3ac7beb33d3f2b2a880a5256f980e-4274889-images-thumbs&n=13',
    stock: 250,
    discount: 0,
    categoryId: 'console',
  },
  {
    id: 'prod162',
    name: 'Игровая консоль Steam Deck 512GB',
    price: 5599,
    description:
      'Портативная игровая консоль от Valve с поддержкой Steam. Высокая производительность и удобное управление. Идеально для любителей ПК-гейминга.',
    image:
      'https://avatars.mds.yandex.net/i?id=672de4c3dc14ae7d7afb3adecbe02a95ed76f202-10680239-images-thumbs&n=13',
    stock: 120,
    discount: 5,
    categoryId: 'console',
  },
  {
    id: 'prod163',
    name: 'Ретро-консоль SEGA Mega Drive Mini 2',
    price: 1299,
    description:
      'Компактная ретро-консоль с предустановленными играми. Оригинальный дизайн и классический геймплей. Отличный подарок для фанатов ретро-гейминга.',
    image:
      'https://avatars.mds.yandex.net/i?id=3655dc0059dbb5a69bb733c050b0091df7baba3928267340-9193117-images-thumbs&n=13',
    stock: 300,
    discount: 15,
    categoryId: 'console',
  },
  {
    id: 'prod164',
    name: 'Игровая консоль Sony PlayStation 4 Slim 500GB',
    price: 2699,
    description:
      'Популярная консоль предыдущего поколения. Поддержка множества игр с PlayStation Store. Отличное решение для бюджетного гейминга.',
    image:
      'https://avatars.mds.yandex.net/i?id=5cd2a9fbdb8a09e5ad68bc35697bee36916a58aa-4486195-images-thumbs&n=13',
    stock: 170,
    discount: 0,
    categoryId: 'console',
  },
  {
    id: 'prod165',
    name: 'Игровая консоль Xbox Series S',
    price: 2999,
    description:
      'Доступная цифровая консоль от Microsoft. Поддержка 1440p-гейминга и Game Pass. Компактный размер и высокая производительность.',
    image:
      'https://avatars.mds.yandex.net/i?id=0897925e02025e34ded52a1adedbc353087d9d21-5381369-images-thumbs&n=13',
    stock: 220,
    discount: 9,
    categoryId: 'console',
  },
  {
    id: 'prod166',
    name: 'Ретро-консоль Dendy Classic',
    price: 499,
    description:
      'Популярная 8-битная консоль с классическими играми. Отличный вариант для ностальгии. Подключение к современным телевизорам.',
    image:
      'https://avatars.mds.yandex.net/i?id=1ae66e451048454aca62bd46eb42833083eea036-4321889-images-thumbs&n=13',
    stock: 400,
    discount: 20,
    categoryId: 'console',
  },
  {
    id: 'prod167',
    name: 'Геймпад DualSense для PS5',
    price: 699,
    description:
      'Беспроводной контроллер с тактильной отдачей. Поддержка адаптивных триггеров. Удобная эргономика и стильный дизайн.',
    image:
      'https://avatars.mds.yandex.net/i?id=9b5baab150621f1a32fecd940fdcee307cd76c70b1db5437-12729954-images-thumbs&n=13',
    stock: 300,
    discount: 10,
    categoryId: 'consoleAccess',
  },
  {
    id: 'prod168',
    name: 'Геймпад Xbox Wireless Controller',
    price: 649,
    description:
      'Оригинальный геймпад для Xbox Series X|S и ПК. Эргономичный дизайн и улучшенное сцепление. Совместимость с Windows 10 и 11.',
    image:
      'https://avatars.mds.yandex.net/i?id=8da89f40a3265a182240fe240d609258e1c7666f-7765566-images-thumbs&n=13',
    stock: 250,
    discount: 12,
    categoryId: 'consoleAccess',
  },
  {
    id: 'prod169',
    name: 'Док-станция для Nintendo Switch',
    price: 899,
    description:
      'Официальная док-станция для подключения к ТВ. Поддержка зарядки и вывода изображения в 1080p. Совместимость со всеми версиями Switch.',
    image:
      'https://avatars.mds.yandex.net/i?id=fc5ca283f50d34a1e03c6688402cdf0f326f8348-10385249-images-thumbs&n=13',
    stock: 150,
    discount: 0,
    categoryId: 'consoleAccess',
  },
  {
    id: 'prod170',
    name: 'Зарядная станция для DualSense',
    price: 399,
    description:
      'Позволяет заряжать сразу два геймпада DualSense. Удобное хранение и быстрая зарядка. Компактный и стильный дизайн.',
    image:
      'https://avatars.mds.yandex.net/i?id=03e49b9a536aecd18cd40e577343121fb68a7e71-8496938-images-thumbs&n=13',
    stock: 180,
    discount: 15,
    categoryId: 'consoleAccess',
  },
  {
    id: 'prod171',
    name: 'Гарнитура Pulse 3D для PS5',
    price: 999,
    description:
      'Беспроводная гарнитура с объемным 3D-звуком. Оптимизирована для PlayStation 5. Встроенный микрофон с шумоподавлением.',
    image:
      'https://avatars.mds.yandex.net/i?id=e887f9ef0018232dae1b854b226f5515d2141a85-4789759-images-thumbs&n=13',
    stock: 100,
    discount: 5,
    categoryId: 'consoleAccess',
  },
  {
    id: 'prod172',
    name: 'Жесткий диск Seagate 2TB для Xbox',
    price: 1199,
    description:
      'Расширяет память Xbox Series X|S. Высокая скорость передачи данных. Простое подключение без дополнительных настроек.',
    image:
      'https://avatars.mds.yandex.net/i?id=2a0000017a0d1f1582ad259444147c62274f-4864053-images-thumbs&n=13',
    stock: 120,
    discount: 0,
    categoryId: 'consoleAccess',
  },
  {
    id: 'prod173',
    name: 'Сменные крышки для PS5 (черные)',
    price: 599,
    description:
      'Оригинальные сменные панели для PlayStation 5. Превращают белую консоль в стильный черный вариант. Простая установка без инструментов.',
    image:
      'https://avatars.mds.yandex.net/i?id=b4b3dccf9a0a984a5ba499454b892a19-5575082-images-thumbs&n=13',
    stock: 200,
    discount: 7,
    categoryId: 'consoleAccess',
  },
  {
    id: 'prod174',
    name: 'Руль Logitech G923 для консолей',
    price: 2999,
    description:
      'Профессиональный игровой руль с обратной связью. Поддержка PS5, Xbox и ПК. Реалистичная имитация вождения и точное управление.',
    image:
      'https://avatars.mds.yandex.net/i?id=cc8141288172fdd1201a1e45da4c6853e444f5cf-5440253-images-thumbs&n=13',
    stock: 90,
    discount: 5,
    categoryId: 'consoleAccess',
  },
  {
    id: 'prod175',
    name: 'Серебряное ожерелье с фианитами',
    price: 1599,
    description:
      'Элегантное серебряное ожерелье с сияющими фианитами. Подходит для торжественных мероприятий и повседневной носки. Длина регулируется.',
    image:
      'https://avatars.mds.yandex.net/i?id=7ef6449baf0efffce5d376cf9ad0ea4f707e0a6eb07e07ba-4286590-images-thumbs&n=13',
    stock: 300,
    discount: 15,
    categoryId: 'necklaces',
  },
  {
    id: 'prod176',
    name: 'Золотая цепочка 585 пробы',
    price: 1899,
    description:
      'Классическая золотая цепочка высокого качества. Универсальный дизайн подходит мужчинам и женщинам. Длина 50 см, удобная застежка.',
    image:
      'https://avatars.mds.yandex.net/i?id=9cfed76abb91fdc524c32bdd916d5e9d7a5b36cb-10767526-images-thumbs&n=13',
    stock: 120,
    discount: 10,
    categoryId: 'necklaces',
  },
  {
    id: 'prod177',
    name: 'Ожерелье с жемчугом',
    price: 799,
    description:
      'Натуральный пресноводный жемчуг с изысканным блеском. Отлично сочетается с вечерними нарядами. Прочная серебряная застежка.',
    image:
      'https://avatars.mds.yandex.net/i?id=078f1cd417a551a8b613f4270e6f12252f9fbce5-5858063-images-thumbs&n=13',
    stock: 80,
    discount: 0,
    categoryId: 'necklaces',
  },
  {
    id: 'prod178',
    name: 'Кулон в форме сердца',
    price: 499,
    description:
      'Романтический кулон-сердце с цепочкой. Выполнен из медицинской стали с позолотой. Идеальный подарок для любимого человека.',
    image:
      'https://avatars.mds.yandex.net/i?id=bb42f6b23684407a9191c74d1a102e7f73c62a2c8e00f3d9-12938349-images-thumbs&n=13',
    stock: 500,
    discount: 20,
    categoryId: 'necklaces',
  },
  {
    id: 'prod179',
    name: 'Стальное ожерелье с гравировкой',
    price: 349,
    description:
      'Минималистичное ожерелье из нержавеющей стали. Возможно нанесение персональной гравировки. Подходит для мужчин и женщин.',
    image:
      'https://avatars.mds.yandex.net/i?id=b6dd6e4afe54a01f9f115fd6e974340c67d1aae7-8427413-images-thumbs&n=13',
    stock: 250,
    discount: 18,
    categoryId: 'necklaces',
  },
  {
    id: 'prod180',
    name: 'Ожерелье с аметистом',
    price: 849,
    description:
      'Изящное серебряное ожерелье с натуральным аметистом. Камень символизирует гармонию и спокойствие. Длина 45 см.',
    image:
      'https://avatars.mds.yandex.net/i?id=de7d509320cbedc27a657f1cddee977c54e2453e-10685102-images-thumbs&n=13',
    stock: 150,
    discount: 10,
    categoryId: 'necklaces',
  },
  {
    id: 'prod181',
    name: 'Готическое ожерелье с черным ониксом',
    price: 1299,
    description:
      'Оригинальное украшение с натуральным черным ониксом. Дополнено серебряной фурнитурой. Идеальный выбор для смелых образов.',
    image:
      'https://avatars.mds.yandex.net/i?id=acba7e81579a5dc3da5179daea199f130e13356f-10137431-images-thumbs&n=13',
    stock: 200,
    discount: 0,
    categoryId: 'necklaces',
  },
  {
    id: 'prod182',
    name: 'Этническое ожерелье из бисера',
    price: 259,
    description:
      'Яркое ожерелье ручной работы с этническими мотивами. Изготовлено из натурального бисера. Отлично дополняет стиль бохо.',
    image:
      'https://avatars.mds.yandex.net/i?id=7de54784042a179c0af070ea0d9ed23f80a0070abbca9e89-4715150-images-thumbs&n=13',
    stock: 350,
    discount: 17,
    categoryId: 'necklaces',
  },
  {
    id: 'prod183',
    name: 'Серебряное кольцо с фианитом',
    price: 649,
    description:
      'Изящное серебряное кольцо с крупным фианитом. Подходит для торжественных мероприятий и повседневной носки. Прекрасный подарок.',
    image:
      'https://avatars.mds.yandex.net/i?id=44de1918b1606618bd5c7497e4605162f571fbb2-8306751-images-thumbs&n=13',
    stock: 400,
    discount: 15,
    categoryId: 'rings',
  },
  {
    id: 'prod184',
    name: 'Золотое кольцо 585 пробы',
    price: 1599,
    description:
      'Классическое золотое кольцо с лаконичным дизайном. Подходит для помолвки и ежедневного ношения. Высокое качество изготовления.',
    image:
      'https://avatars.mds.yandex.net/i?id=eb5816e16cbdecaa255568e3b95b62f2cba4f7c4-5257239-images-thumbs&n=13',
    stock: 120,
    discount: 0,
    categoryId: 'rings',
  },
  {
    id: 'prod185',
    name: 'Кольцо с натуральным сапфиром',
    price: 2199,
    description:
      'Элегантное кольцо с сапфиром в серебряной оправе. Изысканный аксессуар для особых случаев. Подчеркивает утонченность и стиль.',
    image:
      'https://avatars.mds.yandex.net/i?id=47ea325beb5f6df8d58180170775e217b9149890-4566669-images-thumbs&n=13',
    stock: 75,
    discount: 12,
    categoryId: 'rings',
  },
  {
    id: 'prod186',
    name: 'Мужское стальное кольцо',
    price: 279,
    description:
      'Брутальное кольцо из нержавеющей стали. Отличный выбор для современных мужчин. Комфортно сидит на пальце.',
    image:
      'https://avatars.mds.yandex.net/i?id=1ed7f42604874e18143b6b286dc6a38687a5c382-10638828-images-thumbs&n=13',
    stock: 500,
    discount: 20,
    categoryId: 'rings',
  },
  {
    id: 'prod187',
    name: 'Парное кольцо для влюбленных',
    price: 499,
    description:
      'Кольцо из титана с гравировкой. Символизирует вечную любовь и преданность. Идеальный подарок для пары.',
    image:
      'https://avatars.mds.yandex.net/i?id=9bb114d44227677028de01bc321baa04683532eb-12715024-images-thumbs&n=13',
    stock: 250,
    discount: 0,
    categoryId: 'rings',
  },
  {
    id: 'prod188',
    name: 'Кольцо с аметистом',
    price: 579,
    description:
      'Красивое кольцо с натуральным аметистом. Камень символизирует гармонию и спокойствие. Серебряная оправа подчеркнет ваш стиль.',
    image:
      'https://avatars.mds.yandex.net/i?id=ecbf8adbb4e25869e389ba9d06dac4e67cbb4ce9-6436951-images-thumbs&n=13',
    stock: 150,
    discount: 10,
    categoryId: 'rings',
  },
  {
    id: 'prod189',
    name: 'Готическое кольцо с черным ониксом',
    price: 439,
    description:
      'Оригинальное кольцо с черным ониксом. Выполнено в готическом стиле. Подходит как мужчинам, так и женщинам.',
    image:
      'https://avatars.mds.yandex.net/i?id=85abfc59905e98e527b6bf1977f15e67d54f766d83c74b2c-5220205-images-thumbs&n=13',
    stock: 200,
    discount: 0,
    categoryId: 'rings',
  },
  {
    id: 'prod190',
    name: 'Этническое кольцо с орнаментом',
    price: 329,
    description:
      'Необычное кольцо с ручной гравировкой. Вдохновлено этническими мотивами. Отличный аксессуар для любителей необычного стиля.',
    image:
      'https://avatars.mds.yandex.net/i?id=8f57c95b127fcf9d4411dd1c7e18b86acc5eb380-5141403-images-thumbs&n=13',
    stock: 350,
    discount: 17,
    categoryId: 'rings',
  },
  {
    id: 'prod191',
    name: 'Аккумуляторная дрель-шуруповерт',
    price: 549,
    description:
      'Компактная аккумуляторная дрель-шуруповерт с высоким крутящим моментом. Подходит для работы с деревом и металлом. В комплекте две батареи и зарядное устройство.',
    image:
      'https://avatars.mds.yandex.net/i?id=c026b60e86a809581724fbcb04e3bbaedc3fdaa9-3908863-images-thumbs&n=13',
    stock: 120,
    discount: 15,
    categoryId: 'powertools',
  },
  {
    id: 'prod192',
    name: 'Угловая шлифовальная машина',
    price: 799,
    description:
      'Мощная болгарка с плавным пуском. Подходит для резки металла, камня и бетона. Оснащена системой защиты от перегрева.',
    image:
      'https://avatars.mds.yandex.net/i?id=6cd894a8bca7b14fa91935cbbd1109f586f1885c-7040875-images-thumbs&n=13',
    stock: 80,
    discount: 0,
    categoryId: 'powertools',
  },
  {
    id: 'prod193',
    name: 'Электролобзик профессиональный',
    price: 649,
    description:
      'Высокоточный электролобзик для фигурного реза. Оснащен системой быстрой замены полотен. Имеет регулируемую скорость.',
    image:
      'https://avatars.mds.yandex.net/i?id=90d21493dc317d4c35bf7e3883d48c35e931ca1a-9042357-images-thumbs&n=13',
    stock: 100,
    discount: 12,
    categoryId: 'powertools',
  },
  {
    id: 'prod194',
    name: 'Перфоратор с антивибрационной системой',
    price: 1099,
    description:
      'Мощный перфоратор с функцией долбления. Оснащен антивибрационной системой для комфортной работы. Подходит для сверления бетона и кирпича.',
    image:
      'https://avatars.mds.yandex.net/i?id=9c5a2bdab00949de48651ba57ac9906b29a76af945f49cce-13013568-images-thumbs&n=13',
    stock: 90,
    discount: 18,
    categoryId: 'powertools',
  },
  {
    id: 'prod195',
    name: 'Циркулярная пила с лазерной направляющей',
    price: 1349,
    description:
      'Циркулярная пила с лазерным указателем для точного реза. Подходит для работы с древесиной и фанерой. Имеет удобную регулировку глубины пропила.',
    image:
      'https://avatars.mds.yandex.net/i?id=e20069246e14020fe8c5b71ef7d43ad3f50dfaf4-12477692-images-thumbs&n=13',
    stock: 70,
    discount: 0,
    categoryId: 'powertools',
  },
  {
    id: 'prod196',
    name: 'Фрезер по дереву',
    price: 999,
    description:
      'Универсальный фрезер с плавной регулировкой оборотов. Идеален для обработки древесины. В комплекте несколько насадок.',
    image:
      'https://avatars.mds.yandex.net/i?id=a6c7b536408748e42ee1ef6ae0676cf24394a834-4446653-images-thumbs&n=13',
    stock: 85,
    discount: 20,
    categoryId: 'powertools',
  },
  {
    id: 'prod197',
    name: 'Ленточная шлифмашина',
    price: 879,
    description:
      'Мощная ленточная шлифмашина для быстрой обработки поверхностей. Оснащена системой пылеудаления. Имеет эргономичный корпус.',
    image:
      'https://avatars.mds.yandex.net/i?id=ee7b3e69be39408209650d19ef725e72c5dc9dd8-9065817-images-thumbs&n=13',
    stock: 95,
    discount: 13,
    categoryId: 'powertools',
  },
  {
    id: 'prod198',
    name: 'Компрессор для пневмоинструмента',
    price: 1899,
    description:
      'Мощный компрессор с ресивером на 50 литров. Подходит для работы с краскопультами и другими пневмоинструментами. Оснащен автоматической системой охлаждения.',
    image:
      'https://avatars.mds.yandex.net/i?id=2ee43d8452540a750d15a1d86e872102c7cdff56-10901265-images-thumbs&n=13',
    stock: 60,
    discount: 0,
    categoryId: 'powertools',
  },
  {
    id: 'prod199',
    name: 'Набор отверток 12 в 1',
    price: 829,
    description:
      'Компактный набор отверток с магнитными насадками. Подходит для ремонта бытовой техники и электроники. В комплекте удобный кейс.',
    image:
      'https://avatars.mds.yandex.net/i?id=0909d66d893bac5ed6bc90199733e7bb0808e3de-9654904-images-thumbs&n=13',
    stock: 150,
    discount: 10,
    categoryId: 'handtools',
  },
  {
    id: 'prod200',
    name: 'Молоток слесарный 500 г',
    price: 399,
    description:
      'Прочный слесарный молоток с деревянной рукояткой. Подходит для слесарных и строительных работ. Ударопрочная конструкция.',
    image:
      'https://avatars.mds.yandex.net/i?id=35c43698ab2b949102ed44e7230645778430425d-4238070-images-thumbs&n=13',
    stock: 200,
    discount: 5,
    categoryId: 'handtools',
  },
  {
    id: 'prod201',
    name: 'Пассатижи универсальные',
    price: 149,
    description:
      'Многофункциональные пассатижи с антикоррозийным покрытием. Удобны для захвата и резки проводов. Эргономичные ручки для комфортной работы.',
    image:
      'https://avatars.mds.yandex.net/get-yabs_performance/11905502/hatc4bef7bc5f5311b0e0a4c6afec0209d1/huge',
    stock: 180,
    discount: 0,
    categoryId: 'handtools',
  },
  {
    id: 'prod202',
    name: 'Разводной ключ 250 мм',
    price: 179,
    description:
      'Прочный разводной ключ с широким диапазоном захвата. Подходит для сантехнических и монтажных работ. Антискользящее покрытие рукоятки.',
    image:
      'https://avatars.mds.yandex.net/i?id=313a4ca266ad599a58a769878abcc6f0e86d7aa1c36487c8-5877259-images-thumbs&n=13',
    stock: 140,
    discount: 12,
    categoryId: 'handtools',
  },
  {
    id: 'prod203',
    name: 'Ножовка по дереву 450 мм',
    price: 219,
    description:
      'Острая ножовка с закаленными зубьями. Подходит для работы с древесиной и фанерой. Удобная прорезиненная рукоятка.',
    image:
      'https://avatars.mds.yandex.net/i?id=f2a648e4635df0a0520d4894c2e7d43afd2bf849c1c0a66e-11939057-images-thumbs&n=13',
    stock: 120,
    discount: 10,
    categoryId: 'handtools',
  },
  {
    id: 'prod204',
    name: 'Строительный уровень 600 мм',
    price: 249,
    description:
      'Алюминиевый строительный уровень с тремя глазками. Обеспечивает точные измерения. Легкий и прочный корпус.',
    image:
      'https://avatars.mds.yandex.net/i?id=5f5bc154cfacc254b6a94f3c307c8af6bd193982-5086977-images-thumbs&n=13',
    stock: 100,
    discount: 0,
    categoryId: 'handtools',
  },
  {
    id: 'prod205',
    name: 'Клещи для снятия изоляции',
    price: 169,
    description:
      'Специальные клещи для удобного снятия изоляции с проводов. Автоматическая регулировка под толщину провода. Прочные стальные лезвия.',
    image:
      'https://avatars.mds.yandex.net/i?id=23d5fe816f0e377ab149498738634cd3e208ade7-7753970-images-thumbs&n=13',
    stock: 130,
    discount: 10,
    categoryId: 'handtools',
  },
  {
    id: 'prod206',
    name: 'Рулетка измерительная 5 м',
    price: 99,
    description:
      'Прочная рулетка с автостопом и фиксацией. Корпус из ударопрочного пластика. Лента с двойной шкалой измерений.',
    image:
      'https://avatars.mds.yandex.net/i?id=dac95276bf69f213ffb21cd986824cd316e24541-4968757-images-thumbs&n=13',
    stock: 190,
    discount: 0,
    categoryId: 'handtools',
  },
];
