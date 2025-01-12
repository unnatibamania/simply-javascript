// const fs = require('fs');



const lotsOfPromises = [
    fetch('https://jsonplaceholder.typicode.com/posts/1'),
    fetch('https://jsonplaceholder.typicode.com/posts/2'),
    fetch('https://jsonplaceholder.typicode.com/posts/3'),
    fetch('https://jsonplaceholder.typicode.com/posts/4'),
    fetch('https://jsonplaceholder.typicode.com/posts/5'),
    fetch('https://jsonplacemno.com/posts/6'),
]

// 

// const promises =  Promise.all(lotsOfPromises).then(res=>console.log(res));

//  all settled
//  It waits for all promises to settle, whether they are fulfilled or rejected.
const allSettled = await Promise.allSettled(lotsOfPromises).then(res=>console.log(res));

// promise.race
//  It waits for the first promise to settle or reject and returns its result.
const race = await Promise.race(lotsOfPromises).then(res=>console.log(res)).catch(err=>console.log(err));

// promise.any
//  It waits for the first promise to fulfill and returns its result.
const any = await Promise.any(lotsOfPromises).then(res=>console.log(res)).catch(err=>console.log(err));


// Creating your own promise

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello, world!');
    }, 1000);
});

myPromise.then(res=>console.log(res));



