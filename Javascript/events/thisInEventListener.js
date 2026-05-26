let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let h4=document.querySelector("h4");
let para=document.querySelector("p");


let changeCol=function(){
    this.style.backgroundColor="yellowGreen";
}
btn.addEventListener("click",function(){
    // console.log(this);
    console.dir(this);
    console.log(this.innerText);
    this.style.backgroundColor="yellowGreen";
});

// h1.addEventListener("click",function(){
//     this.style.backgroundColor="yellowGreen";
// })
// h4.addEventListener("click",function(){
//     this.style.backgroundColor="yellowGreen";
// })
// para.addEventListener("click",function(){
//     this.style.backgroundColor="yellowGreen";
// })

h1.addEventListener("click",changeCol)
h4.addEventListener("click",changeCol)
para.addEventListener("click",changeCol)
