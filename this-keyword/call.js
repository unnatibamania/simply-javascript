class Cat {
  constructor(name) {
    this.name = name;
  }

  meow() {
    // this keyword refers to the object that is calling the method
    console.log("meow", "name", this.name);
  }
}

const cat = new Cat("Tom");
cat.meow();

const assignFunc = cat.meow;

// this will throw error because this keyword refers to the global object
// assignFunc();

assignFunc.call(cat.meow);

// Object example

const obj = {
  name: "John",
  age: 20,
  getAge: function () {
    return `My age is ${this.age}`;
  },
};

const secondObj = {
  name: "Jane",
  age: 30,
};

console.log(obj.getAge.call(secondObj));
