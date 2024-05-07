const playerSelection = "";
const computerSelection = "";

// SELECTION_LIST has extra "rock" to allow win condition to check against the values at index and index+1
const SELECTION_LIST = ["rock","paper","scissors", "rock"];

// Function to play a single round of Rock-Paper-Scissors
function rockPaperScissors(playerSelection, computerSelection = getComputerChoice()){
    playerSelection = playerSelection.toLowerCase();
    if(SELECTION_LIST.includes(playerSelection)){
        console.log("The computer throws " + computerSelection);

        if (playerSelection === computerSelection){
            return "draw"
        }
        return computerSelection == SELECTION_LIST[SELECTION_LIST.indexOf(playerSelection)+1] ? 
             `You LOSE: ${computerSelection} beats ${playerSelection}!!` : 
             `You WIN: ${playerSelection} beats ${computerSelection}!!`
        
    } else {
        console.log("Inappropriate input");
    }
}


//  function to assign computer choice
function getComputerChoice(){
    return SELECTION_LIST[Math.floor(Math.random() * 3)];
}

