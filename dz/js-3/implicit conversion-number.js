"use strict";

console.log(" ");
console.log("---- implicit conversion-number ----");

// Сложение числа и строки
let result = 42 + " лет"; // Результат: "42 лет" (строка)
console.log(typeof result); // string

// Вычитание числа из строки
result = "10" - 5; // 5 (число)
console.log(typeof result); // number

// Умножение числа на булево значение
result = 3 * true; // 3 (число)
console.log(typeof result); // number
