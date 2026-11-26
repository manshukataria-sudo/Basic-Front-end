/*
Creating only one function and passing it's reference in objects 
*/

function get_yob() {
  console.log(this); // points to object from which the function is called
  return new Date().getFullYear() - this.age;
}

function create_user(first_name, last_name, age) {
  return {
    first_name,
    last_name,
    age,
    get_yob: create_user.common_methods.get_yob,
  };
}

create_user.common_methods = {
  get_yob: function () {
    return new Date().getFullYear() - this.age;
  },
};

const user_x = create_user("a", "b", 32);
const user_y = create_user("x", "y", 21);
console.log(user_x.get_yob === user_y.get_yob); // true as both referencing to same memory location
console.log(user_x.get_yob());

/* 
This keyword in Javascript,
It always points to some object, and changes as per our code.
By Default It points to the Window object, i.e complete object of compete site in browser
No, this does not automatically point to the nearest outer object where the code is written. 
In JavaScript, this is determined by how a function is called (runtime binding), not where it is defined
*/

console.log(this); // the outer object is Window object
user_x.get_yob(); // outer object is user_x from which it is called
user_y.get_yob(); // here outer object is user_y from which the function is called

/* 
Memory is saved but Encapsulation and Abstraction is broken
*/

/* 
We can also attach function with functions, as the parent function is a object under the hood
 */

/* create_user.common_methods = {
  get_yob: () => new Date().getFullYear() - this.age,
}; */
console.dir(create_user);

console.log(user_x.get_yob === user_y.get_yob); // true, now referencing to same memory location and not polluting the global space
