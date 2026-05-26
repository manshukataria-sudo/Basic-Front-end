let ul = document.querySelector("ul");
let addTodo = document.querySelector("#addTodo");
let removeTodo = document.querySelector("#removeTodo");
let li = document.querySelector("li");

let btn = document.querySelector("#addBtn");
btn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.innerText = addTodo.value;
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  li.insertAdjacentElement("beforeend", delBtn);
  ul.insertAdjacentElement("beforeend", li);
  addTodo.value = "";
});

// let delBtns=document.querySelectorAll("li button");
// for(del of delBtns){
//     del.addEventListener("click",function(){             // event listener will not be added for newlt created elements
//         let list=this.parentElement;                     // we should use event delegation
//         console.log(list);
//         list.remove();
//     });
// }

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let list = event.target.parentElement;
    list.remove();
    console.log("deleted");
  }
});
