// function makeRequest() {}
// console.log(makeRequest()); // returns undefined

// throw keyword
// function greet(){
//     console.log("hello");
//     // throw "greet over";                         // throws error
//     throw new Error("error while executing code");              // returns constructor
//     console.log("namanste");
// }
// greet();

// resolved promise
// async function makeRequest() {
//     return "hello";
// }
// console.log(makeRequest());         // returns resolved promise having promiseResult as undefined until returned

// rejected promise
// async function makeRequest(){
//     throw new Error("error");           // returns rejected promise
// }
// console.log(makeRequest());
// debugger;
// async function makeRequest() {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   //   const resProm = fetch(url);
//   //   resProm
//   //     .then((res) => res.json())
//   //     .then((res) => {
//   //       console.log(res);
//   //     });
//   // using await keyword
// await keyword saves promiseResult in variable
//   const res = await fetch(url).then(()=>{console.log("joker")}); // Thread in browser waits here
//  and main thread goes on to complete remaining code
//   console.log(res);
//   console.log("hello");
// }
// makeRequest();

// // debugger;
// setTimeout(() => {
//   console.log("hi");
// }, 0);

// for (let i = 0; i <= 3; i++) {
//   console.log(i);
// }

// async function makeAsyncRequest() {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   const res = await fetch(url);
//   console.log(res);
//   console.log("hello");
// }
// function add() {
//   return 12 + 3;
// }

// function makeSyncRequest() {
//   const xhr = new XMLHttpRequest();
//   xhr.addEventListener("load", () => {
//     console.log(xhr);
//   });
//   xhr.open("GET", "https://dog.ceo/api/breeds/image/random",false);
//   xhr.send();

// }

// // console.log(makeAsyncRequest());
// // console.log(add());

async function makeAsyncRequest() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
  //     (res) => res.json(),
  //   );
  const data = await (await fetch(url)).json();
  console.log(data);
  console.log("hello");
}
function add() {
  return 12 + 3;
}

makeAsyncRequest();
// console.log("Hello");
// await can be used only inside async
// except type of script.js ="module";
// all the variables assigned in module scop

// const url = "https://jsonplaceholder.typicode.com/posts";
// const data = await (await fetch(url)).json();           // outside async due to module type
// console.log(data);                                       // and our complete module file is paused
// console.log("hello");

async function makeAsyncRequest() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const data = await (await fetch(url)).json();
  return data;
}

makeAsyncRequest().then(console.log);

