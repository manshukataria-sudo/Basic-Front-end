let colorGenerateButton = document.querySelector("button");
let randomCol = () => {
  let col1 = Math.floor(Math.random() * 256);
  let col2 = Math.floor(Math.random() * 256);
  let col3 = Math.floor(Math.random() * 256);
  return `rgb(${col1},${col2},${col3})`;
};
colorGenerateButton.addEventListener("click", () => {
  let color = randomCol();
  let mainHead = document.querySelector("h2");
  mainHead.innerText = color;
  let colDiv = document.querySelector(".color-container");
  colDiv.style.backgroundColor = color;
});
