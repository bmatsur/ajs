"use strict";

console.log("---- Arithmetic Operators ----");
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Деление на ноль, попробуйте еще раз";
  } else {
    return a / b;
  }
}

let num1 = 10;
let num2 = 5;

console.log("Сложение:", add(num1, num2));
console.log("Вычитание:", subtract(num1, num2));
console.log("Умножение:", multiply(num1, num2));
console.log("Деление:", divide(num1, num2));

// Деление на ноль
console.log("Деление на ноль:", divide(num1, 0));
