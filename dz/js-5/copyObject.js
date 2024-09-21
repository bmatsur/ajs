"use strict";
console.log("-----------copyObject-----------");

const copyObject = (copyFrom) => {
  return JSON.parse(JSON.stringify(copyFrom));
};

const original = { name: "Alice", age: 30 };
const copy = copyObject(original);

console.log("original:", original);

console.log("copy:", copy);
// Ожидаемый вывод: { name: "Alice", age: 30 }

console.log(original === copy);
// Ожидаемый вывод: false (копия не является той же самой ссылкой)

const copyObject2 = (copyFrom) => {
  return { ...copyFrom }; //spread is NOT creating a link
};
const copy2 = copyObject2(original);
copy2.hobby = "football";
console.log("usig spread copy2:", copy2);
