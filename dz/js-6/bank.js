"use strict";
console.log("-----------bank-----------");

class BankAccount {
  #balance = 0;
  #transactionHistory = [];

  deposit(amount) {
    this.#balance += amount;
    this.#transactionHistory.push(`Deposited $${amount}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(`Insufficient balance`);
    } else {
      this.#balance -= amount;
      this.#transactionHistory.push(`Withdrawn $${amount}`);
    }
  }

  getBalance() {
    return this.#balance;
  }

  audit() {
    this.#transactionHistory.forEach((element) => {
      console.log(element);
    });
  }
}

// Пример использования класса и методов
const myAccount = new BankAccount();

// Внесение денег на счёт
myAccount.deposit(1000);
// Ожидаемый вывод: На счёт внесено: $1000. Текущий баланс: $1000

// Снятие денег со счёта
myAccount.withdraw(300);
// Ожидаемый вывод: Со счёта снято: $300. Текущий баланс: $700

// Получение текущего баланса
console.log(`Текущий баланс: $${myAccount.getBalance()}`);
// Ожидаемый вывод: Текущий баланс: $700

// Проведение аудита
myAccount.audit();
// Ожидаемый вывод:
// История транзакций:
// 1. DEPOSIT: $1000
// 2. WITHDRAW: $300
