const student = {
  name: "Chaman",
  age: 20,
  marks: 100,
  prop: this, // global scope i.e window object
  getName: function () {
    console.log(this); // here "this" is calling object  i.e student object
    return this.name;
  },
  getNameArrow: () => {
    console.log(this); // here "this" is calling object's "this" i.e window object
    return this.name;
  },
  getInfo1: function () { 
    setTimeout(function () {
      console.log(this);            // window
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(() => {
      console.log(this);            //student
    }, 2000);
  },
};

console.log(student.getName())
// console.log(student.prop);
// console.log(student.getName());
// console.log(student.getInfo1());
// console.log(student.getInfo2());
// console.log(student.getNameArrow());
// console.log(student);
// let a=10;
// console.log(a);
