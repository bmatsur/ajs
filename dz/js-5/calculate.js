'use strict';
console.log('-----------calculate-----------')


const calculator = {
    num1: Number,
    num2: Number,
    
    setNumbers: function(a,b) {
        this.num1 = a; 
        this.num2 = b;
    },

    add: function() {return this.num1 + this.num2;},
    subtract: function() {return this.num1 - this.num2;},
    multiply: function() {return this.num1 * this.num2;},
    divide: function() {return this.num1 / this.num2;},

};


calculator.setNumbers(10, 5);
console.log(calculator.add());      // Ожидаемый вывод: 15
console.log(calculator.subtract()); // Ожидаемый вывод: 5
console.log(calculator.multiply()); // Ожидаемый вывод: 50
console.log(calculator.divide());   // Ожидаемый вывод: 2