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




// Функция для проверки, является ли строка палиндромом.

// имя_функции('топот'); // Результат: true - строка является палиндромом
// имя_функции('ДовОд'); // Результат: true - несмотря на разный регистр, тоже палиндром
// имя_функции('Кекс');  // Результат: false - это не палиндром

function checkPalindrome(phrase){
  const prePhrase = [];
  let newPhrase;
  for (let i = 0; i <= phrase.length-1; i++){

    prePhrase.unshift(phrase[i]);
    newPhrase = prePhrase.join('');
  }
  if(phrase.toLowerCase() === newPhrase.toLowerCase()){
    console.log(newPhrase);
    console.log('палиндром');
    return true;
  }else{
    console.log(newPhrase);
    console.log('НЕпалиндром');
    return false;
  }
}



// Функция  извлекает содержащиеся в ней цифры от 0 до 9 и
// возвращает их в виде целого положительного числа.
// Если в строке нет ни одной цифры, функция должна вернуть NaN:

// имя_функции('2023 год');            // Результат: число 2023
// имя_функции('ECMAScript 2022');     // Результат: число 2022
// имя_функции('1 кефир, 0.5 батона'); // Результат: число 105
// имя_функции('а я томат');           // Результат: NaN

// Мое решение
function checkNum(frase){
  let strin = '';
  for(let i = 0; i <= frase.length - 1; i++){
    if(!isNaN(frase[i]) && frase[i] !== ' '){
      strin += frase[i];
    }
  }
  return strin;

}



//Решение из Лайва.
function checkNum(frase){
  let strin = '';
  for(let i = 0; i <= frase.length - 1; i++){
    if(!Number.isNaN(parseInt(frase[i], 10))){
      strin += frase[i];
    }
  }
  return parseInt(strin, 10);
}





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
   let realAdd = limit - string.length;

   if(realAdd <= 0){
    console.log(string);
    return string;

   }

   console.log('опера', add.slice(0, realAdd % add.length) + add.repeat(realAdd / add.length)+string);
   return  add.slice(0, realAdd % add.length) + add.repeat(realAdd / add.length)+string;
}































