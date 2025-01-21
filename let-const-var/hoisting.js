// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.


function printColor() {
    // this won't give error because of hoisting
    console.log(color);
    var color = 'blue';

    // this will give error as it is a TEMPORAL DEAD ZONE
    // TEMPORAL DEAD ZONE is the period of time between the variable declaration and the variable initialization
    // Temporal dead zone does not let us access the variable before it is initialized
    // let and const are not hoisted

    console.log(animal);
    let animal = 'dog';
}


printColor();