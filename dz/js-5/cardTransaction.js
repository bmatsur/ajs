"use strict";
console.log("-----------cardTransaction-----------");

// Пример использования объекта и методов
let currentBalance = 500;

const cardTransaction = {
  amount: 0,
  transactionType: null,
  transactionStatus: null,

  updateTransaction: function (amount, type, status) {
    currentBalance = currentBalance - amount;
    this.transactionType = type;
    this.transactionStatus = status;

    console.log(
      `Транзакция обновлена: purchase на сумму ${amount}, статус: ${status}`
    );
  },

  resetTransaction: function () {
    this.amount = 0;
    this.transactionType = null;
    this.transactionStatus = null;
  },
  getTotal: function (balance) {
    return balance;
  },

  displayTransaction: function () {
    if (!this.amount && !this.transactionStatus) {
      console.log("Транзакция не была выполнена");
    } else {
      console.log(
        `Транзакция: purchase на сумму ${this.amount}, статус: ${this.transactionStatus}`
      );
    }
  },
};

// Обновление транзакции
cardTransaction.updateTransaction(100, "purchase", "completed");
cardTransaction.displayTransaction();
// Ожидаемый вывод:
// Транзакция обновлена: purchase на сумму 100, статус: completed
// Транзакция: purchase на сумму 100, статус: completed

currentBalance = cardTransaction.getTotal(currentBalance);
console.log(`Новый баланс: $${currentBalance}`); // Ожидаемый вывод: Новый баланс: $400

// Сброс транзакции
cardTransaction.resetTransaction();
cardTransaction.displayTransaction(); // Ожидаемый вывод: Транзакция не была выполнена.
