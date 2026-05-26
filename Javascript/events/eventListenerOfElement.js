let para=document.querySelector("p");
para.addEventListener("click",()=>{
    console.log("Para is Clicked");
})

let div1=document.querySelector(".box");
div1.addEventListener("click",()=>{
    console.log("Hello World");
})
div1.addEventListener("mouseenter",()=>{
    console.log("You entered a div");
})