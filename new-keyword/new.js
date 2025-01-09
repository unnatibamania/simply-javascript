// this is an example of a constructor function

function Dog(name) {
    this.name = name;
    // return this;
}
// this will throw undefined because we are not using the new keyword (this refers to the global object)
console.log(Dog('Rex'));

// this will return the Dog object because we are using the new keyword (this refers to the new object)
console.log(new Dog('Rex'));


class User {
    constructor(name) {
        this.name = name;
        this.age = 20;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}


// function User(name, age) {
//     this.name = name;
//     this.age = 20;
    
//     this.getName = function() {
//         return this.name;
//     }

//     this.getAge = function() {
//         return this.age;
//     }
// }

const john = new User('John', 20);
const jane = new User('Jane', 21);

// applying this.methodName === jane.methodName will return true because the method is the same for both objects
// this is because the method is defined on the prototype of the User class
console.log(john.getName === jane.getName);

// console.log(john.getName());
// console.log(jane.getName());
