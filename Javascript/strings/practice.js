// let msg="help!";
// msg=msg.trim().toUpperCase();
// console.log(msg);

// let str="ApnaCollege";
// str=str.slice(4).replace("l","t");
// console.log(str);

let nums = [0, 1, 2, 3, 4];
let n = 2;
console.log(nums.slice(0, n));

let m = 6;
console.log(nums.slice(-m));

let str = "-=!@#$%^&*()_+";
if (str.length === 0) {
  console.log("String is empty");
} else {
  console.log("String is not empty");
}

let array = [
  "hello",
  "hi",
  "namaste",
  "kaisa hai bidu",
  "pranipaat",
  "pranaam",
];
let ele = "kaisa hai bidu";
console.log(array.includes(ele));

console.log(array == nums);
array = [0, 1, 2, 3, 4];
nums = array;
array.push(10);
console.log(nums);
console.log(array == nums);

let greeting = "    hello   World   ";
let greetTrim = greeting.trim();
console.log(greetTrim);

let string = "  manshuzx";
let idx = 0;
if (string[idx] >= "a" && string[idx] <= "z") {
  console.log("lower case");
} else {
  console.log("Not Lower Case");
}
