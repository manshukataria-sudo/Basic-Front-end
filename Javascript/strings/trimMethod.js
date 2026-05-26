let str="   Hello   World";
str=str.trim();
console.log(str);

let str2=`   Hello World`;
str2.trim();
console.log(str2);
console.log(str2.trim());


// let password=prompt("Create your password");
// password=password.trim();
// console.log(password);

// strings are immuteable i.e can't be changed , if tried new strings are created
let name="   nayan";
name.trim();
console.log(name);
let newName=name.trim();
console.log(name);
console.log(newName);
name="Siya";
console.log(name);