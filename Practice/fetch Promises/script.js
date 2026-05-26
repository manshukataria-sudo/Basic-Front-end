// const list = document.querySelector(".title");

// fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//     res.forEach((element) => {
//       const title = document.createElement("li");
//       title.innerText = element.title;
//       list.insertAdjacentElement("beforeend", title);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const card = document.querySelector(".card");
// const x = card.cloneNode();
// console.log(x);

fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    res.forEach((element) => {
      const card = document.createElement("div");
      const userName = document.createElement("p");
      userName.innerText = `Name : ${element.name}`;
      const userEmail = document.createElement("p");
      userEmail.innerText = `Email : ${element.email}`;
      const userCity = document.createElement("p");
      userCity.innerText = `City : ${element.address.city}`;
      card.insertAdjacentElement("beforeend", userName);
      card.insertAdjacentElement("beforeend", userEmail);
      card.insertAdjacentElement("beforeend", userCity);
      card.classList.add("card");
      document.body.insertAdjacentElement("beforeend", card);
    });
  });
