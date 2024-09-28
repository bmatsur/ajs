"use strict";
console.log(" ");
console.log("-----------sales-report-----------");

class SalesReport {
  constructor() {
    this.sales = new Set();
  }

  addSale(propertyId, saleDate) {
    const sale = `${propertyId} - ${saleDate}`;

    if (this.sales.has(sale)) {
      console.log(
        `Запись о продаже квартиры с ID ${propertyId} на дату ${saleDate} уже существует.`
      );
    } else {
      this.sales.add(sale);
      console.log(
        `Продажа квартиры с ID ${propertyId} на дату ${saleDate} добавлена.`
      );
    }
  }

  removeSale(propertyId, saleDate) {
    const sale = `${propertyId} - ${saleDate}`;
    if (this.sales.has(sale)) {
      this.sales.delete(sale);
      console.log(
        `Продажа квартиры с ID ${propertyId} на дату ${saleDate} удалена.`
      );
    } else {
      console.log(
        `Запись о продаже квартиры с ID ${propertyId} на дату ${saleDate} не найдена.`
      );
    }
  }

  getAllSales() {
    return this.sales;
  }

  getSalesCount() {
    return this.sales.size;
  }
}

// Пример использования класса SalesReport
const salesReport = new SalesReport();

// Добавляем записи о продаже
salesReport.addSale("Apartment1", "2024-09-01");
salesReport.addSale("Apartment2", "2024-09-05");
salesReport.addSale("Apartment1", "2024-09-01"); // Дубликат
salesReport.addSale("Apartment3", "2024-09-10");

// Удаляем запись о продаже
salesReport.removeSale("Apartment2", "2024-09-05");

// Выводим все уникальные записи и их количество
console.log("Все уникальные записи о продаже:", salesReport.getAllSales());
console.log("Количество уникальных записей:", salesReport.getSalesCount());
