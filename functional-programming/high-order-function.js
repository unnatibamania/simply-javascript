// high order functions are functions that can take other functions as arguments and/or return a function as a result

const sum = (a, b) => a + b;

const sumOfSquares = (a, b) => sum(a * a, b * b);

console.log(sumOfSquares(2, 3));
