const playerSelection = "";
const computerSelection = "";
let selectionList = ["rock","paper","scissors"];

// Function to play a single round of Rock-Paper-Scissors
function rockPaperScissors(playerSelection, computerSelection = getComputerChoice()){
    playerSelection = playerSelection.toLowerCase();
    if(selectionList.includes(playerSelection)){
        console.log("The computer throws " + computerSelection);

        if (playerSelection === computerSelection){
            return "draw"
        }
        if (playerSelection === "rock"){
            if (computerSelection === "paper"){
                return "You lose! Paper beats Rock!"
            }
            if (computerSelection === "scissors"){
                return "You win! Rock beats Scissors!"
            }
        }
        if (playerSelection === "paper"){
            if (computerSelection === "scissors"){
                return "You lose! Scissors beats Paper!"
            }
            if (computerSelection === "rock"){
                return "You win! Paper beats Rock!"
            }
        }
        if (playerSelection === "scissors"){
            if (computerSelection === "rock"){
                return "You lose! Rock beats Scissors!"
            }
            if (computerSelection === "paper"){
                return "You win! Scissors beats Paper!"
            }
        }
    } else {
        console.log("Inappropriate input");
    }
}


//  function to assign computer choice
function getComputerChoice(){
    return selectionList[Math.floor(Math.random() * 3)];
}

//  Function to play 5 rounds
function playGame(){
    console.log(rockPaperScissors(prompt()))
    console.log(rockPaperScissors(prompt()))
    console.log(rockPaperScissors(prompt()))
    console.log(rockPaperScissors(prompt()))
    console.log(rockPaperScissors(prompt()))
}
