class CreateUser {
  /* 
    For properties there is a Constructor Method provided
  */

  constructor(firstName, lastName, age) {
    console.log(this); // this refers to object that it is creating, same in case of constructor function
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get_yob() {
    return new Date().getFullYear() - this.age;
  }

  get_fullName() {
    return this.firstName + " " + this.lastName;
  }
}

/*
Methods written in class are directly, defined inside the prototype object of constructor function i.e class Here
*/

const user_1 = new CreateUser("radha", "krishn", 0);
const user_2 = new CreateUser("krishn", "radha", 0);

console.log(
  user_1.firstName,
  user_1.lastName,
  user_1.get_yob(),
  user_1.get_fullName(),
);
