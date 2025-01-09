// 

const nums = [1, 2, 3, 4, 5];

// this can't be done because Math.max is a static method and it doesn't accept an array as an argument
// console.log(Math.max(nums));

// this can be done because we are using the call method to pass the array as an argument
console.log(Math.max.call(null, ...nums));


