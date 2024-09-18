"use strict";
console.log("----generate-id----");

const generateId = () => {
  const random = Math.floor(Math.random() * 10000); //0-9999
  return `id-${random}`;
};
// Примеры использования функции
console.log(generateId()); // Ожидаемый вывод: "id-1234" (или любое другое случайное число)
console.log(generateId()); // Ожидаемый вывод: "id-5678" (или любое другое случайное число)
