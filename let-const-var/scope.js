let age = 10;

// first thing it does is it checks if the variable is already defined in the global scope, if it is, it will use the value of the global variable
function outer() {
    // let age = 20;

    // but if I change age variabe value
    age = 'sheep';
    console.log(age);

    function inner() {
        // if i change age variable value then it will change the value of the outer function and the global variable
         age = 30;
        console.log(age);
    }

    inner();
}

outer();

console.log(age);