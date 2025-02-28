// src/data/categories.ts
import {Category} from './types';

export const categories: Category[] = [
  {
    id: 'cat1',
    name: 'Электроника',
    image:
      'https://5zv.by/image/cache/catalog/easyphoto/38143/s23-ultra-9-1000x1000-jpg_9-1000x1000.jpg',
    subcategories: [
      {
        id: 'subcat1',
        name: 'Смартфоны',
        image:
          'https://www.mobicom.ru/upload/iblock/fb4/gb9fgzk6zq4fdg9goasew8r0cu6ii431.png',
      },
    ],
  },
  {
    id: 'cat2',
    name: 'Одежда',
    image:
      'https://rainfunvocabulary.wordpress.com/wp-content/uploads/2017/10/cropped-clothing.jpg',
    subcategories: [
      {
        id: 'subcat4',
        name: 'Мужская',
        image:
          'https://i.pinimg.com/originals/d1/9b/b2/d19bb2772615a334b809a409f001a4ab.jpg',
      },
      {
        id: 'subcat5',
        name: 'Женская',
        image:
          'https://i.pinimg.com/736x/67/49/ce/6749ce87f194ed40cac9d33e4ce48624.jpg',
      },
      {
        id: 'subcat6',
        name: 'Детская',
        image:
          'https://banner2.cleanpng.com/20180511/iaq/kisspng-outerwear-t-shirt-hoodie-children-s-clothing-5af6360b515f69.5813439715260851313333.jpg',
      },
    ],
  },
  {
    id: 'cat3',
    name: 'Дом и сад',
    image:
      'https://avatars.mds.yandex.net/i?id=670ecc12aea4cdfc964121d820baacd9_l-5233043-images-thumbs&n=13',
    subcategories: [
      {
        id: 'subcat7',
        name: 'Мебель',
        image:
          'https://banner2.cleanpng.com/20180628/uo/kisspng-table-deckchair-garden-furniture-masa-5b34fffa90bf54.7316186815302000585929.jpg',
      },
      {
        id: 'subcat8',
        name: 'Декор',
        image:
          'https://avatars.mds.yandex.net/i?id=cd0cfbc25551161b86356b8301b92e21_l-5185584-images-thumbs&n=13',
      },
    ],
  },
  {
    id: 'cat4',
    name: 'Книги',
    image:
      'https://i.pinimg.com/originals/a9/f0/e4/a9f0e4fc5159d8d41a88b3f2c56bc534.jpg',
    subcategories: [
      {
        id: 'subcat9',
        name: 'Художественная',
        image:
          'https://cdn.culture.ru/images/a5bd4d1c-d84f-5570-bd42-bfc69b8a2ca2',
      },
      {
        id: 'subcat10',
        name: 'Нехудожественная',
        image:
          'https://cdn.culture.ru/images/b168658f-84a1-5b03-b068-0f1000b2afa4',
      },
    ],
  },
  {
    id: 'cat5',
    name: 'Спорт',
    image:
      'https://i.pinimg.com/originals/ca/33/25/ca3325bcd9bae8524ef553f78e4e9be7.png',
    subcategories: [
      {
        id: 'subcat11',
        name: 'Фитнес',
        image:
          'https://sportindoor.ru/upload/iblock/8e1/35ogh0k43jt9hezgusiht02zh4hbibz4.jpg',
      },
      {
        id: 'subcat12',
        name: 'Командные виды',
        image:
          'http://img.smotreshka.tv/image/aHR0cHM6Ly9jbXMuc21vdHJlc2hrYS50di9hcmNoaXZlLWltZy9zdGF0aWMvbWVkaWEvMGMvMWQvMGMxZDNiN2NmMmM1NmQ5ZmM1ZGQ0YjM5ZjA5MGI4MDA=',
      },
    ],
  },
  {
    id: 'cat6',
    name: 'Товары для детей',
    image:
      'https://avatars.mds.yandex.net/get-altay/3935166/2a000001751c7ff2a8da7ee5eadf739a6bad/XXL_height',
    subcategories: [
      {
        id: 'subcat13',
        name: 'Игрушки',
        image:
          'https://avatars.mds.yandex.net/i?id=0c722645d47afb98993354d208179441031ed0bc-9831677-images-thumbs&n=13',
      },
      {
        id: 'subcat14',
        name: 'Книги',
        image:
          'https://cdn.culture.ru/images/c1cdd0b6-4640-5a19-a41c-174743a543b0',
      },
    ],
  },
  {
    id: 'cat7',
    name: 'Косметика',
    image:
      'https://i.pinimg.com/originals/b1/5e/34/b15e345ed19891c3b84c5373c43f4923.png',
    subcategories: [
      {
        id: 'subcat15',
        name: 'Уход за кожей',
        image:
          'https://www.revivalabs.com/wp-content/uploads/2017/06/shutterstock_136435142-800x800.png',
      },
      {
        id: 'subcat16',
        name: 'Макияж',
        image:
          'https://i.pinimg.com/originals/b1/5e/34/b15e345ed19891c3b84c5373c43f4923.png',
      },
    ],
  },
  {
    id: 'cat8',
    name: 'Автотовары',
    image:
      'https://avatars.mds.yandex.net/get-altay/2397657/2a0000017197e6f4bedd3092f0c6e36f3259/XXXL',
    subcategories: [
      {
        id: 'subcat17',
        name: 'Аксессуары',
        image: 'https://a.d-cd.net/KQAAAgGZuuA-1920.jpg',
      },
      {
        id: 'subcat18',
        name: 'Запчасти',
        image:
          'https://avatars.mds.yandex.net/get-altay/10993309/2a0000018d7eaa5defa32077495f0beee558/XXL_height',
      },
    ],
  },
  {
    id: 'cat9',
    name: 'Музыка',
    image: 'https://cdn.culture.ru/images/6df22c71-ad9f-518a-9d33-41a29d777402',
    subcategories: [
      {
        id: 'subcat19',
        name: 'CD и винил',
        image:
          'https://i.pinimg.com/736x/96/cc/86/96cc86de30720ba0f06afd60593aa7f8.jpg',
      },
      {
        id: 'subcat20',
        name: 'Музыкальные инструменты',
        image:
          'https://ydshi.yam.muzkult.ru/media/2022/01/12/1306632869/SeekPng.com_musical-png_10066318.png',
      },
    ],
  },
  {
    id: 'cat10',
    name: 'Видеоигры',
    image:
      'https://yt3.ggpht.com/ytc/AKedOLTk1nUoQ6T0r0xmmF5g1RvLwh0LyP-7_Ev-hQMN=s900-c-k-c0x00ffffff-no-rj',
    subcategories: [
      {
        id: 'subcat21',
        name: 'Консоли',
        image: 'https://cdn1.ozone.ru/s3/multimedia-o/6458555532.jpg',
      },
      {
        id: 'subcat22',
        name: 'Компьютерные',
        image:
          'https://avatars.mds.yandex.net/i?id=08f7bb1fc28fa0ce28c8f2bb8db6f0f346db87c4-10701561-images-thumbs&n=13',
      },
    ],
  },
  {
    id: 'cat11',
    name: 'Сад и огород',
    image:
      'https://i.pinimg.com/originals/cf/8d/e4/cf8de4ba023072c48e47d716ec54ac52.png',
    subcategories: [
      {
        id: 'subcat23',
        name: 'Инструменты',
        image:
          'https://i.pinimg.com/736x/30/7c/5d/307c5d9fab65a65b5e9f24c9974b715f.jpg',
      },
      {
        id: 'subcat24',
        name: 'Растения',
        image:
          'https://i.pinimg.com/736x/4a/28/74/4a287411a8e1e5bf29605a9f8d356efb.jpg',
      },
    ],
  },
  {
    id: 'cat12',
    name: 'Бытовая техника',
    image:
      'https://avatars.mds.yandex.net/get-altay/10933525/2a0000018a614f7489d2b67002f44e273110/XXL_height',
    subcategories: [
      {
        id: 'subcat25',
        name: 'Кухонная техника',
        image:
          'https://avatars.mds.yandex.net/i?id=fec9a99d71e5e59cc38169feaf60508fcc7f62e0-12911696-images-thumbs&n=13',
      },
      {
        id: 'subcat26',
        name: 'Пылесосы',
        image:
          'https://avatars.mds.yandex.net/i?id=aef1f39ecb4d1cef7b5dac91c2f195b1a0ae8bff-10415036-images-thumbs&n=13',
      },
    ],
  },
  {
    id: 'cat13',
    name: 'Украшения',
    image:
      'https://www.hunt-dogs.ru/wp-content/uploads/2023/12/xbfndnghhhkjkgh.jpg',
    subcategories: [
      {
        id: 'subcat27',
        name: 'Ожерелья',
        image:
          'https://avatars.mds.yandex.net/i?id=15de74dd755d9d5d8f1e002a70615dad_l-5278354-images-thumbs&n=13',
      },
      {
        id: 'subcat28',
        name: 'Кольца',
        image:
          'https://e7.pngegg.com/pngimages/476/136/png-clipart-wedding-planner-countdown-marriage-wedding-holidays-ring.png',
      },
    ],
  },
  {
    id: 'cat14',
    name: 'Сувениры',
    image:
      'https://avatars.mds.yandex.net/i?id=e44a7f7d320ea01f8ad1c8f6e51f1f49_l-5317815-images-thumbs&n=13',
    subcategories: [
      {
        id: 'subcat29',
        name: 'Магниты',
        image:
          'https://yt3.ggpht.com/a/AGF-l79IiBxhfPVBwAPriq7MECsuhi2n_V8o5l3SDA=s900-c-k-c0xffffffff-no-rj-mo',
      },
      {
        id: 'subcat30',
        name: 'Футболки',
        image:
          'https://i.pinimg.com/736x/ea/e8/b8/eae8b8d918565e37c05f604deae43fa0.jpg',
      },
    ],
  },
  {
    id: 'cat15',
    name: 'Продукты питания',
    image:
      'https://p2.zoon.ru/preview/7qH4VzAaXNTj8yGFv1-WEw/2400x1500x85/1/7/3/original_60dd93e2a87e1664fb7fb946_62684045be0e24.64439370.jpg',
    subcategories: [
      {
        id: 'subcat31',
        name: 'Фрукты',
        image:
          'https://oncology.eurodoctor.ru/files/userfiles/Moya%20papka1/frukty-0.jpg',
      },
      {
        id: 'subcat32',
        name: 'Овощи',
        image:
          'https://avatars.mds.yandex.net/i?id=263c1fb32d3e92043eae76f2dfec3dd01f05952f-12314646-images-thumbs&n=13',
      },
    ],
  },
  {
    id: 'cat16',
    name: 'Напитки',
    image:
      'https://wallpapers.com/images/hd/assorted-cold-drinks-collection-kk48szyzfk4oed55.png',
    subcategories: [
      {
        id: 'subcat33',
        name: 'Алкогольные',
        image:
          'https://avatars.mds.yandex.net/i?id=be0c04826ffc0c4e8de218408c7fa7ea_l-4821100-images-thumbs&n=13',
      },
      {
        id: 'subcat34',
        name: 'Безалкогольные',
        image:
          'https://frankfurt.apollo.olxcdn.com/v1/files/7dtvdxc1062y1-KZ/image',
      },
    ],
  },
  {
    id: 'cat17',
    name: 'Товары для животных',
    image:
      'https://roskod.ru/wp-content/uploads/2017/10/40bb6bbd0536-1024x494.jpg',
    subcategories: [
      {
        id: 'subcat35',
        name: 'Корм',
        image:
          'https://i.pinimg.com/originals/e3/c8/54/e3c854ccfbd0fac4e0dd0f2b9d38c934.jpg',
      },
      {
        id: 'subcat36',
        name: 'Аксессуары',
        image:
          'https://roskod.ru/wp-content/uploads/2017/10/40bb6bbd0536-1024x494.jpg',
      },
    ],
  },
  {
    id: 'cat18',
    name: 'Мебель',
    image:
      'https://static.tildacdn.com/tild3730-3666-4539-a466-396564346438/montage.png',
    subcategories: [
      {
        id: 'subcat37',
        name: 'Для гостиной',
        image:
          'https://mebelliga.ru/sites/default/files/1600x1200xxxxxx-b34fa2405b308380452cbabf1dd5e9ab.jpeg',
      },
      {
        id: 'subcat38',
        name: 'Для спальни',
        image:
          'https://avatars.mds.yandex.net/i?id=52528712d42a69294ade4753efd772c2_l-5213474-images-thumbs&n=13',
      },
    ],
  },
  {
    id: 'cat19',
    name: 'Инструменты',
    image:
      'https://i.pinimg.com/originals/c1/70/76/c17076a3d6257a731adeee81a172efb4.jpg',
    subcategories: [
      {
        id: 'subcat39',
        name: 'Электроинструменты',
        image:
          'https://avatars.mds.yandex.net/i?id=3a76c3a38b8733140f8908606c89f24ef9acea93-13223669-images-thumbs&n=13',
      },
      {
        id: 'subcat40',
        name: 'Ручной инструмент',
        image:
          'https://avatars.mds.yandex.net/i?id=1189b527502e045c013d464e056c50627a42ab3058df85d1-5717770-images-thumbs&n=13',
      },
    ],
  },
  {
    id: 'cat20',
    name: 'Прочее',
    image: 'https://imgholder.ru/500x500/000/fff&text=...&font=kelson&fz=500',
    subcategories: [
      {
        id: 'subcat41',
        name: 'Разное',
        image: 'https://via.placeholder.com/300/6A5ACD/FFFFFF?text=Разное',
      },
    ],
  },
];
