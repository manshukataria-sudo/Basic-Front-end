let saveToDb = function (data) {
  return new Promise((resolve, reject) => {
    let netSpeed = Math.floor(Math.random() * 10) + 1;
    if (netSpeed > 5) {
      resolve("promise resolved");
    } else {
      reject("promise rejected");
    }
  });
};
console.log(first)
