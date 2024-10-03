"use strict";
console.log(" ");
console.log("-----------containsWord-----------");

function containsWord(str) {
  const regex = /\b(cat|dog|bird)\b/;
  return regex.test(str);
}

// Примеры строк
const strings2 = [
  "I have a cat.", // содержит "cat"
  "The dog is barking.", // содержит "dog"
  "A bird is flying.", // содержит "bird"
  "There is a fish.", // не содержит ни одно из указанных слов
  "The catalog is huge.", // не содержит полное слово "cat", только часть
  "", // пустая строка
];

// Проверка строк
strings2.forEach((s) => {
  console.log(`Строка: "${s}", Содержит одно из слов: ${containsWord(s)}`);
});
