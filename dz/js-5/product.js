"use strict";
console.log("-----------product-----------");

const product = {
  name: "Rubber",
  price: 25,
  category: "household",
  inStock: false,
  get nameeee() {
    return this.name;
  },
};

product.price = 30;
product.inStock = true;
product.rating = 5;
deleteProperty(product, "category");

console.log(product);
