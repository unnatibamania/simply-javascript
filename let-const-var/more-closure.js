function getValue(exponent){
    return function(base){
        return Math.pow(base, exponent);
    }
}

const square = getValue(2);
const cube = getValue(3);

console.log(square(3));
console.log(cube(3));