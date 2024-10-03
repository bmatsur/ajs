"use strict";
console.log(" ");
console.log("-----------isAlphanumeric-----------");


function containsOnlyLettersAndDigits(str) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(str);
}


// Примеры строк
const strings5 = [
    'Hello123',  
    'Hello 123',
    'Hello!',   
    '12345',     
    'abcABC',    
    '',         
];


// Проверка строк
strings5.forEach(s => {
    console.log(`Строка: "${s}", Содержит только буквы и цифры: ${containsOnlyLettersAndDigits(s)}`);
});
