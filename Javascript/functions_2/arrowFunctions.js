// const add=(a,b)=>{
//     return a+b;
// }

// console.log(add(23,8));
// console.log(add(2,8));
// console.log(add(2.98,8.34));

// console.log(add);

// const cube=(a)=>{
//     return a*a*a;
// }
// console.log(cube(2));
// console.log(cube(-1));
// console.log(cube(12));

// const pow=(a,b)=>{
//     let ans=1;
//     for(let i=1;i<=b;i++){
//         ans*=a;
//     }
//     return ans;
// }
// console.log(pow(2,3));
// console.log(pow(2,0));
// console.log(pow(2,1));
// console.log(pow(2,10));

// const hello=(n)=>{
//     console.log(n);
// }
// hello(1);

// // implicit return
// const mul=(a,b)=>(
//     a*b
// );
// console.log(mul(2,4));
// console.log(mul(2.4,4.9));

// const sub=(a,b)=>(a-b);
// console.log(sub(10,3));
// console.log(sub(34.2,6));

// let sq=(a)=>(a*a);
// console.log(sq(10));
// console.log(sq(8));
// console.log(sq(2.5));

// let hell2=()=>{
//     let id=setInterval(()=>{
//         console.log("Hello World");
//     },2000);
//     setTimeout(function(){
//         console.log("10 sec over");
//         clearInterval(id);
//     },10000);
// }

// hell2();

// function declaration
// function square(num) {
//   return num * num;
// }

// console.log(square(9));

// function expression;
// const square = function (num) {
//   return num * num;
// };
// console.log(square(9));

// arrow function expression
// const square = (num) => {
//   console.log(num * num);
// };
// const square = (num) => num * num; // implicit return
// console.log(square(9));

// const add = (a, b) => a + b;
// console.log(add(10, 45));

// setTimeout(() => {
//   console.log("hello world");
// }, 2000);

const getRandom = () => Math.random();
console.log(getRandom());
