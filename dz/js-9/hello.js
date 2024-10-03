"use strict";
console.log(" ");
console.log("-----------hello-----------");

function checkHelloWorld(str) {
  const regex = /Hello?= World/;
  return regex.test(str);
}

// Примеры строк
const strings3 = [
  "Hello World!", // соответствует
  "Hello, World!", // ne соответствует
  "Hello there, World!", // ne соответствует
  "Hi there, World!", // не соответствует
  "Hello to the World.", // не соответствует
  "World says Hello.", // не соответствует
];

// Проверка строк
strings3.forEach((s) => {
  console.log(`Строка: "${s}", Соответствует условиям: ${checkHelloWorld(s)}`);
});
