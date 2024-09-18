"use strict";

console.log(" ");
console.log("---- str-methods-2 ----");

function findSubstring(str, substring) {
  return str.indexOf(substring); // Возвращает индекс первого вхождения, или -1 если не найдено
}

function extractSubstring(str, start, end) {
  return str.substring(start, end);
}

function containsSubstring(str, substring) {
  return str.includes(substring);
}

// fорматирование строки (пример с шаблонами)
function formatString(template, ...values) {
  return template.replace(/\{(\d+)\}/g, (match, index) => values[index]);
}

let stroka = "Hello, World!";

// Поиск
console.log(findSubstring(stroka, "World")); // 7

// Извлечение
console.log(extractSubstring(stroka, 7, 12)); //  "World"

// Проверка наличия
console.log(containsSubstring(stroka, "hello")); //: false (регистр важен)

// форматирование строки
const name = "Парвиз";
const age = 30;
const formattedString = formatString(
  "Меня зовут {0} и мне {1} лет.",
  name,
  age
);
console.log(formattedString);
