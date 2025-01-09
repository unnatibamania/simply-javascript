class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

User.prototype.multiply = function(a, b) {
    return a * b;
}

const john = new User('John', 20);
const jane = new User('Jane', 21);

console.log(john.getName === jane.getName);
console.log(john.multiply(2, 3));
console.log(john.multiply === jane.multiply);
console.log(john.__proto__);


// Prototype is used to share methods between objects
function Dog() {
    this.name = 'Dog';
    this.age = 10;
    // creates separate method for each instance
    this.bark = function(exclamation) {
        return 'woof' + exclamation;
    }
}

// Prototype is used to share methods between objects
Dog.prototype.shout = function(exclamation) {
    return 'meow' + exclamation;
}

const dog = new Dog();
console.log(dog.bark('!'));

const dog2 = new Dog();
console.log(dog2.bark('!'));

console.log(dog.bark === dog2.bark);

console.log(dog.shout === dog2.shout);

// PROTOTYPE CHAIN

const GrandParent = {
    name: 'GrandParent'
}

const Parent = {
    __proto__: GrandParent,
    name: 'Parent'
}

const Child = {
    __proto__: Parent,
    name: 'Child'
}

console.log(Child.name);
console.log(Child.name);