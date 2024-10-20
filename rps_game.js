let computerChoice, playerChoice;
let computerScore = 0, playerScore = 0;
let roundWinner , playerChoiceFinalCase, gameWinner;
let  rounds ;

function getComputerChoice(){
   let randomChoice = Math.random();
    if (randomChoice <= 1/3) {
        return computerChoice = "rock";
    }
    else if( randomChoice > 1/3 && randomChoice <= 2/3){
        return computerChoice = "paper";
    }
    else
    return computerChoice = "scissors";
}
function getPlayerChoice(){
    playerChoice = prompt("Rock, Paper or Scissors?\n Please enter your choice.");
    return playerChoiceFinalCase = playerChoice.toLowerCase();   
}
function playRound() {
const computer = getComputerChoice();
const player = getPlayerChoice();
  switch (computer) {
    case "Rock":
      if (player === "paper") {
        roundWinner  = "player";
        playerScore = playerScore + 1;
        return  console.log("The computer played " + computerChoice +
            " and you played " + playerChoice + ". \n " + roundWinner  + " wins!"); 
      } else if (player  === "scissors") {
        roundWinner  = "computer";
        computerScore = computerScore + 1;
        return  console.log("The computer played " + computerChoice +
            " and you played " + playerChoice + ". \n " + roundWinner  + " wins!"); 
      } else if (player === "rock") {
        roundWinner  = "You tied.";
        return  console.log("The computer played " + computerChoice +
            " and you played " + playerChoice + ". \n " + roundWinner);
      } else return console.log("Incorrect input");
     break;
    case "Paper":
      if (player === "rock") {
        roundWinner  = "computer";
        computerScore = computerScore + 1;
        return  console.log("The computer played " + computerChoice +
            " and you played " + playerChoice + ". \n " + roundWinner  + " wins!"); 
      } else if (player === "scissors") {
        roundWinner  = "player";
        playerScore = playerScore + 1;
        return  console.log("The computer played " + computerChoice +
            " and you played " + playerChoice + ". \n " + roundWinner  + " wins!"); 
      } else if (player === "paper") {
        roundWinner  = "You tied.";
        return  console.log("The computer played " + computerChoice +
            " and you played " + playerChoice + ". \n " + roundWinner); 
      } else return console.log("Incorrect input");
     break;
    case "Scissors":
      if (player === "rock") {
        roundWinner  = "player";
        playerScore = playerScore + 1;
        return  console.log("The computer played " + computerChoice +
            " and you played " + playerChoice + ". \n " + roundWinner  + " wins!"); 
      } else if (player === "paper") {
        roundWinner  = "computer";
        computerScore = computerScore + 1;
        return  console.log("The computer played " + computerChoice +
            " and you played " + playerChoice + ". \n " + roundWinner  + " wins!"); 
      } else if (player === "scissors") {
        roundWinner  = "You tied.";
        return  console.log("The computer played " + computerChoice +
            " and you played " + playerChoice + ". \n " + roundWinner); 
      } else return console.log("Incorrect input");
     break;
    default:
      console.log("An error occurred!");
     break;
  } 
}
function playGame(){
    for (let gameRound = 1;  gameRound <= 5; gameRound++) {
         playRound();
         console.log(" The current score is-> Player: " + playerScore + " & Computer: " + computerScore);
    }
    if (computerScore > playerScore){
      gameWinner = "Computer";
      console.log(" Too bad! You lost the game.");
    }else if (playerScore > computerScore) {
      gameWinner = "Player";
      console.log("Congratulations! You won the game.");
    } else {
      console.log("Something went wrong!");
      playGame();
    }
    return console.log("The final winner is " + gameWinner + ".");
}
playGame();
