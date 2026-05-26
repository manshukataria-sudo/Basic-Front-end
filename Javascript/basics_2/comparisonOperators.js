let num1=10;
let num2=12;
console.log(++num1>num2);
console.log(num1++>=num2);
console.log(num1<num2--);
console.log(num1++<=num2);
console.log(++num1!=--num2);

console.log();

let x=12,y=23;
console.log(x==y);
console.log(x+11==y);
console.log(5==`5`);
console.log(101==`ABC`);
console.log(101==`101`);
console.log(0==``);
console.log(null==undefined);
console.log(typeof null);
console.log(typeof undefined);
console.log(0==false);
console.log(1==true);
console.log(NaN==0);
console.log(NaN==undefined);
console.log(NaN==null);



// === compare datatypes and values 
console.log();
console.log(`123`===123); 
console.log(typeof console);
console.log(123===123);
console.log(1===true);
console.log(0===false);
console.log(null===undefined);

// comparison for non numbers 
// compared on the basis of unicodes not ASCII values
console.log();
console.log(`a`>`A`);
console.log(`a`<`A`);
console.log(`z`>`Z`);
console.log(`abc`>`ABC`);
console.log(`b`>`Z`);
console.log(`abc`>`ABC`);