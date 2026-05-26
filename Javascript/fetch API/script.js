// fetch("url") returns promise
// console.log(fetch);

// requesting by fetch
// console.log(fetch("https://dummyjson.com/products")); //return promise
// when promise is resolved, promiseResult is passed as argument to .then(data)
// response object is returned it have body and header
// sometime header came earlier than body, our promise resolved and .then() executed
// which doesn't included our requested data
// fetch("https://dummyjson.com/products").then((res) => {
//   console.log(res);
// });

// console.log(fetch("https://dummyjson.com/products").then((res) => {
//   // console.log(res);
//   // res.json().then((data) => {
//   //   console.log(data);
//   // });
//   return res.json();                  // returns promise having promiseResult as our requested data
// }))
// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())              // implicit return of arrow function
//   .then((res) => {
//     console.log(res);
//   });

// various request method
//GET
// fetch("https://dummyjson.com/products", {
//   method: "GET",
// }).then((res) => {
//   console.log(res);
//   return res.json();
// }).then((res) => {
//   console.log(res);
// })

//POST
// any req method is valid as there is custom method in thunder client
// fetch("https://dummyjson.com/products/add", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "laptop",
//   }),
// })
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//   });

// function makeHttpRequest(method, url, callBack) {
//   const xhr = new XMLHttpRequest();
//   xhr.responseType = "json";
//   xhr.addEventListener("load", () => {
//     callBack(xhr.response);
//   });
//   xhr.open(method, url);
//   xhr.send();
// }

// makeHttpRequest("GET", "https://dummyjson.com/users", (usersData) => {
//   console.log(usersData);
//   makeHttpRequest(
//     "GET",
//     `https://dummyjson.com/posts/user/${usersData.users[0].id}`,
//     (postData) => {
//       console.log(postData);
//       makeHttpRequest(
//         "GET",
//         `https://dummyjson.com/comments/post/${postData.posts[0].id}`,
//         (commentsData) => {
//           console.log(commentsData.comments[1]);
//           console.log(commentsData.comments[1].user);
//           console.log(commentsData.comments[1].user.id);
//           makeHttpRequest(
//             "GET",
//             `https://dummyjson.com/users/${commentsData.comments[1].user.id}`,
//             (userData) => {
//               console.log(userData);
//             },
//           );
//         },
//       );
//     },
//   );
// });

fetch("https://dummyjson.com/users", {
  method: "GET",
})
  .then((res) => res.json())
  .then((userData) => {
    console.log(userData);
    return fetch(
      `https://dummyjson.com/posts/user/${userData.users[0].id}`,
    ).then((res) => res.json());
  })
  .then((postData) => {
    console.log(postData);
    return fetch(
      `https://dummyjson.com/comments/post/${postData.posts[0].id}`,
    ).then((res) => res.json());
  })
  .then((commentsData) => {
    console.log(commentsData);
    return fetch(
      `https://dummyjson.com/users/${commentsData.comments[1].user.id}`,
    ).then((res) => res.json());
  })
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });
