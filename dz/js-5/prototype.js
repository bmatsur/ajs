"use strict";
console.log("-----------prototype-----------");

function Person3(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person3.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Создаем объект person1
const person1 = new Person3("Farhod", "Shirin");

//employee, наследующий от person1
const employee3 = Object.create(person1);
employee3.position = "Программист";

console.log(person1.getFullName()); // Иван Иванов
console.log(employee3.position); // Программист
console.log(employee3.getFullName()); // Farhod Shirin (наследованный метод)
