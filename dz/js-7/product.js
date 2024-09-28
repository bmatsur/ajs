"use strict";
console.log(" ");
console.log("-----------product-----------");

class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
  //` (название товара), `price` (цена), `category` (категория товара).

  getDetails() {
    return console.log(
      `Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`
    );
  }
}

class Electronics extends Product {
  constructor(name, price, warranty) {
    super(name, price, "Electronics");
    this.warranty = warranty;
  }

  getDetails() {
    return `${super.getDetails()}, warranty:${this.warranty}`;
  }
}

class Clothing extends Product {
  constructor(name, price, size) {
    super(name, price, "Clothing");
    this.size = size;
  }

  getDetails() {
    return `${super.getDetails()}, size: ${this.size}`;
  }
}

class Book extends Product {
  constructor(name, price, author) {
    super(name, price, "Book");
    this.author = author;
  }

  getDetails() {
    return `${super.getDetails()}, Author: ${this.author}`;
  }
}

class Store {
  constructor() {
    this.products = [];
  }

  //` — добавляет новый товар в список товаров.
  addProduct(product) {
    this.products.push(product);
  }

  //` — выводит список всех товаров с помощью метода `forEach`.
  listProducts() {
    this.products.forEach((product) => product.getDetails());
  }

  //` — возвращает товары определенной категории с помощью метода `filter`.
  filterByCategory(category) {
    return console.log(
      this.products.filter((product) => product.category === category)
    );
  }

  //` — создает новый массив с информацией о каждом товаре (например, только названия и цены) с помощью метода `map`.
  mapProducts() {
    return this.products.map((product) => `${product.name}, ${product.price}`);
  }
}

// Пример использования классов
const store = new Store();

// Добавляем товары
store.addProduct(new Electronics("Ноутбук", 1500, 2));
store.addProduct(new Clothing("Футболка", 20, "M"));
store.addProduct(new Book("JavaScript для начинающих", 30, "Джон Доу"));

// Вывод всех товаров
store.listProducts();

// Фильтрация товаров по категории
store.filterByCategory("Electronics");

// Создание нового массива с названиями
console.log("\nНазвания и цены товаров:");
const productInfo = store.mapProducts();
console.log(productInfo);
