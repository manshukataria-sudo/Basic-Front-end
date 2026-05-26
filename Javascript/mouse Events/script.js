const h1 = document.querySelector("h1");
const card = document.querySelector(".card");
const container = document.querySelector(".container");

let count = 0;

// click
// card.addEventListener("click", () => {                   // works when click is completed i.e up and down
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// mousedown
// card.addEventListener("mousedown", (e) => {          // works when mouse key is down
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// mouseup
// card.addEventListener("mouseup", (e) => {          // works when mouse key is released
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// mouseenter
// card.addEventListener("mouseenter", (e) => {          // works when mouse pointer enters an element
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });
// h1.addEventListener("mouseenter", (e) => {          // works when key enters an element
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// mouseleave
// card.addEventListener("mouseleave", (e) => {          // works when mouse pointer leaves an element
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// mousemove
// card.addEventListener("mousemove", (e) => {          // works when mouse pointer moves on the element
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// mouseover
// card.addEventListener("mouseover", (e) => {          // works when mouse pointer enters on the element
//   console.log(e);                                    // also triggered by the child of th element
//   const newCard = document.createElement("div");     // mouseenter works on entering of pointer in element only
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// wheel
// card.addEventListener("wheel", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");     // triggered when mouse wheel is rolled or trackpad scrolled
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// scroll
// document.addEventListener("scroll", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");         // triggered when element is scrolled
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });



// touchEvents

// touchStart
// card.addEventListener("touchstart", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");        // on touch devices when element is touched
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });


// touchend
// card.addEventListener("touchend", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");        // on touch devices when element is touch released
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// touchmove
// card.addEventListener("touchmove", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");        // on touch devices when element is touched and moved
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// drag
// h1.addEventListener("drag", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");     // when element's draggable attribute is true and element is dragged 
//   newCard.classList.add("card");                     // doen't work on mobile
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// pointer events
// card.addEventListener("pointermove", (e) => {                 // works on both mobile and desktops
//   console.log(e);
//   const newCard = document.createElement("div");     // when element's draggable attribute is true and element is dragged 
//   newCard.classList.add("card");                     // doen't work on mobile
//   newCard.innerText = count++;
//   container.append(newCard);
// });
card.addEventListener("", (e) => {                 // works on both mobile and desktops
  console.log(e);
  const newCard = document.createElement("div");     // when element's draggable attribute is true and element is dragged 
  newCard.classList.add("card");                     // doen't work on mobile
  newCard.innerText = count++;
  container.append(newCard);
});

