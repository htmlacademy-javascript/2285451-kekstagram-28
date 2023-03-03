import {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './util.js';

import {cardsComments} from './create-comment.js';

const DESCRIPTION_LIST = [
  'Отель',
  'Направление',
  'Пляж',
  'Бикини',
  'Суп',
  'Авто',
  'Клубника',
  'Сок',
  'Самолет',
  'Обувь',
  'Песок',
  'Ауди',
  'Овощи',
  'Суши- кот',
  'Унты',
  'Реактивный след',
  'Хор',
  'Ретро - авто',
  'Фары - тапки',
  'Двор с пальмамами',
  'Завтрак вегана',
  'Морской закат',
  'Веселый крабик',
  'Концерт',
  'Сафари',
];

const COUNT_CARDS = 25;

const COUNT_LIKES_MAX = 200;

const COUNT_LIKES_MIN = 15;

const generateUrl = createRandomIdFromRangeGenerator(1, COUNT_CARDS);

const generateId = createRandomIdFromRangeGenerator(1, COUNT_CARDS);

const createDescription = () => ({
  id: generateId(),
  url: `photos/${generateUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION_LIST),
  likes: getRandomInteger(COUNT_LIKES_MIN, COUNT_LIKES_MAX),
  comments: cardsComments(),
});

const cardsDescriotion = () => Array.from({length: COUNT_CARDS}, createDescription);

export {cardsDescriotion};

