"use strict";

console.log(" ");
console.log("---- unary-operation ----");

function unaryPlus(num) {
  return +num; //  в число
}

function unaryMinus(num) {
  return -num; // Меняет знак
}

function increment(num, isPrefix) {
  if (isPrefix) {
    return ++num; // Префксный инкремент (значение увеличивается перед возвратом)
  } else {
    return num++; // Постфиксный инкремент (значение увеличивается после возврата)
  }
}

function decrement(num, isPrefix) {
  if (isPrefix) {
    return --num; // Префиксный декремент
  } else {
    return num--; // Постфиксный декремент
  }
}

let x = 5;

// Унарный плюс
console.log(+x); //  5
console.log(+"10"); //  10

// Унарный минус
console.log(-x); //  -5

// Инкремент
console.log(x++); //  5, а затем x станет 6
console.log(++x); //  7, x уже равен 7

// Декремент
console.log(x--); //  7, а затем x станет 6
console.log(x); //6

console.log(--x); //  5, x уже равен 5
