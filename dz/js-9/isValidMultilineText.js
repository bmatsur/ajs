"use strict";
console.log(" ");
console.log("-----------isValidMultilineText-----------");


function isValidMultilineText(text) {
    const regex = /^#.*\.$/m;
    return text.split('\n').every(line => 
        line.trim() === '' || regex.test(line.trim())
    );
}

// Пример многострочного текста
const text1 = `
# Заголовок 1.
# Заголовок 2.
# Заголовок 3.
`;

const text2 = `
# Заголовок 1
# Заголовок 2.
Заголовок 3.
`;
