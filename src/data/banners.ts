import {Banner} from './types';

export const banners: Banner[] = [
  {
    id: '1',
    image:
      'https://i.pinimg.com/736x/bc/a7/8b/bca78bfd9aeba00c2759d442afd9d6a9.jpg',
    title: 'Ипотека 5% на 20 лет!',
    description:
      'Вы можете оформить ипотеку с рекордно низкой ставкой прямо сейчас.',
    actionText: 'Оформить ипотеку',
    link: '/mortgage',
  },
  {
    id: '2',
    image:
      'https://img.freepik.com/premium-vector/modern-red-orange-banner-background_181182-12868.jpg?size=626&ext=jpg',
    title: 'До 17% на вклад!',
    description:
      'Откройте вклад с высокой доходностью и зарабатывайте на процентах.',
    actionText: 'Подробнее',
    link: '/deposits',
  },
  {
    id: '3',
    image: 'https://www.uni-los-astra.ru/wp-content/uploads/Fon-oranzh.png',
    title: 'Кредит наличными до 10 млн тенге',
    description: 'Оформите кредит за 5 минут без посещения банка!',
    actionText: 'Подать заявку',
    link: '/credits',
  },
  {
    id: '4',
    image: 'https://i.ytimg.com/vi/eLLpKKBZb8Q/maxresdefault.jpg',
    title: 'Оплачивайте покупки выгодно!',
    description:
      'Рассрочка до 12 месяцев без переплат в партнерских магазинах.',
    actionText: 'Выбрать магазин',
    link: '/installments',
  },
];
