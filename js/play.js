const choices = ["rock","paper","scissors"];
function getComputerChoice(){
let computerChoice = choices[Math.floor(Math.random() * 3)];
console.log(computerChoice);
return computerChoice;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let result;
    if(playerSelection === computerSelection){
        result = "It's a draw!";
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        result = "You Lose! Paper beats Rock";
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        result = "You Win! Scissors beats Rock";
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        result = "You Win! Paper beats Rock";
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        result = "You Lose! Rock beats Scissors";
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        result = "You Lose! Scissors beats Paper";
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        result = "You Win! Rock beats Scissors";
    }else{
        result = "Invalid choice";
    }
    return result;
}
//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection,computerSelection));

function game(){
    for(let i=1;i<=5;i++){
        let playerSelection = prompt("Enter your Choice");
        console.log(playRound(playerSelection,getComputerChoice()));
    }
}
game();