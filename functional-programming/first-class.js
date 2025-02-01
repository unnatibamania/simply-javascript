// first class functions means that functions will be treated as any other variable

// example of function being treated as any other variable
const add = (a, b) => a + b;

const result = add(1, 2);

console.log(result);

// functions can be passed as arguments to other functions

const sum = (a, b) => a + b;

const sumOfSquares = (a, b) => sum(a * a, b * b);

console.log(sumOfSquares(2, 3));

// functions can be returned from other functions

const createCounter = (num) => {
  return (inner) => num + inner;
};

const funcs = [
  (person) => `I hate you ${person}`,
  (person) => `I love you ${person}`,
];

const result2 = funcs[0]("John");

console.log(result2);
