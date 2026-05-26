// got this object from request on url
//json is a valid js object
// const user = {
//   userId: 1,
//   id: 1,
//   title: "delectus aut autem",
//   completed: false,
// };

//requesting           // come under fetch XHR category
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// const data = {
//   userId: 1,
//   id: 1,
//   title: "delectus aut autem",
//   completed: false,
// };
// let userData;
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log("Got the data");
//     console.log(json);
//     userData = json;
//   });
// console.log(` user data is ${userData}`);       // undefined due to delay in fetch

// request method GET to get data from backend

// POST to post data on the backend

//  by js, postman, thunder client in js
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// delete // to delete data on backend

// making self get request

const dogImage = document.querySelector(".dog-image");
const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => response.json())
//     .then((json) => {
//       dogImage.src = json.message;
//     });
// });

button.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      dogImage.src = json.message;
    });
});
