const sheep = {
    name: 'Sheep 1',
    species: 'Indian',
    color: 'White',
    age: 2,
    eat: function () {
        console.log(`${this.name} is eating grass`);
    },
    
}

// every key in an object is a string
const key = 'name';
sheep[true] = 'Sheep 2';

console.log({
    log: sheep['true'],
    name: sheep[key]
})



class Triangle {
    // always return undefined nothing gets returned  
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    getArea() {
        return this.base * this.height / 2;
    }
}

const triangle = new Triangle();
triangle.base = 10;
triangle.height = 20;
console.log(triangle.getArea());