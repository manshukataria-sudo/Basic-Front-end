let input = document.querySelector("#number");
input.value = 1;
let countResult = document.querySelector(".count-result h1");
const plusBtn = document.querySelector("#plus-button");
const minusBtn = document.querySelector("#minus-button");

let resetBtn = document.querySelector(".reset-button button");

input.addEventListener("input", function () {
  if (input.value > 10) {
    this.value = 10;
  }
  if (input.value < 0) {
    this.value = 1;
  }
});

plusBtn.addEventListener("click", function () {
  if (parseInt(input.value) == 0 || input.value == "") {
    input.value = 1;
  }
  let num = parseInt(countResult.innerText);
  if (num + parseInt(input.value) <= 1000) {
    countResult.innerText = `${num + parseInt(input.value)}`;
  }
});
minusBtn.addEventListener("click", function () {
  if (parseInt(input.value) == 0 || input.value == "") {
    input.value = 1;
  }
  let num = parseInt(countResult.innerText);
  if (num - parseInt(input.value) >= -1000) {
    countResult.innerText = `${num - parseInt(input.value)}`;
  }
});

resetBtn.addEventListener("click", function () {
  countResult.innerText = "0";
});
