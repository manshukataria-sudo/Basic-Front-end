// let saveToDb = function (data) {
//   let netSpeed = Math.floor(Math.random() * 10) + 1;
//   if (netSpeed > 5) {
//     console.log("...data saved...", data);
//   } else {
//     console.log("...data not saved...");
//   }
// };
// saveToDb("ABC");

// let saveToDb = function (data, success, failure) {
//   let netSpeed = Math.floor(Math.random() * 10) + 1;
//   if (netSpeed > 5) {
//     success();
//   } else {
//     failure();
//   }
// };

// saveToDb(
//   "data 1",
//   () => {
//     console.log("data 1 saved");
//     saveToDb(
//       "data 2",
//       () => {
//         console.log("data 2 saved");
//         saveToDb(
//           "data 3",
//           () => {
//             console.log("data 3 saved");
//           },
//           () => {
//             console.log("data 3 not saved");
//           }
//         );
//       },
//       () => {
//         console.log("data 2 not saved");
//       }
//     );
//   },
//   () => {
//     console.log("not saved");
//   }
// );

let saveToDb = function (data) {
  return new Promise((resolve, reject) => {
    let netSpeed = Math.floor(Math.random() * 10) + 1;
    if (netSpeed > 5) {
      resolve("success : data saved");
    } else {
      reject("failed : data not saved");
    }
  });
};
// console.log(saveToDb("Hello World"));
//let request = saveToDb("Username"); // request is promise received
saveToDb("Username")
  .catch(() => {
    console.log("promise resolved");
    console.log(request);
  })
  .then(() => {
    console.log("promise rejected");
  });
