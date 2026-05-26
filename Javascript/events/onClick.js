let btn=document.querySelector("button");
// console.log(btn.getAttribute("onclick"));
// btn.setAttribute("onclick","console.log('Hello World')");
// console.log(btn.getAttribute("onclick"));
// console.dir(btn);
btn.onclick=function(){
    console.log("hello World");
}
let sayHello=()=>{
    alert("Hello!");
}
btn.onclick=sayHello;

let likeBtns=document.querySelectorAll(".likeBtn");
let likeMe=()=>{
    console.log("Liked");
}
let enter=()=>{
    console.log("You entered a button");
}
for(btn of likeBtns){
    btn.onclick=likeMe;
}
for(btn of likeBtns){
    btn.onmouseenter=enter;
}
