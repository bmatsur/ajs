"use strict";
console.log(" ");
console.log("-----------mobile-operator-----------");

class MobileOperator {
  constructor() {
    this.clients = [];
  }

  addClient(name, balance) {
    this.clients.push({ name, balance });
  }

  //сортирует клиентов по величине баланса в порядке возрастания.
  sortClientsByBalance() {
    return console.log(this.clients.toSorted((a, b) => a.balance - b.balance));
  }

  //выводит список клиентов с балансом в обратном порядке.
  reverseClientList() {
    return console.log(this.clients.toReversed());
  }

  //возвращает массив строк с информацией о клиентах и их балансах.
  getClientList() {
    return console.log(
      this.clients.map(
        (client) => `$name: ${client.name}, balance${client.balance}`
      )
    );
  }
}

// Пример использования класса MobileOperator
const mobileOperator = new MobileOperator();

// Добавляем клиентов
mobileOperator.addClient("Иван", 100);
mobileOperator.addClient("Анна", 200);
mobileOperator.addClient("Сергей", 50);
mobileOperator.addClient("Мария", 150);

console.log("// Сортируем клиентов по балансу");
mobileOperator.sortClientsByBalance();

console.log("// Выводим клиентов в обратном порядке");
mobileOperator.reverseClientList();

console.log("// Получаем список клиентов");
mobileOperator.getClientList();
