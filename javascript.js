const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resultsBox = document.querySelector("#results");
const scoreBox = document.querySelector("#score");
const compChoiceOutput = document.querySelector("#computerThrows");


const playerSelection = "";
const computerSelection = "";

// SELECTION_LIST has extra "rock" to allow win condition to check against the values at index and index+1
const SELECTION_LIST = ["rock","paper","scissors", "rock"];

let wins = 0;
let losses = 0;

// Function to play a single round of Rock-Paper-Scissors
function rockPaperScissors(playerSelection, computerSelection = getComputerChoice()){
    playerSelection = playerSelection.toLowerCase();
    if(SELECTION_LIST.includes(playerSelection)){
        compChoiceOutput.textContent="The computer throws " + computerSelection;
        

        if (playerSelection === computerSelection){
             resultsBox.textContent="Draw!"
        }else{resultsBox.textContent= computerSelection == SELECTION_LIST[SELECTION_LIST.indexOf(playerSelection)+1] ? 
             `You LOSE: ${computerSelection} beats ${playerSelection}!!` : 
             `You WIN: ${playerSelection} beats ${computerSelection}!!`
        }
        
    } else {
        compChoiceOutput.textContent="You broke me and I'm not sure how..."
    }
    // score tracking
    if(resultsBox.textContent.includes("WIN")){
        wins += 1;
    }else if(resultsBox.textContent.includes("LOSE")){
        losses += 1;
    }
    scoreBox.textContent=`SCORE - Player: ${wins} / COMP: ${losses}`
}


//  function to assign computer choice
function getComputerChoice(){
    return SELECTION_LIST[Math.floor(Math.random() * 3)];
}

rockButton.onclick = () => rockPaperScissors("rock");
paperButton.onclick = () => rockPaperScissors("paper");
scissorsButton.onclick = () => rockPaperScissors("paper");
