// Imperative Programming

const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

// functional programming

const sum2 = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum2);
