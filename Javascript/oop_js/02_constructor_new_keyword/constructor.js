/* 
Using the new keyword before calling function,
Function always returns an object, irrespective of what the return value is written inside the function
*/
/* 
function say_hi() {
  console.log(this);
  return "Hi! Sir";
}
console.log(say_hi()); // called from window object, hence this pointing to window object

/*
Function created an object and returns it.
this keyword is also refering to that created object

console.log(new say_hi()); // returns => "say_hi {}" (name of constructor and object created) 
*/

/*
This is a constructor function.
It is called by using the new Keyword.
It returns the object that it creates.
*/

function Create_user(first_name, last_name, age) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.age = age;
}

const user_x = new Create_user("manshu", "kataria", 21);
const user_y = new Create_user("ansh", "kataria", 19);
console.log(user_x);
console.log(user_y);

/* 
The prototype property (which is an object) in constructor function is attached to the object that it returns/constructs.
It can be accessed by user_x.__proto__
*/
console.log(Create_user.prototype === user_x.__proto__); // returns true, as both are pointing to same memoery location

/*
Hence, for having the common Methods, among all the objects that constructor creates , so that these are not created again.
We can define the methods in Prototype of constructor function
*/

Create_user.prototype.get_yob = function () {
  return new Date().getFullYear() - this.age;
};

Create_user.prototype.get_full_name = function () {
  return this.first_name + " " + this.last_name;
};
console.log(user_x.__proto__.get_yob()); // returns Nan "this" refers to __proto__ and proto has no age
console.log(user_x.get_yob()); // we can use the proto methods in this way also, now this works, because method is called by object
console.log(user_x.get_full_name());
/* 
We can say that the constructor's prototype is Inherited in Objects that it created.
This Inheritance has taken place by raference only, copy of prototype has not created.
*/

/* 
This is better but code was repeating.
Hence, classes were introduced
*/
