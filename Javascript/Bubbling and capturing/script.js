const green = document.querySelector(".green");
const pink = document.querySelector(".pink");
const blue = document.querySelector(".blue");

// event is bubbling outside as child element triggers parent's eventlisterner

// window.addEventListener("click",(e) =>{
//     console.log("6. window clicked");
// }, {capture : true})

// document.addEventListener("click",(e) =>{
//     console.log("5. document clicked");
// }, {capture : true})

// document.body.addEventListener("click",(e) =>{
//     console.log("4. body clicked");
// }, {capture : true})

// green.addEventListener("click",(e)=>{
//     e.stopPropagation();                                    // event propagates till here and stops
//     console.log("3. green clicked");
// }, {capture : true})

// pink.addEventListener("click",(e)=>{
//     console.log("2. pink clicked");
// }, {capture : true})                                     // event capturing's capture

// blue.addEventListener("click",(e)=>{
//     // e.stopPropagation();                                // event stops here
//     console.log("1. blue clicked");
// }, {capture : true, once: true})                           // event propagates from reverse direction
//with once true works for only once                       // starts propagation from parents element


blue.addEventListener("keypress", (e) => {
  console.log("blue clicked");
});
pink.addEventListener("keypress", () => {
  console.log("pink clicked");
});
green.addEventListener("keypress", (e) => {
  console.log("green clicked");
});
document.body.addEventListener("keypress",()=>{
    console.log("body clicked");
})
document.addEventListener("keypress",()=>{
    console.log("document clicked");
})
window.addEventListener("keypress",()=>{
    console.log("window clicked");
})
