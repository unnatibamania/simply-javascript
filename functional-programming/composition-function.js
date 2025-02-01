function compose(f, g) {
  return (x) => f(g(x));
}

const add = (x) => x + 1;
const multiply = (x) => x * 2;

const addAndMultiply = compose(multiply, add);

console.log(addAndMultiply(5));

// VERY TR?UE COMPOSITION

function lowerCase(input) {
  return input.toLowerCase();
}

function split(input) {
  return input.split("");
}

function joinWithDash(input) {
  return input.join("-");
}

console.log(joinWithDash(split(lowerCase("Hello World"))));
