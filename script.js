const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const outcomeTxt = document.querySelector('.round-outcome');
const scoreTxt = document.querySelector('.score-display');
const winnerTxt = document.querySelector('#final-winner');

rockBtn.addEventListener("click",() => playRound('rock', getComputerChoice()));
paperBtn.addEventListener("click",() => playRound('paper', getComputerChoice()));
scissorsBtn.addEventListener("click",() => playRound('scissors', getComputerChoice()));

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0) return 'rock';
    if(randomNumber === 1) return 'paper';
    return 'scissors';
}

const playRound =(humanChoice, computerChoice) => {
    if(humanChoice === 5 || computerChoice === 5) return;
    if(humanChoice === computerChoice){
        outcomeTxt.textContent = "It's a tie!"
    }
    else if((humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")){
                    humanScore ++;
                    outcomeTxt.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            } else {
                computerScore ++;
                outcomeTxt.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            }
        scoreTxt.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
        if (humanScore === 5) {
        winnerTxt.textContent = "MATCH OVER: You are the ultimate champion!";
    } else if (computerScore === 5) {
        winnerTxt.textContent = "MATCH OVER: The machine has defeated you!";
    }
}
