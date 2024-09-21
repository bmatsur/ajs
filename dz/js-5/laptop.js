"use strict";
console.log("-----------laptop-----------");

const laptop = {
  brand: "Lenovo",
  model: "Shittop",
  year: "2008",
  price: 100,
};

for (let key in laptop) {
  console.log(key, ":", laptop[`${key}`]);
}
