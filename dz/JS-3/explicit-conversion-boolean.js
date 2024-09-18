"use strict";

console.log(" ");
console.log("---- explicit-conversion-boolean ----");

function convertToBoolean(value) {
  return Boolean(value);
}

function convertToBooleanWithDoubleNegation(value) {
  return !!value;
}

console.log(convertToBoolean("")); // false (пустая строка)
console.log(convertToBoolean("Hello")); // true (непустая строка)
console.log(convertToBoolean(0)); // false (ноль)
console.log(convertToBoolean(42)); // true (любое число, кроме нуля)
console.log(convertToBoolean(null)); // false (null)
console.log(convertToBoolean(undefined)); // false (undefined)
console.log(convertToBoolean(true)); // true (логическое true)
console.log(convertToBoolean(false)); // false (логическое false)
console.log(convertToBoolean({})); // true (пустой объект)
console.log(convertToBoolean([])); // true (пустой массив)
