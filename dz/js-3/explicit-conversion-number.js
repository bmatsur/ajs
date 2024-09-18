"use strict";

console.log(" ");
console.log("---- explicit-conversion-Numbers ----");

function convertToNumber(value) {
  return Number(value);
}

function convertToInteger(value) {
  return parseInt(value);
}

function convertToFloat(value) {
  return parseFloat(value);
}

console.log(convertToNumber("42")); // 42
console.log(convertToNumber("3.14")); // 3.14
console.log(convertToNumber("abc")); // NaN (Not a Number)
console.log(convertToNumber(true)); // 1
console.log(convertToNumber(false)); // 0
console.log(convertToNumber(null)); // 0
console.log(convertToNumber(undefined)); // NaN

console.log(convertToInteger("123abc")); // 123
console.log(convertToFloat("3.14hello")); // 3.14
