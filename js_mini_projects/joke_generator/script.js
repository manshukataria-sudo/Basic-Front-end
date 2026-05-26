const jokeBody = document.querySelector(".joke-body");
const jokeButton = document.querySelector(".joke-button");
const setUp = document.querySelector(".setup");
const punchLine = document.querySelector(".punch-line");

async function generateJoke() {
  jokeButton.disabled = true;
  try {
    const response = await (
      await fetch("https://official-joke-api.appspot.com/random_joke")
    ).json();
    setUp.innerHTML = `<b>Setup :</b> ${response.setup}`;
    punchLine.innerHTML = `<b>Punchline :</b> ${response.punchline}`;
  } catch (error) {
    console.log(error.name);
    setUp.innerHTML = `<b>Something went Wrong!!  😢</b>`;
  }
  jokeButton.disabled = false;
}
generateJoke();

jokeButton.addEventListener("click", () => {
  setUp.innerHTML = `<b>Loading...</b>`;
  punchLine.innerHTML = ``;
  generateJoke();
});
