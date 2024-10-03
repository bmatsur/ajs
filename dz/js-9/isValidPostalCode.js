"use strict";
console.log(" ");
console.log("-----------isValidPostalCode-----------");

function isValidPostalCode(postalCode) {
    const regex = /^\d{5}(-\d{4})?$/g;
    return regex.test(postalCode);
 }
 
 // Примеры почтовых индексов
 const postalCodes = [
     '12345',      // корректный формат
     '12345-6789', // корректный формат
     '1234',       // некорректный формат
     '123456',     // некорректный формат
     '12345-678',  // некорректный формат
     'ABCDE',      // некорректный формат
 ];
 
 // Проверка почтовых индексов
 postalCodes.forEach(code => {
     console.log(`Почтовый индекс: "${code}", Соответствует формату: ${isValidPostalCode(code)}`);
 });
 