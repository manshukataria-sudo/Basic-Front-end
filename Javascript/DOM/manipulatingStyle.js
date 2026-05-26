// let img=document.querySelector("#mainImg");
// console.log(img.style);

// let heading=document.querySelector("h1");
// console.dir(heading);
// console.log(heading.style);
// // heading.style.color="red";
// // heading.style.color="sage";
// heading.style.backgroundColor="yellow";

// let links=document.querySelectorAll("div li a");
// console.log(links);

// // anchor.style.color="yellow";                     //property can't be applied due to collection

// for(let ele of links){
//     ele.style.backgroundColor="yellow";             // inline style
// }

// console.log(document.querySelector(".pubInfo").style);


// using classList
let img=document.querySelector("#mainImg");
console.dir(img);
console.log(img.classList);

let header=document.querySelector("h1");
console.dir(header);
console.log(header.classList);
header.classList.add("joker");
console.log(header.classList);

header.classList.add("green");
console.log(header.classList);

let mainPara=document.querySelector("p");
console.log(mainPara.classList);
mainPara.classList.add("underline");

console.log(header.classList);
header.classList.remove("green");
console.log(header.classList);

header.setAttribute("class","green");            // prefer not to use as set attributes can only have one one class at a time 
console.log(header.classList);

console.log(header.classList.contains("hello"));
console.log(header.classList.contains("underline"));
console.log(header.classList.contains("green"));
console.log(header.classList.contains("joker"));

console.log(header.classList);
header.classList.toggle("here");
console.log(header.classList);
header.classList.toggle("here");
console.log(header.classList);

let box=document.querySelector(".pubInfo");
console.log(box);
console.log(box.classList);
box.classList.toggle("yellow");
console.log(box.classList);