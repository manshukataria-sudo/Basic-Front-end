// debugger;
// setTimeout(() => {
//   console.log("hello World");
// }, 0);
// promise is an OBJECT   // three promise states "pending" "resolved" "rejected"
// debugger

const resolveButton = document.querySelector(".resolve-btn");
const rejectButton = document.querySelector(".reject-btn");

// const p = new Promise((resolve, reject) => {
//   //   resolve({ name: "manshu", enroll: 48 });
//   //   reject("promise rejected");
//   //   setTimeout(() => {
//   //     resolve("resolve");
//   //   }, 4000);
//   resolveButton.addEventListener("click", () => {
//     resolve("Promise resolved by button"); // data sent to "then()" method and can be recieved
//     // console.log(p);
//   });
//   rejectButton.addEventListener("click", () => {
//     reject("Promise rejected by button"); // msg sent as error in catch()
//   });
//   //   resolve("Promise resolved");
// });

// console.log(p);
// resolveButton.click();
// then() catch() methods
// when promise is resolved then() method is called

// setTimeout(() => {
//   console.log("hello");
// }, 0);

// p.then((data) => {
//   // arg passed by resolved recieved as data
//   console.log(data);
// }).catch((error) => {
//   console.log(error);
// });
//   .finally(() => {
//     console.log("Kaisa hai bidu");
//   });

// for(let i=0;i<7;i++){
//     console.log(i);
// }
// promise setteled means promise is either resolved or rejected
// microtask queue has more priority than callback queue/task queue

// const p2 = new Promise((resolve, reject) => {
//     resolve("p2 resolved");
// });
// const p3 = new Promise((resolve, reject) => {
//     resolve("p2 resolved");
// });
// const p4 = new Promise((resolve, reject) => {
//     resolve("p2 resolved");
// });

// setTimeout(()=>{
//     console.log("hello")
// },0);

// p2.then((data)=>{
//     console.log(data);
// }).catch((data)=>{
//     console.log(data);
// })
// setTimeout(()=>{
//     console.log("hello")
// },0);
// p3.then((data)=>{
//     console.log(data);
// }).catch((data)=>{
//     console.log(data);
// })
// setTimeout(()=>{
//     console.log("hello")
// },0);
// p4.then((data)=>{
//     console.log(data);
// }).catch((data)=>{
//     console.log(data);
// })
// for(let i=0;i<3;i++){
//     console.log(i);
// }

// .then() return promise
// const p2 = p.then((data)=>{
//     console.log(data);
//     return 100;
// })
// // console.log(p2);
// p.then((data) => {
//   console.log(data);
//   return 101;
// }).then((data)=>{
//     console.log(data);
//     return 102;
// }).then((data)=>{
//     console.log(data);
// }).catch((data)=>{
//     console.log(data);
// })
debugger;
const vaada = new Promise((resolve, reject) => {
  resolveButton.addEventListener("click", () => {
    resolve("promise resolved");
  });
  rejectButton.addEventListener("click", () => {
    reject("promise rejected");
  });
  resolve("auto resolve");
});

// console.log(vaada);

// const vaada2 = vaada.then((data) => {
//   console.log(data);
//   return "Kaisa hai bidu";
// });
// console.log(vaada2);

vaada
  .then((data) => {
    console.log(data);
    return 1;
  })
  .then((data) => {
    console.log(data);
    return 2;
  })
  .then((data) => {
    console.log(data);
    return 3;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });
