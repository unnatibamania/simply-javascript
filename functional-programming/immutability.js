const person = {
  name: "John",
  age: 20,
};

console.log(person);

// first way to avoid mutability is to use the spread operator

const person2 = { ...person };

person2.age = 21;

console.log(person2);

// second way is Object.freeze

const person3 = Object.freeze(person);

person3.age = 22;

console.log(person3);

// third way is to use the Object.assign method

const person4 = Object.assign({}, person);

person4.age = 23;

console.log(person4);

// create function to do spread operator

const spread = (obj) => ({ ...obj });

const person5 = spread(person);

console.log(person5);
