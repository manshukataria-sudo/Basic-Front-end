let head = document.querySelector("h1");
// setTimeout(()=>{
//     head.style.color="red";
// },1000);

// setTimeout(()=>{
//     head.style.color="green";
// },2000);

// setTimeout(()=>{
//     head.style.color="orange";
// },3000);

// let changeColor=function(color,time){
//     setTimeout(()=>{
//         head.style.color=color;
//     },time);
// }
// changeColor("red",1000);
// changeColor("orange",2000);
// changeColor("green",3000);

let changeColor = function (color, delay, nextChangeColor) {
  setTimeout(() => {
    if (nextChangeColor) {
      nextChangeColor();
    }
    head.style.color = color;
  }, delay);
};
changeColor("red", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("green", 1000, () => {
      changeColor("blue", 1000, () => {
        changeColor("pink", 1000);
      });
    });
  });
});
