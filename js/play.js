const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('#results');
const overall = document.querySelector('#overall');
const gameOver = document.querySelector('#gameOver');
const final = document.querySelector('#final');
rock.addEventListener('click', function (e) {
    game("rock");
  });
  paper.addEventListener('click', function (e) {
    game("paper");
  });
  scissors.addEventListener('click', function (e) {
    game("scissors");
  });
  const choices = ["rock","paper","scissors"];
  let you = 0;
  let computer = 0;
  function getComputerChoice(){
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    //console.log(computerChoice);
    return computerChoice;
    }

    function playRound(playerSelection, computerSelection){
        playerSelection = playerSelection.toLowerCase();
        let result;
        if(playerSelection === computerSelection){
            result = "It's a draw!";
            you++;
            computer++;
        }else if(playerSelection === "rock" && computerSelection === "paper"){
            result = "You Lose! Paper beats Rock";
            computer++;
        }else if(playerSelection === "scissors" && computerSelection === "paper"){
            result = "You Win! Scissors beats Rock";
            you++;
        }else if(playerSelection === "paper" && computerSelection === "rock"){
            result = "You Win! Paper beats Rock";
            you++;
        }else if(playerSelection === "scissors" && computerSelection === "rock"){
            result = "You Lose! Rock beats Scissors";
            computer++;
        }else if(playerSelection === "paper" && computerSelection === "scissors"){
            result = "You Lose! Scissors beats Paper";
            computer++;
        }else if(playerSelection === "rock" && computerSelection === "scissors"){
            result = "You Win! Rock beats Scissors";
            you++;
        }else{
            result = "Invalid choice";
        }
        return result;
    }
    let i = 0;
    function game(playerSelection){
        if(i<5){
            results.textContent = playRound(playerSelection,getComputerChoice());
            i++;
            overall.textContent = `You: ${you} Computer: ${computer}`;
        }else{
            gameOver.textContent = "Game Over!";
            if(you > computer){
                final.style.color = 'green';
                final.textContent = "You Win!";
            }else if (you === computer){
                final.style.color = 'blue';
                final.textContent = "It's a Draw!";
            }else{
                final.textContent = "You Lose!";
            }
        }
    }
    