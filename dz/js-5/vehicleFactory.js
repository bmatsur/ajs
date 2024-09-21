"use strict";
console.log("-----------vehicleFactory-----------");

function VehicleFactory(type) {
  switch (type) {
    case "Car":
      return {
        type: "Car",
        wheels: 4,
        engine: "V8",
      };
    case "Bike":
      return {
        type: "Bike",
        wheels: 2,
      };
    case "Truck":
      return {
        type: "Truck",
        wheels: 8,
        loadCapacity: 10000,
      };
    default:
      throw new Error("Неизвестный тип транспортного средства");
  }
}

const myCar = VehicleFactory("Car");
const myBike = VehicleFactory("Bike");
const myTruck = VehicleFactory("Truck");

console.log(myCar);
console.log(myBike);
console.log(myTruck);
