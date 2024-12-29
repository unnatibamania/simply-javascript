class User {
     
    // private h ye
    #uniqueId;

    // this indicates that user cannot access this outside class
    _rollno;


    constructor(name, age){
        this.name = name;
        this.age = age;
        this.#uniqueId = Math.random();
    }

    get uniqueId(){
        return this.#uniqueId;
    }

    get name(){
        return this._name;
    }


    // private method
    #privateMethod(){
        return this.#uniqueId;
    }

    set name(value){
        this._name = value;
    }


    callPrivateMethod(){
        return this.#privateMethod();
    }
}

const user = new User('John', 20);
console.log(user.name);
// you can't access private property
console.log(user.uniqueId);

// you can't access private method
// console.log(user.#privateMethod());
// you can access private method using public method
console.log(user.callPrivateMethod());