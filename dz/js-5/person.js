"use strict";
console.log("-----------person-----------");

const person2 = {
  name: "Tahmina Samangan",
  age: 2024 - 1000,
};

// Object.defineProperty(person2, "age", { enumerable: false });
// person2.age = 2024 - 992;
// console.log(Object.getOwnPropertyDescriptor(person2, "age"));

// Object.defineProperty(person2, "age", { configurable: false });
// person2.age = 2024 - 993;
// console.log(Object.getOwnPropertyDescriptor(person2, "age"));

// Object.defineProperty(person2, "age", { writable: false });
// person2.age = 2024 - 991;
// console.log(Object.getOwnPropertyDescriptor(person2, "age"));

//or Change using 1 command
Object.defineProperty(person2, "age", {
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(person2, "age"));
