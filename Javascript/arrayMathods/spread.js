// spread
let str="abcdef";
console.log(str);
console.log(...str);

console.log(Math.min(-100,2,3,4,5));
console.log(Math.max(-100,2,3,4,500));


let nums=[1,2,3,4,5,6];
console.log(Math.max(...nums));

console.log(Math.min(...nums));
console.log(...nums);

// spread with array literals
let arr=[1,2,3,4,5];
let newArr=[...arr];
console.log(newArr);

let newStr=[..."hello"];
console.log(newStr);

let odd=[1,3,5,7,9];
let even=[2,4,6,8];
let total=[...odd,...even];
console.log(...total);

// spread with object literals
let student={
    name:"Dr. Doom",
    email:"notrequired@gmail.com"
};
// console.log(...student);             // objects are not iterables
let studentCopy={...student,id:"Don No. 1"};
console.log(studentCopy);

arr=[10,20,30,40,50,60,70];
let obj={...arr};               // in object -> key(index of element):val(values of element)
console.log(obj);
// console.log(...obj);


let obj2={..."hello"};
console.log(obj2);