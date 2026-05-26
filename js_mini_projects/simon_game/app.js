const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");
const color3 = document.querySelector(".color-3");
const color4 = document.querySelector(".color-4");
const scoreDisplay = document.querySelector(".score");
const colorContainer = document.querySelector(".color-container");
const gameOver = document.querySelector(".game-over");
const main = document.querySelector("main");
const instructor = document.querySelector(".instructor");
const allColors = [color1, color2, color3, color4];

let count = 0;

// console.log(random);

const myPattern = [];
const userInput = [];

const blink = (ele) => {
  let bg = ele.style.backgroundColor;
  setTimeout(() => {
    ele.style.backgroundColor = "white";
  }, 200);
  setTimeout(() => {
    ele.style.backgroundColor = bg;
  }, 500);
};

const gameStarts = () => {
  instructor.innerText = "Game Started!! Follow Pattern";
  let random = Math.floor(Math.random() * 4);
  blink(allColors[random]);
  myPattern.push(allColors[random]);
  gameOver.classList.add("game-over");
};

window.addEventListener("keyup", (e) => {
  if (e.code == "Enter") {
    gameStarts();
  }
});

colorContainer.addEventListener("click", (e) => {
  let x = e.target;
  if (x == color1 || x == color2 || x == color3 || x == color4) {
    userInput.push(x);
  }
  if (userInput[userInput.length - 1] != myPattern[userInput.length - 1]) {
    userInput.splice(0);
    myPattern.splice(0);
    scoreDisplay.innerText = count;
    gameOver.classList.toggle("game-over");
    instructor.innerText = "Press 'ENTER' to start the game";
    count = 0;
  }
  else if(userInput.length == myPattern.length){
    count++;
    gameStarts();
    userInput.splice(0);
  }
});

for (let ele of allColors) {
  let bg = ele.style.backgroundColor;
  ele.addEventListener("pointerdown", () => {
    ele.style.backgroundColor = "white";
  });
  ele.addEventListener("pointerup", () => {
    ele.style.backgroundColor = bg;
  });
}
