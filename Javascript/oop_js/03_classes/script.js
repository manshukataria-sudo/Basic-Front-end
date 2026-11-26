/* 
Class is just a syntactic sugar on Constructor Function
*/
class CreateUser {}

/*
It is a constructor function that cannot be called without new Keyword 
*/
console.log(typeof CreateUser);
console.dir(CreateUser);

// console.log(CreateUser())    // error as no new keyword is used

/* 
Class is a constructor function.
Therefore, we can attach properties in this way also
*/

CreateUser.prototype.get_yob = function () {
  return new Date().getFullYear() - this.age;
};

CreateUser.prototype.get_fullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(new CreateUser());
console.log(new CreateUser().__proto__); // object has got the prototype of constructor function, i.e class Here

const user_1 = new CreateUser("radha", "krishn", 0);
const user_2 = new CreateUser("krishn", "radha", 0);


console.log(user_1.get_fullName())
console.log(user_1.get_yob())

/*
But we don't write it in this way, then what is the use of class, this can also be done by constructor function alone 
 */

