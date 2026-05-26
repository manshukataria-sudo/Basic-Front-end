// window.document
// function sayHi(){
//     console.log("hi");
// }
// console.log(sayHi);
// console.dir(sayHi);

// console.log(document);
// console.dir(document);
// console.log(typeof(document));
// console.dir(document);



// temp1
// <h2>​heading 2​</h2>​
// typeof(temp1)                // every element is object in dom   // html parser
// 'object'

//dom manipulation
// console.log(document.children);
// console.dir(document.children[0].children[1]);
// console.dir(document.body);
// let h1=document.body.children[0];
// console.log(h1);
// console.log(typeof h1);
// console.dir(h1);

// h1.innerHTML='Manshu Kataria';
// h1.innerText="kaisa hai bidu";

// h1.innerHTML="<b>manshuu</b>";
// h1.innerText="<b>manshuu</b>";

// console.log(h1.innerHTML);
// console.log(h1.innerText);

// let h2=document.body.children[1];
// h2.innerText="Hello World";


// img
let img=document.body.children[4];
console.log(img);
console.dir(img);
console.log(img.src);
img.src="https://plus.unsplash.com/premium_photo-1666963323736-5ee1c16ef19d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJhbCUyMHNjZW5lcnl8ZW58MHx8MHx8fDA%3D"
let para=document.body.children[3];
console.log(para);
console.dir(para);

para.innerText="Vanilla JS";

// store as global variable in ELements tab of devTools
