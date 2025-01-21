// IIFE is a JavaScript function that is executed immediately after it is defined.
// Its better to use because scoping is better
// origin is global scope variable but we defined it in the function scope
// hence it is not accessible outside the function
// we can use it to avoid global scope pollution

(function printColor() {
    var original = 'blue';
    console.log(original);
})();

// printColor();