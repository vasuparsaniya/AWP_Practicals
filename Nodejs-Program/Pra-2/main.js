const calculator = require('./calculator');

console.log(calculator.add(2, 3));    
console.log(calculator.sub(5, 3));    
console.log(calculator.mul(2, 3));    
console.log(calculator.div(6, 3));    
console.log(calculator.div(6, 0));    // Throws an error: Division by zero is not allowed.