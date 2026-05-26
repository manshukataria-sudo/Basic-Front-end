let str="My name is Chaman Verma";
console.log(str.slice(3));


// last index is not included 
let sliced=str.slice(11,17);
console.log(sliced);

let myName="CHAMAN";
myName=myName.slice(0,myName.length-1);
console.log(myName);



// subtracts num from myName.length and passes as starting index in slice method
// if negative argument is passed in slice method
myName="CHAMAN";
let num=2;
console.log(myName.slice(num));
console.log(myName.slice(-num));

let num2=-2;
console.log(myName.slice(num2));
console.log(myName.slice(-num2));
