/* 
As per procedural programming language
*/
function get_yob(age) {
  return new Date().getFullYear() - age;
}

/* 
For applying OOP principle
*/

const user1 = {
  firstName: "Manshu",
  lastName: "Kataria",
  age: 21,
  get_yob: (age = user1.age) => new Date().getFullYear() - age,
};

console.log(user1.get_yob());
console.log(user1.get_yob(60));

/* 
For Creating the multiple users we need to create user object again and again, i.e writing same code again
*/
/* 
const user2 = {
  firstName: "Samar",
  lastName: "Kataria",
  age: 12,
  get_yob: (age = user2.age) => new Date().getFullYear() - age,
};

console.log(user2.get_yob()) 
*/

/* 
Hence, comes the concept of factory functions
 */
const create_user = (firstName, lastName, age) => {
  return {
    firstName,
    lastName,
    get_yob: () => new Date().getFullYear() - age,
  };
};

const user_x = create_user("manshu", "kataria", 21);
const user_y = create_user("samar", "kataria", 13);

console.log(user_x);
console.log(user_y);
console.log(user_x.get_yob());
console.log(user_y.get_yob());

/* 
The Problem:
Here, in both user objects, function get_yob are different, despite it's doing the same task
Same function created at two different locations
*/
console.log(user_x.get_yob === user_y.get_yob); // false, as two different locations in memory

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = arr1;
console.log(arr1 === arr2); // true, as both are pointing to same memory location
console.log(arr1.pop === arr2.pop); // true, pop function of all arrays is stored at one place in memory
