let animal = 'dog';

function outer() {
    // let animal = 'cat';
    console.log(animal);
}

function inner() {
    let animal = 'sheep';
    outer();
    // console.log(animal);
}


inner();


// In other programming languages, the value of the variable is determined at the time of the function call, but in JavaScript, the value of the variable is determined at the time of the function declaration.

