"use strict";
console.log("----calculate-discount----");

const calculateDiscount = (price, discount) => price - price * (discount / 100);

console.log(calculateDiscount(1000, 15)); // Ожидаемый вывод: 850
