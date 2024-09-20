"use strict";
console.log("-----------deleteProperty-----------");

function deleteProperty(anObject, propertyToDelete) {
  delete anObject[propertyToDelete];
  return anObject;
}

const person = { name: "Bob", age: 40, city: "San Francisco" };
console.log(deleteProperty(person, "city"));
// Ожидаемый вывод: { name: "Bob", age: 40 }
