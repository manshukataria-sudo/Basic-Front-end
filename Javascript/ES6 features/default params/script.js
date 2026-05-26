// const multiply = function (a, b) {
//   return a * b;
// };
// console.log(multiply(2, 5));
// console.log(multiply(3)); // here "b" is undefined therefore the solution will be NaN

// default param is assingned
// it is overwritten if value is passed as argument while calling function
// const multiply = function (a, b = 10) {
//   return a * b;
// };
// console.log(multiply(12));
// console.log(multiply(12, undefined)); // default param is assigned to b
// console.log(multiply(12, null)); // overwritten

const rollADie = (numberOfSides = 6) => {
  if (!numberOfSides) {
    numberOfSides = 6;
  }
  return Math.floor(Math.random() * numberOfSides) + 1;
};
console.log(rollADie(6));
console.log(rollADie(9));
console.log(rollADie());
