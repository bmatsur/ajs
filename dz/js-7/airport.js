"use strict";
console.log(" ");
console.log("-----------airport-----------");

class Airport {
  constructor() {
    this.flights = [];
  }

  //добавляет рейс с номером `flightNumber`, пунктом назначения `destination` и статусом `status` (например, `"on time"`, `"delayed"`).
  addFlight(flightNumber, destination, status) {
    const flight = {
      flightNumber,
      destination,
      status,
    };

    this.flights.push(flight);
  }

  //находит и возвращает объект рейса по его номеру.
  findFlight(flightNumber) {
    return console.log(
      this.flights.find((flight) => flight.flightNumber === flightNumber)
    );
  }

  //возвращает массив рейсов, которые имеют статус `"delayed"`.
  filterDelayedFlights() {
    return console.log(
      this.flights.filter((flight) => flight.status === "delayed")
    );
  }

  //возвращает массив строк, где каждый элемент содержит информацию о рейсе в формате: `Рейс {flightNumber} летит в {destination} - статус: {status}`.
  getFlightInfo() {
    return console.log(
      this.flights.map(
        (fligth) =>
          `Flight ${fligth.flightNumber}, destination: ${fligth.destination}, status ${fligth.status}`
      )
    );
  }
}

// Пример использования класса Airport
const airport = new Airport();

// Добавляем рейсы
airport.addFlight("SU123", "Москва", "on time");
airport.addFlight("AF456", "Париж", "delayed");
airport.addFlight("LH789", "Берлин", "on time");
airport.addFlight("BA101", "Лондон", "delayed");

// Ищем конкретный рейс
airport.findFlight("AF456");

// Фильтруем задержанные рейсы
airport.filterDelayedFlights();

// Получаем информацию обо всех рейсах
airport.getFlightInfo();
