// console.log(document);
// console.dir(document);
// console.log(document.all);
// console.log(document.all[8]);
// document.all[8].innerText="IronMan";



// selecting element

// by id
// console.log(document.getElementById("mainImg"));
// console.dir(document.getElementById("mainImg"));

// let imgObj=document.getElementById("mainImg");
// console.log(imgObj);
// console.log(imgObj.src);
// console.log(imgObj.tagName);
// console.dir(document.getElementById("hello"));   // returns null as there is no element having id "hello"
// console.log(imgObj.id);

// imgObj.src="Assets/Man.png";

// let description=document.getElementById("description");
// console.dir(description);



// selecting elements by className
// console.log(document.getElementsByClassName("oldImg"));
// let classEle0=document.getElementsByClassName("oldImg")[0];
// console.log(classEle0); 


// let oldImg=document.getElementsByClassName("oldImg");
// for(let ele of oldImg){
//     console.log(ele);
// }

// for(let ele of oldImg){
//     console.log(ele.src);
// }

// for(let i=0;i<oldImg.length;i++){
//     oldImg[i].src="Assets/Spider-Man.png";
// }

// console.log(document.getElementsByClassName("abcd"));            //returns empty collection as there no class "abcd"


// get element ny tag name
// let tagCollect=document.getElementsByTagName("li");
// console.log(tagCollect);
// let pTag=document.getElementsByTagName("p");
// console.log(pTag);

// pTag[0].innerText="Hello";

// console.log(document.getElementsByTagName("span"));


// selecting elements by querySelector

console.dir(document.querySelector("p"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));
console.log(document.querySelector("div a"))

console.dir(document.querySelectorAll("div a"));
console.dir(document.querySelectorAll("div"));