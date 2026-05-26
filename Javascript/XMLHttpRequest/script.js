const image = document.querySelector("img");
const button = document.querySelector("button");

// function sayHi(){
//     console.log("Hii");
// }
// sayHi();        // functions return value is undefined
// let object = new sayHi()     // when called using new, it returns object
// console.log(object);

// button.addEventListener("click", () => {
//   //   fetch("https://dog.ceo/api/breeds/image/random")
//   //     .then((response) => response.json())
//   //     .then((json) => {
//   //       image.src = json.message;
//   //     });
//   //   xhr.open("GET", "https://dog.ceo/api/breeds/image/random");

//   const xhr = new XMLHttpRequest();
//   xhr.responseType = "json";        // to get response as json object
//   console.log(xhr);

// //   xhr.addEventListener("load", () => {
// //     // console.log(xhr);
// //     // console.log(xhr.response);// data received in JSON format in string
// //     // console.log(JSON.parse(xhr.response));  // to recieve as object
// //   });

//   xhr.open("GET", "https://httpbin.org/anything");
//   xhr.send();
// });

button.addEventListener("click", () => {
  debugger;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    image.src = xhr.response.message;
  });
});
