"use strict";
// JS-4

//Optional chaining

const cities = {
  msk: {
    temp: {
      celsius: 25,
    },
  },
  spb: {},
};

console.log("Optional Chaining"); //check if the property exists
const city = "spb";
console.log(cities[city]?.temp?.celsius);
