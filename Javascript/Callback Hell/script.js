function makeHttpRequest(method, url, callBack) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    callBack(xhr.response);
  });
  xhr.open(method, url);
  xhr.send();
}

makeHttpRequest("GET", "https://dummyjson.com/users", (usersData) => {
  console.log(usersData);
  makeHttpRequest(
    "GET",
    `https://dummyjson.com/posts/user/${usersData.users[0].id}`,
    (postData) => {
      console.log(postData);
      makeHttpRequest(
        "GET",
        `https://dummyjson.com/comments/post/${postData.posts[0].id}`,
        (commentsData) => {
          console.log(commentsData.comments[1]);
          console.log(commentsData.comments[1].user);
          console.log(commentsData.comments[1].user.id);
          makeHttpRequest(
            "GET",
            `https://dummyjson.com/users/${commentsData.comments[1].user.id}`,
            (userData) => {
              console.log(userData);
            },
          );
        },
      );
    },
  );
});

// makeHttpRequest("GET", "https://dummyjson.com/posts/user/1");
// https://httpbin.org/delay/10
