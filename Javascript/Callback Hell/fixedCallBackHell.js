function makeHttpRequest(method, url) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open(method, url);
  xhr.send();
  const promise = new Promise((resolve, reject) => {
    xhr.addEventListener("load", () => {
      resolve(xhr.response);
    });
    xhr.addEventListener("error", () => {
      reject("Invalid url");
    });
  });
  return promise;
}

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

// makeHttpRequest("GET", "https://dummyjson.com/posts/user/1");
// https://httpbin.org/delay/10

// fixing callBack Hell using promises
debugger;
makeHttpRequest("GET", "https://dummyjson.com/users")
  .then((usersData) => {
    console.log(usersData);
    return makeHttpRequest(
      "GET",
      `https://dummyjson.com/posts/user/${usersData.users[0].id}`,
    );
  })
  .then((postData) => {
    console.log(postData);
    return makeHttpRequest(
      "GET",
      `https://dummyjson.com/comment/post/${postData.posts[0].id}`,
    );
  })
//   .then((commentsData) => {
//     console.log(commentsData);
//     return makeHttpRequest(
//       "GET",
//       `https://dummyjson.com/users/${commentsData.comments[1].user.id}`,
//     );
//   })
//   .then((userData) => {
//     console.log(userData);
//   })
  .catch((error) => {
    console.log(error);
  });
