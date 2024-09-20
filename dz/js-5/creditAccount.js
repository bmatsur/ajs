"use strict";
console.log("-----------8-----------");

const creditAccount = {
  owner: "Ban Mushtari",
  balance: 0,
  creditLimit: 5000,
  apr: 0.15,
  deposit: function (amount) {
    this.balance += amount;
    console.log(`Пополнение на: ${amount}. Текущий баланс: ${this.balance}`);
  },
  withdraw: function (amount) {
    if (amount <= this.balance + this.creditLimit) {
      this.balance -= amount;
      console.log(`Снято: ${amount}. Текущий баланс: ${this.balance}`);
    } else {
      console.log("Credit limit exceeded");
    }
  },
  applyInterest: function () {
    if (this.balance < 0) {
      this.balance += this.balance * this.apr;
      console.log(
        `Ожидаемый вывод: Начислены проценты: ${this.apr}. Текущий баланс: ${this.balance}`
      );
    }
  },
  getBalance: function () {
    console.log(`Balance: ${this.balance}`);
  },
  getDebt: function () {
    if (this.balance < 0) {
      return this.balance * -1;
    }
  },
};

creditAccount.deposit(1000); // Ожидаемый вывод: Пополнение на: 1000. Текущий баланс: 1000
creditAccount.withdraw(2000); // Ожидаемый вывод: Снято: 2000. Текущий баланс: -1000
creditAccount.applyInterest(); // Ожидаемый вывод: Начислены проценты: 15. Текущий баланс: -1015
console.log(creditAccount.getDebt()); // Ожидаемый вывод: 1015
