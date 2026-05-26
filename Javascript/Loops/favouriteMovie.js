let favMovie="avatar";
let flag=true;
while(flag==true){
    let guess=prompt("Guess the movie : ");
    if(guess==favMovie){
        console.log("...Congratulations! you won the game...");
        flag=false;
    }
    else if(guess=="q"){
        console.log("...Better luck next time...");
        flag=false;
    }
    else{
        console.log("...Wrong! guess again...");
    }
}

