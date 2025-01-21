let origin = "sheep";

console.log(origin);
console.log(this);
console.log(this.origin);

// this will give 'localhost', you know why? because origin is a global variable, and this is the global object, and window is the global object in the browser.
// console.log(window.origin);


// let and const are block scoped, var is function scoped
{
    let animal = 'dog';
    var sport = 'football';
    console.log(animal);
}

console.log(sport);

// this will give an error because animal is not defined and let is block scoped
// console.log(animal);




