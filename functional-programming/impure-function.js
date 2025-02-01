// impure function are functions that have side effects, they modify external variables of the code

let value = 10;

const impureFunction = (square) => {
  value = square * square;
  return value;
};

console.log(result);
