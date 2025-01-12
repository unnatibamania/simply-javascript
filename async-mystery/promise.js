// Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Promise has 3 states: pending, fulfilled, rejected

// Pending: no value yet
// Fulfilled: value is available
// Rejected: error is available

const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL)
  .then((response) => {
    console.log("response", response);
    return response.json();
  })
  .then((data) =>
    console.log(
      "data",
      data.map((post) => post.title)
    )
  )
  .catch((error) => console.error(error));

//  CALL BACK HELL

// fetch(`${URL}/1`)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     fetch(`${URL}/2`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         fetch(`${URL}/3`)
//           .then((response) => response.json())
//           .then((data) => {
//             console.log(data);
//           });
//       });
//   })
//   .catch((error) => console.error(error));

// SOLUTION: PROMISE CHAINING

fetch(`${URL}/1`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return fetch(`${URL}/2`);
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return fetch(`${URL}/3`);
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));


