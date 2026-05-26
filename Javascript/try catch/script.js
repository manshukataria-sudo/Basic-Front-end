// code pauses where error is detected
// so use try catch block
// console.log(a);

// try {
//   console.log(a);
// } catch (error) {
//   // error is object here
//   //   console.log(typeof error);
//   //   console.log(error);
//   console.dir(error);
//   console.log(error.message);
//   console.log(error.name);
// }
// console.log("hello world");

// const user = {
//   name: "manshu",
//   age: 20,
//   marks: 2,
// };
// // console.log(user.address.city); // gives typeerror
// try {
//   console.log(user.address.city);
// } catch (error) {
//   console.dir(error);
// } finally{
//     console.log("it always executes");
// }

// mostly try catch are used in asynchronous codes

async function makeRequest() {
  try {
    const url = "https://jsonplaceholer.typicode.com/users";
    const response = await (await fetch(url)).json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
makeRequest();
