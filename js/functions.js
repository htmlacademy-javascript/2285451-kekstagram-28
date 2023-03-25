// Функция для проверки длины строки

// имя_функции('проверяемая строка', 20); // Результат: true - строка проходит по длине
// имя_функции('проверяемая строка', 18); // Результат: true - строка проходит по длине
// имя_функции('проверяемая строка', 10); // Результат: false — строка не проходит

function checkString (phrase, limit){
  if(phrase.length <= limit){
    return true;
  }
  return false;
}
checkString ('проверяемая строка', 10);


// Функция для проверки, является ли строка палиндромом.

// имя_функции('топот'); // Результат: true - строка является палиндромом
// имя_функции('ДовОд'); // Результат: true - несмотря на разный регистр, тоже палиндром
// имя_функции('Кекс');  // Результат: false - это не палиндром

function checkPalindrome(phrase){
  const prePhrase = [];
  let newPhrase;
  for (let i = 0; i <= phrase.length - 1; i++){

    prePhrase.unshift(phrase[i]);
    newPhrase = prePhrase.join('');
  }
  if(phrase.toLowerCase() === newPhrase.toLowerCase()){
    return true;
  }else{
    return false;
  }
}
checkPalindrome('ДовОд');


// Функция  извлекает содержащиеся в ней цифры от 0 до 9 и
// возвращает их в виде целого положительного числа.
// Если в строке нет ни одной цифры, функция должна вернуть NaN:

// имя_функции('2023 год');            // Результат: число 2023
// имя_функции('ECMAScript 2022');     // Результат: число 2022
// имя_функции('1 кефир, 0.5 батона'); // Результат: число 105
// имя_функции('а я томат');           // Результат: NaN

// Мое решение
function checkNum(frase){
  let numbers = '';
  for(let i = 0; i <= frase.length - 1; i++){
    if(!isNaN(frase[i]) && frase[i] !== ' '){
      numbers += frase[i];
    }
  }
  if(numbers === ''){
    return NaN;
  }
  return numbers;
}
checkNum('а я томат');


//Решение из Лайва.
function checkNumber(frase){
  let numbers = '';
  for(let i = 0; i <= frase.length - 1; i++){
    if(!Number.isNaN(parseInt(frase[i], 10))){
      numbers += frase[i];
    }
  }
  return parseInt(numbers, 10);
}
checkNumber('ECMAScript 2022');

// // Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами
// // — и возвращает исходную строку, дополненную указанными символами до заданной длины.
// Символы добавляются в начало строки. Если исходная строка превышает заданную длину,
// она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.


// Эта функция нам пригодится для формирования адресов файлов. Примеры её использования:

// // Добавочный символ использован один раз
// имя_функции('1', 2, '0');      // '01'

// // Добавочный символ использован три раза
// имя_функции('1', 4, '0');      // '0001'

// // Добавочные символы обрезаны с конца
// имя_функции('q', 4, 'werty');  // 'werq'

// // Добавочные символы использованы полтора раза
// имя_функции('q', 4, 'we');     // 'wweq'

// // Добавочные символы не использованы, исходная строка не изменена
// имя_функции('qwerty', 4, '0'); // 'qwerty'


//  Решение из Лайва

function addsSimbol (string, limit, add){
  const realAdd = limit - string.length;

  if(realAdd <= 0){
    return string;
  }
  return add.slice(0, realAdd % add.length) + add.repeat(realAdd / add.length) + string;
}

addsSimbol ('qwerty', 4, '0');


// const MAX_HASHTAG_COUNT = 5;
// const VALID_SYMBOLS = /^#[a-za-яё0-9]{1,19}$/i;
// const TASK_ERROR_TEXT = 'Не правильно заполнены хэштэги';

// const formPopup = document.querySelector('.img-upload__overlay');
// const uploadImgButton = document.querySelector('#upload-file');
// const formPopupClose = document.querySelector('#upload-cancel');
// const FormAddImage = document.querySelector('#upload-select-image');
// const inputTextHashtags = formPopup.querySelector('.text__hashtags');
// const inputTextDescription = formPopup.querySelector('.text__description');
// const hashtagField = document.querySelector('.text__hashtags');

// const pristine = new Pristine(FormAddImage, {
//   classTo: 'img-upload__field-wrapper',
//   errorTextParent: 'img-upload__field-wrapper',
//   errorTextClass: 'img-upload__field-wrapper__eror'
// });

// const onEscapeFormClose = (evt) => {
//   if (evt.key === 'Escape') {
//     if(inputTextHashtags === document.activeElement || inputTextDescription === document.activeElement) {
//       evt.stopPropagation();
//     } else {
//       evt.preventDefault();
//       formPopup.classList.add('hidden');
//       document.body.classList.remove('modal-open');
//       uploadImgButton.value = '';
//       FormAddImage.reset();
//       document.removeEventListener('keydown', onEscapeFormClose);
//       formPopupClose.removeEventListener('click', onPopupFormClose);
//     }
//   }
// };
// const onPopupFormClose = () => {
//   formPopup.classList.add('hidden');
//   document.body.classList.remove('modal-open');
//   uploadImgButton.value = '';
//   formPopup.reset();
//   formPopupClose.addEventListener('click', onPopupFormClose);
//   document.addEventListener('keydown', onEscapeFormClose);
// };

// const onInputUpload = () => {
//   formPopup.classList.remove('hidden');
//   document.body.classList.add('modal-open');
// };

// const isValidTag = (tag) => VALID_SYMBOLS.test(tag);

// const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

// const hasUniqueTags = (tags) => {
//   const lowerCaseTags = (tags).map((tag) => tag.toLowerCase());
//   return lowerCaseTags.length === new Set(lowerCaseTags).size;
// };

// const validateTags = (value) => {
//   const tags = value
//     .trim()
//     .splint(' ')
//     .filter((tag) => tag.trim().length);
//   return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
// };

// pristine.addValidator (
//   hashtagField,
//   validateTags,
//   TASK_ERROR_TEXT
// );

// const onFormSubmit = (evt) => {
//   evt.preventDefault();
//   pristine.validate();
// };

// FormAddImage.addEventListener('submit', onFormSubmit);
// uploadImgButton.addEventListener('change', onInputUpload);
// formPopupClose.addEventListener('click', onPopupFormClose);
// document.addEventListener('keydown', onEscapeFormClose);
