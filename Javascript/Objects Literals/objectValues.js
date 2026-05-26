// get values
const post = {
  userName: "Elon Musk",
  content: "video",
  likes: "4.3M",
  reposts: "500k",
  tags: ["#spaceX", "#tesla", "#nasa"],
};

// console.log(post[userName]);

console.log(post);

console.log(post.userName);
console.log(post["userName"]);
console.log(post["likes"]);
console.log(post["tags"]);
console.log(`This was posted by the account having usename : ${post.userName}`);
console.log(
  `This was posted by the account having usename : ${post["userName"]}`
);

console.log(post.tags[0]);
console.log(post.tags[1]);
console.log(post.tags[2]);

let str = "tags";
console.log(post[str]);
//  conversion in get values
let obj = {
  1: "val1",
  2: "val2",
  true: "val3", // all keys are treated as strings
  null: "val4",
  undefined: "val5",
  fName: "hello",
  ab12: "It works",
};
console.log(obj);
console.log(obj[1]);
console.log(obj[true]);
console.log(obj[undefined]);
console.log(obj["fName"]);
// console.log(post[tags]);
console.log(obj["1"]);
console.log(obj["true"]);
// console.log(obj(fName));

//                  add/update/delete literal values

const student = {
  fName: "abc",
  age: 20,
  marks: 89,
  city: "jammu",
};

student.age=10;
console.log(student.age);
console.log(student);

student["marks"]=2;
console.log(student.marks);
console.log(student);


console.log(student.gender);
student.gender="male";
console.log(student.gender);
console.log(student["gender"]);
console.log(student);
console.log(student[""]);
student.marks="A";
console.log(student);

delete student.city;
console.log(student);

