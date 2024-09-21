"use strict";
console.log("-----------shopping-----------");

let shoppingCart = {
  itemName: "",
  itemPrice: 0,
  itemQuantity: 0,

  updateItem: function (name, price, quantity) {
    this.itemName = name;
    this.itemPrice = price;
    this.itemQuantity = quantity;
    console.log(
      "Товар обновлен: " +
        name +
        ", количество: " +
        quantity +
        ", цена: $" +
        price
    );
  },

  resetItem: function () {
    this.itemName = "";
    this.itemPrice = 0;
    this.itemQuantity = 0;
  },

  //расчет общей стоимости
  getTotal: function () {
    return this.itemPrice * this.itemQuantity;
  },

  //отображениe информации о товаре
  displayCart: function () {
    if (this.itemQuantity > 0) {
      console.log(
        "Товар: " +
          this.itemName +
          ", количество: " +
          this.itemQuantity +
          ", цена: $" +
          this.itemPrice
      );
    } else {
      console.log("Корзина пуста.");
    }
  },
};

// Пример использования объекта и методов
shoppingCart.updateItem("Ноутбук", 999.99, 1);
shoppingCart.displayCart();
// Ожидаемый вывод:
// Товар обновлен: Ноутбук, количество: 1, цена: 999.99
// Товар: Ноутбук, количество: 1, цена: 999.99

console.log(`Общая стоимость: $${shoppingCart.getTotal()}`); // Ожидаемый вывод: Общая стоимость: $999.99

shoppingCart.resetItem();
shoppingCart.displayCart(); // Ожидаемый вывод: Корзина пуста.
