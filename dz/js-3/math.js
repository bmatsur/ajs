"use strict";

console.log(" ");
console.log("---- math ----");

// Нахождение максимального значения в массиве
function findMax(numbers) {
  return Math.max(...numbers);
}

// Нахождение минимального значения в массиве
function findMin(numbers) {
  return Math.min(...numbers);
}

// Округление до ближайшего целого
function roundNumber(number) {
  return Math.round(number);
}

// Округление вверх
function ceilNumber(number) {
  return Math.ceil(number);
}

// Округление вниз
function floorNumber(number) {
  return Math.floor(number);
}

// Квадратный корень
function squareRoot(number) {
  return Math.sqrt(number);
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

const numbers = [3, 7, 4, 1, 9];

console.log("Максимальное значение:", findMax(numbers));
console.log("Минимальное значение:", findMin(numbers));

console.log("Округление 3.14:", roundNumber(3.14));
console.log("Округление вверх 3.14:", ceilNumber(3.14));
console.log("Округление вниз 3.14:", floorNumber(3.14));

console.log("Квадратный корень из 16:", squareRoot(16));

// Случайное число от 1 до 10 (включительно)
const randomNum = getRandomNumber(1, 11);
console.log("Случайное число:", randomNum);
