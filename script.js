let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0) return 'rock';
    if(randomNumber === 1) return 'paper';
    return 'scissors';
}

const getHumanChoice = () => {
    let userInput = prompt("Enter your choice i.e. rock, paper, or scissors").toLowerCase();
    return userInput;
}

const playRound =(humanChoice, computerChoice) => {
    if(humanChoice === computerChoice){
        return 'It is a Tie';
    } else if((humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")){
                    humanScore ++;
                    return `Human won`
            } else {
                computerScore ++;
                return `Computer won`
            }
}

const playGame = () => {
    for(let i = 0; i < 5; i++){
        console.log(`---Round ${i + 1}---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log("Human Choice:", humanSelection);
        console.log("Computer Choice:", computerSelection);
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Score -> Human: ${humanScore}, Computer: ${computerScore}`);
    }
    if (humanScore > computerScore) {
        return "MATCH OVER: You are the ultimate champion!";
    } else if (computerScore > humanScore) {
        return "MATCH OVER: The machine has defeated you!";
    } else {
        return "MATCH OVER: It's a grand draw!";
    }
}

console.log(playGame());