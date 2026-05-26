// let arrayAverage=(arr)=>{
//     let eleSum=0;
//     for(ele of arr){
//         eleSum+=ele;
//     }
//     return eleSum/arr.length;
// }
// let nums=[1,2,3,4,5];
// console.log(arrayAverage(nums));

// let isEven=(n)=>{
//     return (n%2==0);
// // }
// const isEven=(n)=>(n%2==0);
// console.log(isEven(3));
// console.log(isEven(10));
// console.log(isEven(1));

// const obj={
//     message:"Hello World !",
//     logMessage1(){
//         console.log(this);
//         console.log(this.message);
//     },
//     logMessage2:function(){
//         console.log(this);
//         console.log(this.message);
//     },
//     logMessage3:()=>{
//         console.log(this);
//         console.log(this.message);
//     }
// }
// console.log(obj.logMessage1());
// console.log(obj.logMessage2());
// console.log(obj.logMessage3());
// console.log(obj.prop);

// window.setTimeout(obj.logMessage1,1000);
// window.setTimeout(obj.logMessage2,1000);
// window.setTimeout(obj.logMessage3,1000);

// function add(a,b){
//     console.log(`Sum is ${a+b}`);
// }

// function addOfAdd(fun,a,b){
//     fun(a,b);
// }

// addOfAdd(add,1,2);

// window.size = 4;        //let and const keywords do not make windows property but var keyword do
// function callback() {
//   console.log(this.size);
// }
// const object = {
//   size: 5,
//   method(callback) {
//     callback();
//   },
// };
// object.method(callback,1,2);


// let num1=10;
// let num2=0;
// try{
//   console.log(`${num1/num2}`);
// }
// catch(err){
//   console.log(err);
// }


// try{
//   console.log(a);
// }
// catch(err){
//   console.log(err);
// }

// console.log("japun to error ke baad ka hai bidu");
// console.log("Aan meri jaan");

// const factorial=(n)=>{
//   if(n==0 || n==1) return 1;
//   if(n<0){
//     throw("...invalid input...");
//   }
//   return n*factorial(n-1);
// }

// console.log(factorial(4));
// console.log(factorial(1));
// console.log(factorial(2));
// try{
//   console.log(factorial(-2));
// }
// catch(err){
//   console.log(err);
// }


// const fiboNth=(n)=>{
//   if(n==1 || n==2) return 1;
//   if(n<=0){
//     throw("...invalid input...");
//   }
//   return fiboNth(n-1)+fiboNth(n-2);
// }
// try{
//   console.log(fiboNth(1));
//   console.log(fiboNth(2));
//   console.log(fiboNth(3));
//   console.log(fiboNth(4));
//   console.log(fiboNth(5));
//   // console.log(fiboNth(-90));
//   // console.log(fiboNth(90));
//   // console.log(fiboNth(0));
//   console.log(fiboNth(10));
// }
// catch(err){
//   console.log(err);
// }

// console.log("After catch statement");

// let add=a=>a;
// console.log(add(10,29));


// let countHello=()=>{
//   let id=setInterval(()=>{
//     console.log("Hello World");
//   },2000);
//   setTimeout(()=>{
//     clearInterval(id);
//   },10000);
// }

// console.log(countHello());
