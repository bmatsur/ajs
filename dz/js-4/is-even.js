"use strict";
console.log("----is-even----");

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isEven(10)); // Ожидаемый вывод: true
console.log(isEven(7)); // Ожидаемый вывод: false
