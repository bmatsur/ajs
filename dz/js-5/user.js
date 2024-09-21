"use strict";
console.log("-----------user-----------");

const user4 = {
  username: "Firdavsi Panj",
  email: "fpanj@example.com",
  age: 30,
  country: "Tajikistan",
};

// Деструктуризация с указанием значений по умолчанию
const { username, email, age, country = "США" } = user4;

console.log(username);
console.log(email);
console.log(age);
console.log(country);
