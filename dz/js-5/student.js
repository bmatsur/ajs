"use strict";
console.log("-----------student-----------");

const student = {
  name: "Khusrav Pahlavon",
  age: 20,
  major: "Security",
  gpa: 3.8,
};

// array of keys
const keys = Object.keys(student);

console.log("Количество свойств:", keys.length);

//iterate on keys and print values
for (let key of keys) {
  console.log(key + ": " + student[key]);
}
