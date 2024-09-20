'use strict';
console.log('-----------cardTransaction-----------')


const cardTransaction = {

    amount — сумма транзакции.
    transactionType — тип транзакции (может быть purchase или refund).
    transactionStatus — статус транзакции (может быть pending, completed или failed).

    updateTransaction(amount, type, status) — обновляет информацию о транзакции.
    resetTransaction() — сбрасывает информацию о транзакции.
    getTotal(balance) — возвращает новый баланс карты с учётом текущей транзакции.
    displayTransaction() — выводит информацию о текущей транзакции.

};



// Пример использования объекта и методов
let currentBalance = 500;

// Обновление транзакции
cardTransaction.updateTransaction(100, 'purchase', 'completed');
cardTransaction.displayTransaction();
// Ожидаемый вывод:
// Транзакция обновлена: purchase на сумму 100, статус: completed
// Транзакция: purchase на сумму 100, статус: completed

currentBalance = cardTransaction.getTotal(currentBalance);
console.log(`Новый баланс: $${currentBalance}`); // Ожидаемый вывод: Новый баланс: $400

// Сброс транзакции
cardTransaction.resetTransaction();
cardTransaction.displayTransaction(); // Ожидаемый вывод: Транзакция не была выполнена.

