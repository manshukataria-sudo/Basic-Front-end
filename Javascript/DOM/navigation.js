let h4=document.querySelector("h4");
console.log(h4.parentElement);
let parent=document.querySelector(".pubInfo");
console.log(parent.children);
console.log(parent.childElementCount);

let list=document.querySelector(".pubInfo ul");
console.log(list.children);
console.log(list.childElementCount);
console.log(list.parentElement);

console.log(list.children);
console.log(list.children[0]);
console.log(list.children[1]);
console.log(list.children[2]);

console.log(list.children[1].previousElementSibling);
console.log(list.children[1].nextElementSibling);
console.log(list.children[2].nextElementSibling);

let ele=list.children[1].previousElementSibling;
console.log(ele);

let img=document.querySelector("#mainImg");
console.log(img.previousElementSibling);
img.previousElementSibling.style.color="hotPink";