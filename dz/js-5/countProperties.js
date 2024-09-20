"use strict";
console.log("-----------countProperties-----------");

const countProperties = (count) => {
  return Object.keys(count).length;
};

const user1 = { name: "Alice", age: 30, city: "New York" };

console.log(countProperties(user1));
// Ожидаемый вывод: 3
