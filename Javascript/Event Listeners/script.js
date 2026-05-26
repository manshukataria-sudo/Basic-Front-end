// onclick attribute in html
// function sayHi(){
//     console.log('hi');
// }
function hello() {
  console.log("Hello World");
}
function hi() {
  console.log("hi");
}

// via property
// let h1 = document.querySelector("h1");
// console.log(h1);
// console.dir(h1);

// h1.onclick = hi;
// h1.onclick = function () {
//   console.log("second hi");
// };

let h1 = document.querySelector("h1");
h1.onclick = function () {
  console.log("kaisa hai bidu");
};
h1.style.cursor = "pointer";
h1.addEventListener("dblclick", () => {
  h1.style.color = "green";
});

// h1.addEventListener("click", function () {
//   console.log("hello");
// });
// h1.addEventListener("click", function () {
//   console.log("Kaisa hai bidu");
// });

let val = 1;
let card = document.querySelector(".card");
card.addEventListener("click", () => {
  // let newCard = document.createElement("div");
  // newCard.classList.add("add-card");
  let newCard = card.cloneNode();
  newCard.classList.remove("card");
  newCard.classList.add("add-card");
  newCard.innerText = `${val++}`;
  let container = document.querySelector(".container");
  container.insertAdjacentElement("beforeend", newCard);
});


h1.addEventListener()