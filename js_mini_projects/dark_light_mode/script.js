const fullDarkCheckBox = document.querySelector("#full-dark-mode");
const body = document.querySelector("body");
const container = document.querySelector(".container");
const containedDarkMode = document.querySelector("#contained-dark-mode");


function darkmode(ele){
  if (containedDarkMode.checked) {
    ele.classList.add("dark");
  } else {
    ele.classList.remove("dark");
  }
}

fullDarkCheckBox.addEventListener("change", () => {
  if (fullDarkCheckBox.checked) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
  containedDarkMode.checked = fullDarkCheckBox.checked;
  darkmode(container);
});


containedDarkMode.addEventListener("change", () => {
  darkmode(container);
});
