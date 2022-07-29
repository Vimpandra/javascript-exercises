const add = function(a, b) {
  return a + b;	
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(arr) {
  let result = arr.reduce((total, current) => total + current, 0);
  return result;
};

const multiply = function(arr) {
  let result = arr.reduce((total, current) => total * current, 1);
  return result;
};

const power = function(a, b) {
  let result = a;
  for (let i = 1; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(a) {
  if (a === 0) return 1;
  else if (a === 1) return 1;
  else {
    let result = a;
    for (let i = a; i > 1; i--) {
      result *= (i - 1);
    }
    return result;
  }	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
