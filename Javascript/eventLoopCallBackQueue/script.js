console.log("hi 1");

function hello() {
  console.log("hello");
}
for (let i = 1; i <= 4; i++) {
  console.log(i);
}

// debugger;
// hello();
setTimeout(() => {
  console.log("stars are far");         // asynchronous code
}, 8000); 
// setTime out sent to -> web Api -> callback queue -> call stack 
// set time out functions are not directly sent to call stack
// these are sent to callback queue by web APIs
// event loop waits to complete the synchronous code i.e is call stack empty and is there any function in callback queue
// and added callback queue's functions to call stack one by one
console.log("hi 2");
