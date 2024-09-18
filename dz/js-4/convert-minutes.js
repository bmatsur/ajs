"use strict";
console.log("----convert-minutes----");

const convertMinutes = (minutes) => {
  const remaindedMins = minutes % 60;
  const hours = Math.floor(minutes / 60); // или можно так (minutes - remaindedMins) / 60;

  return `${hours} часов ${remaindedMins} минту`;
};

console.log(convertMinutes(130)); // Ожидаемый вывод: "2 часов 10 минут"
