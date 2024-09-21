"use strict";
console.log("-----------update-product-----------");

function updateProductQuantity(product, newQuantity) {
  const updatedProduct = { ...product };

  updatedProduct.quantity = newQuantity;

  return updatedProduct;
}

const product4 = { name: "Laptop", price: 999.99, quantity: 5 };
console.log(updateProductQuantity(product4, 10));
// Ожидаемый вывод: { name: "Laptop", price: 999.99, quantity: 10 }
