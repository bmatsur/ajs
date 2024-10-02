"use strict";
console.log(" ");
console.log("-----------сash-register-----------");

class CashRegister {
  constructor() {
    this.items = [];
  }

  //**Методы**:
  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  removeItem(name) {
    this.items = this.items.filter((item) => item.name !== name);
  }

  calculateTotal() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  getReceipt() {
    const itemsList = this.items
      .map(
        (item) =>
          `${item.quantity} x ${item.name} - $${item.price * item.quantity}`
      )
      .join("\n");
    const total = this.calculateTotal();
    return `
    ---- Receipt ----
    ${itemsList}
    -----------------
    Sum: $${total}
    `;
  }
}

// Пример использования класса CashRegister
const cashRegister = new CashRegister();

// Добавляем товары
cashRegister.addItem("Яблоки", 1.5, 3);
cashRegister.addItem("Бананы", 1.2, 5);
cashRegister.addItem("Апельсины", 2.0, 2);

// Удаляем товар
cashRegister.removeItem("Бананы");

// Выводим чек
console.log(cashRegister.getReceipt());
