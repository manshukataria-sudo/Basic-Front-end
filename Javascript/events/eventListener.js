let likeBtns=document.querySelectorAll(".likeBtn");
let sayHello=function(){
    console.log("Hello!");
}
let sayName=function(){
    console.log("Chaman Verma");
}
// for(btn of likeBtns){
//     btn.onclick=sayHello;
//     btn.onclick=sayName;
// }
let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    console.log("Clicked button");
});
btn.addEventListener("mouseenter",()=>{
    console.log("You are about to click button");
})

for(btn of likeBtns){
    btn.addEventListener("click",()=>{
        console.log("You liked it");
    });
    btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",()=>{
        console.log("Bhai kaam chal raha hai saans le thodi");
    })
}