"use strict";
console.log("----add-product----");

const products = [
  { name: "Laptop", price: 999.99, quantity: 5 },
  { name: "Phone", price: 499.99, quantity: 10 },
];

function addProduct(product, products) {
  // Создаем копию массива, чтобы не изменять оригинальный массив
  const newProducts = [...products];

  // Добавляем новый товар в копию массива
  newProducts.push(product);

  // Возвращаем новый массив с добавленным товаром
  return newProducts;
}

const newProduct = { name: "Tablet", price: 299.99, quantity: 7 };

const updatedProducts = addProduct(newProduct, products);
console.log(updatedProducts);
