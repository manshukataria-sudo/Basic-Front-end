// keyboard event can be added on any element and that element should be in focus to work keyboard event on that

// const heading = document.querySelector("h1");
// const input = document.querySelector("input");

// heading.addEventListener("keypress", (e) => {
//   console.log(e.key);
//   console.log("hello world");
// });

// key press
// input.addEventListener("keypress",()=>{
//     console.log("tata bye bye");
// })

// window.addEventListener('keypress',(e)=>{
//     console.log(e);
//     console.log(`Key Code is : ${e.code}`);             // key code remains same even if caps lock in on
//     console.log(`Key is : ${e.key}`);                   // even in different language code remains same
// })

// window.addEventListener('keypress',(e)=>{
//     console.log(e);
//     console.log(`Key Code is : ${e.code}`);
//     console.log(`Key is : ${e.key}`);
// })

// keyup
// window.addEventListener("keyup",(e)=>{
//     console.log(e);
//     console.log(`Key Code is : ${e.code}`);             // also triggered by shift caps alt keys
//     console.log(`Key is : ${e.key}`);
// })

// keydown
window.addEventListener("keydown", (e) => {
  console.log(e);
  console.log(`Key Code is : ${e.code}`);                   // also triggered by shift caps alt keys
  console.log(`Key is : ${e.key}`);
});
