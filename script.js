// console.log("Hello word");

function getComputerChoice() {
    const randomChoice = Math.random();
    if (randomChoice < 1 / 3)
        return "rock";
    else if (randomChoice < 2 / 3)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice() {
    const choice = prompt("Entre rock, paper, scissors");
    return choice.toLowerCase();
}

// console.log(getHumanChoice());

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humainChoice, computerChoice) {
        if (humainChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humainChoice === "rock" && computerChoice === "scissors") ||
            (humainChoice === "scissors" && computerChoice === "paper") ||
            (humainChoice === "paper" && computerChoice === "rock")
        ) {
            console.log(`You win! ${humainChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humainChoice}`);
            computerScore++;
        }
    }

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("==== FINAL SCORE ====");
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Human wins the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!")
    } else {
        console.log("It's a tie!")
    };
}

playGame();
