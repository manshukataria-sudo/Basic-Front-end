const image = document.querySelector("img");
const button = document.querySelector("button");
const blockingBtn = document.querySelector(".blocking-btn");

// synchronous code that uses the main thread of js
// asynchronous code that uses the web API

// button.addEventListener("click", () => {
//   debugger;
//   const xhr = new XMLHttpRequest(); // asynchronous by default browser is fetching data js main thread is running synchronous code
//   // xhr.responseType = "json";
//   console.log(xhr.response);
//   xhr.addEventListener("load", () => {
//     // image.src = xhr.response.message;
//     image.src = JSON.parse(xhr.response).message;
//     console.log("load's response",xhr.response);
//   });

//   // xhr.open("GET", "https://dog.ceo/api/breeds/image/random", false); // third arg false i.e asynchronous false
//   xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
//   xhr.send();
//   console.log("after send",xhr.response);
//   console.log(xhr);
// });

// setTimeout(()=>{
//   console.log("Hello World");
// },3000);

// main thread blocking
// alert("Hello");

// console.log(Date.now());    // gives milliseconds since 1 january 1970 midnight

// blockingBtn.addEventListener("click", () => {
//   let startTime = Date.now();
//   let currentTime = startTime;
//   while (startTime + 2000 > currentTime) {
//     // main thread blocked for 2 seconds
//     currentTime = Date.now();
//   }
// });














// let startTime = Date.now();
// let currentTime = Date.now();
// while (startTime + 3000 > currentTime) {
//   currentTime = Date.now();
// }
