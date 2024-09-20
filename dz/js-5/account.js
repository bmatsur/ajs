"use strict";
console.log("-----------account-----------");

const account = {
  owner: "Alif Mushtari",
  balance: 1000,
  deposit: function (amountDeposited) {
    this.balance += amountDeposited;
    console.log(`Депозит: ${amountDeposited}. Текущий баланс: ${this.balance}`);
  },
  withdraw: function (amoutWithdrawed) {
    if (amoutWithdrawed > this.balance) {
      console.log(`Недостаточно средств для снятия: ${amoutWithdrawed}`);
    } else {
      console.log(`Снято: ${amoutWithdrawed}. Текущий баланс: ${this.balance}`);
      return (this.balance -= amoutWithdrawed);
    }
  },
  getBalance: function () {
    return this.balance;
  },
  getOwner: function () {
    return this.owner;
  },
};

console.log(`Владелец аккаунта: ${account.getOwner()}`);
// Ожидаемый вывод: Владелец аккаунта: Alice

account.deposit(500); // Ожидаемый вывод: Депозит: 500. Текущий баланс: 1500
account.withdraw(200); // Ожидаемый вывод: Снято: 200. Текущий баланс: 1300
account.withdraw(2000); // Ожидаемый вывод: Недостаточно средств для снятия: 2000
console.log(account.getBalance()); // Ожидаемый вывод: 1300
