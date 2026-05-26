// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   // alert("form submitted");
//   let input = document.querySelector("form input");
//   console.log(input);
//   console.dir(input);
//   console.log(input.value);
// });

// let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
    // let user=document.querySelector("#user");
    // let pass=document.querySelector("#pass");
    // console.log(user.value);
    // console.log(pass.value);

    // alert(`Hi ${user.value}!! kaisa hai bidu`);

    // console.dir(form);
    // console.log(form.elements);
    // let user=form.elements[0];
    // let pass=form.elements[1];
    // let user=this.elements[0];
    // let pass=this.elements[1];
    // console.log(user.value);
    // console.log(pass.value);
    // alert(`Hi ${user.value} your password is set to ${pass.value}`);
// });

// let user=document.querySelector("#user");
// user.addEventListener("change",function(){
//     console.log("change event");
//     console.log(user.value);
// });
// user.addEventListener("input",function(){
//     console.log("input event");
//     console.log(user.value);
// });
// let pass=document.querySelector("#pass");


let textArea=document.querySelector("#text-area");
let typingArea=document.querySelector("#typing-area");

typingArea.addEventListener("input",function(){
    textArea.innerText=this.value;
})