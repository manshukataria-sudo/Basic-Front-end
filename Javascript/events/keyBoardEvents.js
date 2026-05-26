// let btn=document.querySelector("button");
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("You clicked button");
// })

// let input=document.querySelector("input");
// input.addEventListener("keydown",function(){
//     console.log("Key count");
// })

// input.addEventListener("keyup",function(event){
//     console.log(event);
//     console.log("key Released");
// })

// input.addEventListener("keyup",function(event){
//     console.log(`Key : ${event.key}`);
//     console.log(`Code : ${event.code}`);
//     console.log("key released");
// });

let input = document.querySelector("input");
input.addEventListener("keydown", function (event) {
  //event.code==ArrowUp || ArrowDown || ArrowLeft || ArrowRight
  if (event.code == "ArrowUp") {
    console.log("forward");
  } else if (event.code == "ArrowDown") {
    console.log("down");
  } else if (event.code == "ArrowLeft") {
    console.log("left");
  } else if (event.code == "ArrowRight") {
    console.log("right");
  } else {
    console.log("...INVALID MOVEMENT...");
  }
});
