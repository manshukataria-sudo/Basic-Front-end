const addCardBtn = document.querySelector(".card");
const container = document.querySelector(".container");
const userInput = document.querySelector(".user-input");
const form = document.querySelector(".form");
let count = 1;

addCardBtn.addEventListener("click", () => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// addCardBtn.click();                                  // method to invoke click
// for (let i = 0; i < 1000; i++) {
//   addCardBtn.click();
// }

// const interval = setInterval(() => {
//   if (count == 1000) {
//     clearInterval(interval);                                // even after clearing interval remaining function runs
//   }
//   addCardBtn.click();
// }, 10);

// setTimeout(()=>{
//     userInput.focus();                                          // focus should be on windows
// },1000);
// setTimeout(()=>{
//     userInput.blur();                                          // focus should be on windows
// },3000);

//

// setTimeout(() => {
//   form.submit();                                                    // to automatically submit form after 5 sec
// },5000);

// setTimeout(()=>{
//     form.reset();                                                         // to automatically reset form after 4 sec
// },4000);

// setTimeout(() => {
//   addCardBtn.click();
// }, 2000);

// setTimeout(() => {
//   userInput.focus();
// }, 2000);

// setTimeout(()=>{
//   userInput.blur();
// },4000);

// setTimeout(() => {
//   form.submit();
// }, 5000);

setTimeout(()=>{
  form.reset();
},5000);