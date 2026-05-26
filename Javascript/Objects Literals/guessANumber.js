let upperLimit = prompt("...Enter the upper limit...");
let random = Math.floor(Math.random() * (upperLimit)) + 1;

while (true) {
  let guess = prompt("...ENTER HERE...");
  if (guess == random) {
    console.log(`...Congratulations! You did it...`);
    break;
  } 
  else if (guess == "q") {
    console.log("...Better luck! next time...");
    console.log(`...Correct number was ${random}...`);
    break;
  } 
  else if(guess<random){
    alert("...your guess is smaller...");
  }
  else {
    alert("...your guess is larger...");
  }
}

