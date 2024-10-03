"use strict";
console.log(" ");
console.log("-----------isNumeric-----------");


function containsOnlyDigits(str) {
    const regex = /^[0-9]+$/
    return regex.test(str)
 }
 
 // Примеры строк
 const strings6 = [
     '123456',    
     '123abc',    
     '12.34',    
     '000123',    
     '',     
 ];
 
 // Проверка строк
 strings6.forEach(s => {
     console.log(`Строка: "${s}", Содержит только цифры: ${containsOnlyDigits(s)}`);
 });