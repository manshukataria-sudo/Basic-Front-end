const userName = document.querySelector("#username");
const form = document.querySelector("form");
// console.log(userName);
// console.dir(userName);
userName.addEventListener("input", (e) => {
  console.log("input event triggered");
  // console.log(e);
  // console.log(e.target.value);
  console.log(userName.value);
  console.log(e.target);
});

userName.addEventListener("change", (e) => {
  console.log("change event fired");
  console.log(e);
  console.log(e.target);
  console.log(e.target.value);
});

userName.addEventListener("focus", (e) => {
  console.log(e);
  console.log(e.target);
});

userName.addEventListener("blur", (e) => {
  console.log(e);
  console.log(e.target);
});
form.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault();
  alert("form submitted successfuly");
  const newFormData = new FormData(form);
  console.log(newFormData);
  for (let p of newFormData.entries()) {
    console.log(p);
  }
});

form.addEventListener("click",(e)=>{
    console.log(e.target);
    console.log(e.currentTarget);
})