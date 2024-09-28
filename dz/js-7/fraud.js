"use strict";
console.log(" ");
console.log("-----------fraud-----------");

class FraudDetector {
  constructor() {
    this.transactions = [];
  }
  //` (массив), которое хранит каждую транзакцию как объект с такими свойствами:
  //amount` (число) — сумма транзакции.
  //type` (строка) — тип транзакции (`"credit"` или `"debit"`).
  //isFlagged` (логический тип) — помечена ли транзакция как подозрительная.

  //` для добавления новой транзакции в массив `transactions`.
  addTransaction(amount, type) {
    if (amount > 0) {
      const transaction = {
        amount,
        type,
        isFlagged: false,
      };

      this.transactions.push(transaction);
      console.log(`${amount} ${type} transaction added`);
    }
  }

  //проверяет каждую транзакцию в массиве `transactions` и, если сумма превышает `limit`, помечает транзакцию как подозрительную, устанавливая `isFlagged` в `true`.
  flagLargeTransactions(limit) {
    this.transactions.forEach((transaction) => {
      if (transaction.amount > limit) {
        transaction.isFlagged = true;
      }
    });
  }

  //который возвращает массив всех транзакций, помеченных как подозрительные.
  getFlaggedTransactions() {
    return this.transactions.filter((transaction) => transaction.isFlagged);
  }
}

// Пример использования класса FraudDetector
const fraudDetector = new FraudDetector();

// Добавляем несколько транзакций
fraudDetector.addTransaction(500, "debit");
fraudDetector.addTransaction(1500, "credit");
fraudDetector.addTransaction(2500, "debit");

// Помечаем транзакции, которые превышают лимит 1000
fraudDetector.flagLargeTransactions(1000);

// Получаем помеченные транзакции
const flagged = fraudDetector.getFlaggedTransactions();
console.log(flagged);
// Ожидаемый результат: Транзакции с суммами 1500 и 2500 должны быть помечены как подозрительные.
