(function () {
  const submitBtn = document.querySelector(".enable");
  const input = document.querySelector("#guess");
  const hint = document.querySelector(".guess-result .hint");
  const displayGuesses = document.querySelector(".guess-result .guesses");
  const guessCount = document.querySelector(".guess-count");
  const newGameButton = document.querySelector(".disable");

  const setButtons = () => {
    input.setAttribute("disabled", "");
    input.classList.add("disable");
    submitBtn.setAttribute("disabled", "");
    submitBtn.classList.add("disable");
    submitBtn.classList.remove("enable");
    newGameButton.classList.add("enable");
    newGameButton.classList.remove("disable");
    newGameButton.removeAttribute("disabled");
  };

  const gameOver = () => {
    hint.innerText = `...Game Over!! The number was ${random}...`;
    setButtons();
  };

  let random = Math.floor(Math.random() * 101);
  let guesses = [];

  const main = () => {
    if (input.value == "" || input.value > 100 || input.value < 0) {
      alert("...Invalid Input...");
    } else if (input.value < random) {
      hint.innerText = `${input.value} is too low!`;
      guesses.push(` ${input.value}`);
      displayGuesses.innerText = `Your guesses: ${guesses}`;
      guessCount.innerText = `${10 - guesses.length}`;
    } else if (input.value > random) {
      hint.innerText = `${input.value} is too high!`;
      guesses.push(` ${input.value}`);
      displayGuesses.innerText = `Your guesses: ${guesses}`;
      guessCount.innerText = `${10 - guesses.length}`;
    } else if (input.value == random) {
      guesses.push(` ${input.value}`);
      displayGuesses.innerText = `Your guesses: ${guesses}`;
      hint.innerText = `You got it in ${guesses.length} guesses! The number was ${random}.`;
      guessCount.innerText = `${10 - guesses.length}`;
      setButtons();
    }
    input.value = "";
  };

  submitBtn.addEventListener("click", (e) => {
    if (guesses.length < 10) {
      main();
      if (guesses.length == 10 && guesses[guesses.length - 1] != random) {
        gameOver();
      }
    }
  });

  input.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
      if (guesses.length < 10) {
        main();
        if (guesses.length == 10 && guesses[guesses.length - 1] != random) {
          gameOver();
        }
      }
    }
  });

  newGameButton.addEventListener("click", () => {
    random = Math.floor(Math.random() * 101);
    guesses.splice(0);
    hint.innerText = ``;
    displayGuesses.innerText = "";
    newGameButton.setAttribute("disabled", "");
    newGameButton.classList.add("disable");
    newGameButton.classList.remove("enable");
    input.removeAttribute("disabled");
    input.classList.remove("disable");
    submitBtn.removeAttribute("disabled");
    submitBtn.classList.add("enable");
    submitBtn.classList.remove("disable");
  });
})();
