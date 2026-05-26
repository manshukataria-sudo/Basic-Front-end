let newP=document.createElement("p");
console.log(newP);
console.dir(newP);
newP.innerHTML="Internaional <b>Space Station</b>";
console.log(newP.innerText);

let test=document.querySelector(".creationDev #description");
test.appendChild(newP);

let body=document.querySelector("body");
body.appendChild(newP);

let box=document.querySelector(".pubInfo");
box.appendChild(newP);

let btn=document.createElement("button");
body.appendChild(btn);
btn.innerHTML="<a href='#top'>TOP</a>"

newP.append(" is the complex marvel of engineering ");

let btn2=document.createElement("button");
btn2.innerText="CLICK HERE";
newP.append(btn2);

let newPara=document.createElement("p");
newPara.innerText="Prepend is used on me";
box.prepend(newPara);
newPara.prepend("Hello World ");

// let btn=document.createElement("button");
// btn.innerText="CLICK ME";
// let mainP=document.querySelector("p");
// mainP.insertAdjacentElement("beforebegin",btn);
// mainP.insertAdjacentElement("afterbegin",btn);
// mainP.insertAdjacentElement("beforeend",btn); 
// mainP.insertAdjacentElement("afterend",btn); 

// // removing element
// let topDiv=document.querySelector("#topDiv");
// topDiv.insertAdjacentElement("afterend",btn);
// // let body=document.querySelector("body");
// // body.removeChild(btn);
// btn.remove();
// let pubInfo=document.querySelector(".pubInfo");
// pubInfo.remove();