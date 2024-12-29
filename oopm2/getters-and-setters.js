class Circle {
    constructor(radius){
        this._radius = radius;
    }

    get radius(){
        return this._radius;
    }

    set radius(value){
        this._radius = value;
    }
}

const circle = new Circle(10);
console.log(circle.radius);
circle.radius = 20;
console.log(circle.radius);


class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }
}

const user = new User('John', 20);
console.log(user.name);
user.name = 'Jane';
console.log(user.name);