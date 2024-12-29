class Shape {
    constructor(color, name) {
        this.name = name;
        this.color = color;
        
    }
    
    getName(){
        return this.name;
    }
}


class Circle extends Shape {
    constructor(color, name, radius) {
        // super is used to call the constructor of the parent class
        super(color, name);
        this.radius = radius;
    }

    getArea(){
        // here this keyword refers to the instance of the class
        console.log(this);
        return Math.PI * this.radius * this.radius;
    }

    static getColor(){
        // here this keyword refers to the class itself
        console.log(this);
        return 'yay from color';
    }
}

const circle = new Circle('red', 'circle', 10);
console.log(Circle.getColor());
console.log(circle.getArea());