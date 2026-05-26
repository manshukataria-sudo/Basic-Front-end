console.log("name"=="name");
console.log("name"==="name");

let arr=[0,1,2,3];
let nums=[0,1,2,3];
console.log(arr===nums);
console.log(arr==nums);
console.log([1]==[1]);
console.log([1]===[1]);
console.log([]===[]);
console.log([]==[]);


console.log();
console.log();
let str="apple";
let ttr="apple";
console.log(str===ttr);
console.log(str==ttr);

let x=["apple","banana","orange"];
let y=x;                                // shallow copy
console.log(y==x);
console.log(y===x);


let g=["a","b","c"];
console.log(g);
let h=g;
console.log(h);
console.log(g==h);
console.log(g===h);

h.push('d');
console.log(g);
console.log(h);
console.log(g==h);
console.log(g===h);

g.pop();
console.log(g==h);
console.log(g===h);