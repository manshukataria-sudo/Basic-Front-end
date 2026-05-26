const addCardBtn = document.querySelector(".add-card");
const container = document.querySelector(".container");
const userInput = document.querySelector(".user-input");
const form = document.querySelector(".form");
const cardList = document.querySelectorAll(".card");
let count = 1;


addCardBtn.addEventListener("click", () => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
  //   newCard.addEventListener("click", () => {
  //     newCard.remove();                                   // event listener added while creating element
  //   });                                                   // not a good approach
  // newCard.addEventListener("click",()=>{
  //   newCard.remove();
  // })
});

// cardList.forEach((card) => {
//   card.addEventListener("click", () => {             // no card is added to remove so we use event delegation
//     card.remove();
//   });
// });

// container.addEventListener("click", (e) => {
//     if(e.target.classList.contains("card")){                // adding event listener on parents element instead of child element
//         e.target.remove();
//     }
// });

// container.addEventListener("click", (e) => {
//   if (e.target.classList.contains("card")) {
//     e.target.remove();
//   }
// });

let collection = document.querySelectorAll(".card");
for (let card of collection) {
  card.addEventListener("click", () => {
    card.remove();
  });
}
