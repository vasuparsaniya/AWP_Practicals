// function add(a, b) {
//   return a + b;
// }

// function sub(a,b) {
//   return a - b;
// }

// function mul(a,b) {
//   return a * b;
// }

// function div(a,b) {
//   if (b === 0) {
//     throw new Error('Division by zero is not allowed.');
//   }
//   return a / b;
// }

// module.exports = {add, sub, mul, div}




// other way is 
// calculator.js

module.exports = {
  add: function(a, b) {
    return a + b;
  },

  sub: function(a, b) {
    return a - b;
  },

  mul: function(a, b) {
    return a * b;
  },

  div: function(a, b) {
    if (b === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return a / b;
  }
};
