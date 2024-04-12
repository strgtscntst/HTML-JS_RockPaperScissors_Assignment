const playerSelection = "";
const computerSelection = "";
let selectionList = ["rock","paper","scissors"];

function rockPaperScissors(playerSelection, computerSelection = getComputerChoice()){
    console.log(computerSelection);
    if (playerSelection === computerSelection){
        return "draw"
    }
    if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            return "loss"
        }
        if (computerSelection === "scissors"){
            return "win"
        }
    }
    if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
            return "loss"
        }
        if (computerSelection === "rock"){
            return "win"
        }
    }
    if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            return "loss"
        }
        if (computerSelection === "paper"){
            return "win"
        }
    }
}


//  function to assign computer choice
function getComputerChoice(){
    return selectionList[Math.floor(Math.random() * 3)];
}

//  Function to play 5 rounds
function playGame(){
    rockPaperScissors
}
