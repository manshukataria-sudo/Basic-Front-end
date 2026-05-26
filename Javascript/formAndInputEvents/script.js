const userNameInput = document.querySelector("#username");
const paragraph = document.querySelector("p");
const form = document.querySelector("form");
// userNameInput.addEventListener("click",()=>{
//     console.log("you are going to give input");
// })

// userNameInput.addEventListener("dblclick",()=>{
//     console.log("dbl clicked");
// })

// input event
// userNameInput.addEventListener("input", (e) => {
//   console.log(e);                                           // inputEvent is fired
//   console.log(e.target.value);
//   paragraph.innerText = e.target.value;
//   console.log("input event fired"); 
// });

// // change event
// userNameInput.addEventListener("change", (e) => {           // when input is blurred , it is fired if value is changed
//   console.log(e);                                           // changeEvent is fired
//   console.log(e.target.value);
//   paragraph.innerText = e.target.value;
// });

// userNameInput.addEventListener("focus", (e) => {           // when input is focussed , it is fired if value is focussed
//   console.log(e);                                           // focusEvent is fired
// });

// userNameInput.addEventListener("blur", (e) => {
//   console.log(e);                                           // blurEvent is fired
// })

// form events

// form.addEventListener('click',(e) => {
//     console.log(e);
//     console.log('form clicked');
// })

// form.addEventListener("submit", (e) => {                    // triggered when form submitted (by clicking button )
//   console.log(e);                                           // preserve log(saves console)
//   e.preventDefault();                                       // to stop default behaviour 
//   const newFormData= new FormData(form);
//   console.log(newFormData);
//   for(p of newFormData.entries()){
//     console.log(p);
//   }
// });
// form.addEventListener("submit", (e) => {                    // triggered when form submitted (by clicking button )
//   console.log(e);                                           // preserve log(saves console)
//   e.preventDefault();                                       // to stop default behaviour 
// });


form.addEventListener("click", (e) => {                    
  console.log(e.target);                                         // show element that was target or clicked
  console.log(e.currentTarget);                                  // shows element on which eventListener is added
  e.preventDefault();                          
});
