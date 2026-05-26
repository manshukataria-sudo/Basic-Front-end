let mainI=document.querySelector("#mainImg");
console.dir(mainI);
console.log(mainI.getAttribute("src"));
console.log(mainI.getAttribute("id"));
console.log(mainI.getAttribute("width"));
console.log(mainI.getAttribute("alt"));

// mainI.setAttribute("id","spiderMan");

mainI.setAttribute("src","Assets/Man.png");

console.log(mainI.getAttribute("class"));
mainI.setAttribute("class","spidy");
console.log(mainI.getAttribute("class"));