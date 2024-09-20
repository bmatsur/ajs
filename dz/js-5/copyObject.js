"use strict";
console.log("-----------copyObject-----------");

const copyObject = (copyFrom) => {
  return JSON.parse(JSON.stringify(copyFrom));
};

const original = { name: "Alice", age: 30 };
const copy = copyObject(original);

console.log(copy);
// Ожидаемый вывод: { name: "Alice", age: 30 }

console.log(original === copy);
// Ожидаемый вывод: false (копия не является той же самой ссылкой)
