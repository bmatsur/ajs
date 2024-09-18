"use strict";
console.log("----calculate----");

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Ошибка: деление на ноль";
      } else {
        return num1 / num2;
      }
    default:
      return "Ошибка: некорректный оператор";
  }
};

console.log(calculate(10, 5, "+")); // Ожидаемый вывод: 15
console.log(calculate(10, 5, "-")); // Ожидаемый вывод: 5
console.log(calculate(10, 5, "*")); // Ожидаемый вывод: 50
console.log(calculate(10, 5, "/")); // Ожидаемый вывод: 2
console.log(calculate(10, 0, "/")); // Ожидаемый вывод: 'Ошибка: деление на ноль'
console.log(calculate(10, 5, "%")); // Ожидаемый вывод: 'Ошибка: некорректный оператор'
