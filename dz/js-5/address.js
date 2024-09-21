"use strict";
console.log("-----------address-----------");

let user = {
  username: "Tsb Mushtari",
  email: "tsb.mushtari@tsb.tj",
  age: 25,
};

const address = {
  city: "Dushanbe",
  state: "Tajikistan",
  postalCode: "734000",
};

//using spread
user = {
  ...user,
  ...address,
};

const userProfile = {};
Object.assign(userProfile, user, address);

console.log("Object.assign:", userProfile);
console.log("spread", user);
