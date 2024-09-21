"use strict";
console.log("-----------8-----------");

//Create an oject using Object()
// const createUser = function (name, age) {
//   const newUser = new Object();
//   newUser.name = name;
//   newUser.age = age;

//   return newUser;
// };

//Create an object using Literals
function createUser(name, age) {
  const newUser = {
    name,
    age,
  };

  return newUser;
}

console.log(createUser("Alice", 30));
// Ожидаемый вывод: { name: "Alice", age: 30 }

const newUser2 = createUser("Ali", 22);
console.log(newUser2);
