"use strict";
console.log("-----------hasProperty-----------");

const hasProperty = (objectToEnumerate, key) => {
  if (key in objectToEnumerate) {
    return true;
  } else {
    return false;
  }
};

const car2 = { brand: "Toyota", model: "Camry", year: 2021 };

console.log(hasProperty(car2, "model"));
// Ожидаемый вывод: true

console.log(hasProperty(car2, "color"));
// Ожидаемый вывод: false
