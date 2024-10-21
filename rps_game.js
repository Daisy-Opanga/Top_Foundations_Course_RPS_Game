let playerChoice, computerChoice;
let computerScore = 0, playerScore = 0;
let roundWinner, gameWinner;
let msg;

const resultsDiv = document.querySelector(".results-container");
const playerChoiceBtns = document.querySelectorAll("button");

function playGame() {
    playerChoiceBtns.forEach((button) => {
      button.addEventListener("click", () =>{
        if (playerScore < 5 && computerScore < 5) {
        playerChoice = button.className;
        computerChoice = getComputerChoice(); 
        playGameRound(playerChoice,computerChoice);
        displayResults();
        if (playerScore === 5 || computerScore === 5){
          displayFinalWinner();
        }
      }else {
        resetGame();
      } 
      });
    });
  } 

function getComputerChoice(){
   let randomChoice = Math.random();
    if (randomChoice <= 1/3) {
        return "rock";
    }
    else if( randomChoice > 1/3 && randomChoice <= 2/3){
        return "paper";
    }
    else
    return "scissors";
}

function playGameRound(playerChoice, computerChoice){
  if (playerChoice === computerChoice) {
    msg = "It's a tie!";
  } else if (playerChoice === "rock" && computerChoice === "scissors" ||
    playerChoice === "scissors" && computerChoice === "paper" || 
    playerChoice === "paper" && computerChoice === "rock"){
    playerScore++;
    roundWinner = "player";
    msg = "You win!";
  } else {
    computerScore++;
    roundWinner = "computer";
    msg = "You lose!";
  } 
}

function displayResults(){
  resultsDiv.innerHTML = "";
  const para1 = document.createElement("p");
  para1.textContent = `Player: ${playerChoice} vs Computer: ${computerChoice}. ${msg}`;
  const para2 = document.createElement("p");
  para2.textContent = `The current scores are: Player ${playerScore} vs Computer ${computerScore}`;
  resultsDiv.append(para1, para2);
}

function displayFinalWinner() {
  playerScore > computerScore ? gameWinner = "Player" : gameWinner = "Computer";

  const para3 = document.createElement("p");
  para3.textContent = `The final winner is the ${gameWinner}.`;
  const newGame = document.createElement("button");
  resultsDiv.append(para3);
}
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  gameWinner = "";
  roundWinner = "";
  resultsDiv.innerHTML = "";
}
playGame();