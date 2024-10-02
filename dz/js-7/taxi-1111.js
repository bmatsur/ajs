"use strict";
console.log(" ");
console.log("-----------taxi-1111-----------");


class TaxiOperator {
    constructor() {
        this.orders = []
    }

    addOrder(order) {
        const splitOrder = order.split(', ');
        this.orders.push(splitOrder);
        console.log(`Added: ${order}`);
    }

    //удаляет заказ по индексу из массива заказов с использованием метода `splice()`.
    removeOrder(index) {
        console.log(`Deleted: ${this.orders[index]}`);
        this.orders.pop(index);
    }

    //возвращает последние `count` заказов, не изменяя исходный массив заказов, с помощью метода `slice()`.
    getLastOrders(count) {
        const getOrders = this.orders.slice(Math.max(this.orders.length - count, 0));;
        console.log(`last ${count} orders: `, getOrders)
    }
    
    //возвращает текущий список заказов.
    getOrders() {
        this.orders.forEach(order => {
            console.log(order);
        });
    }
}


// Пример использования класса TaxiOperator
const taxiOperator = new TaxiOperator();

// Добавляем заказы
taxiOperator.addOrder('Заказ от Анвар, маршрут: А -> В');
taxiOperator.addOrder('Заказ от Насиба, маршрут: С -> D');
taxiOperator.addOrder('Заказ от Шахром, маршрут: Е -> F');


// Удаляем второй заказ (индекс 1)
taxiOperator.removeOrder(1);

// Получаем последние 2 заказа
taxiOperator.getLastOrders(2);

// Получаем текущий список заказов
taxiOperator.getOrders();