"use strict";
console.log(" ");
console.log("-----------bank-queue-----------");

class BankQueue {
  constructor() {
    this.queue = [];
  }

  addClient(name) {
    this.queue.push(name);
    console.log(`${name} dobavlen v ochered`);
  }

  //` — удаляет клиента из начала очереди и возвращает его имя, имитируя обслуживание клиента.
  serveClient() {
    if (this.queue.length === 0) {
      console.log(`ochered pusta`);
    } else {
      const served = this.queue.shift();
      console.log(`Obslujivaem ${served}`);
    }
  }

  getQueue() {
    if (this.queue.length === 0) {
      console.log(`ochered pusta`);
    } else {
      this.queue.forEach((element) => {
        console.log(`V ocheredi ${element}`);
      });
    }
  }
  //` — возвращает текущий список имен клиентов, ожидающих в очереди.
}

// Пример использования класса BankQueue
const bankQueue = new BankQueue();

// Добавляем клиентов в очередь
console.log(`********* adding to the queue`);
bankQueue.addClient("Иван");
bankQueue.addClient("Анна");
bankQueue.addClient("Сергей");

// Обслуживаем клиента
console.log("********** customer supporting");
bankQueue.serveClient();

// Показываем текущую очередь
console.log("********** current queue");
bankQueue.getQueue();

console.log("********** Добавляем еще одного клиента");
bankQueue.addClient("Мария");

console.log("********** Обслуживаем клиента");
bankQueue.serveClient();

console.log("********** Показываем текущую очередь");
bankQueue.getQueue();
