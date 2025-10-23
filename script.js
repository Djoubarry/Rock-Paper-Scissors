// console.log("Hello word");
const body = document.querySelector('body')

const titre = document.createElement("h1")
titre.textContent = "Rock Paper Scissors"
body.appendChild(titre);

const divContainer = document.createElement("div");
divContainer.classList.add("container")
body.appendChild(divContainer)

const btnRock = document.createElement("button");
btnRock.classList.add("btn")
btnRock.textContent = "Rock"
divContainer.appendChild(btnRock)

const btnPaper = document.createElement("button");
btnPaper.classList.add("btn")
btnPaper.textContent = "Paper"
divContainer.appendChild(btnPaper)

const btnScissors = document.createElement("button");
btnScissors.classList.add("btn")
btnScissors.textContent = "Scissors"
divContainer.appendChild(btnScissors)

const divResultats = document.createElement("div")
divResultats.classList.add("divResultats")
body.appendChild(divResultats)

const pResult = document.createElement("p")
pResult.textContent = "Click the button the begging game"
pResult.classList.add('pResult')
divResultats.appendChild(pResult)

const scoreResult = document.createElement("p")
scoreResult.textContent = "Score → You: 0 | Computer: 0"
scoreResult.classList.add('scoreResult')
divResultats.appendChild(scoreResult)

//Style
const head = document.querySelector('head')


const style = document.createElement("style");
style.textContent = `
    body { font-family: Arial; text-align: center; margin-top: 70px; background: #f0f0f0}
    .btn { margin: 10px; padding: 10px 20px ; font-size: 19px; cursor: pointer; border-radius: 10px}
    .btn:hover {background-color: gray}
    .divResultats { margin-top: 20px; font-size: 18px;}
    .scoreResult { color: #ba0c0c}
`
head.appendChild(style)


function getComputerChoice() {
    const randomChoice = Math.random();
    if (randomChoice < 1 / 3)
        return "rock";
    else if (randomChoice < 2 / 3)
        return "paper";
    else
        return "scissors";
}

// function getHumanChoice() {
//     const choice = prompt("Entre rock, paper, scissors");
//     return choice.toLowerCase();
// }

// console.log(getHumanChoice());

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humainChoice, computerChoice) {
        if (humainChoice === computerChoice) {
            pResult.textContent = `it's tie : You are choice ${humainChoice}.`
        } else if (
            (humainChoice === "rock" && computerChoice === "scissors") ||
            (humainChoice === "scissors" && computerChoice === "paper") ||
            (humainChoice === "paper" && computerChoice === "rock")
        ) {
            pResult.textContent = (`You win! ${humainChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            pResult.textContent = (`You lose! ${computerChoice} beats ${humainChoice}`);
            computerScore++;
        }

            console.log("==== FINAL SCORE ====");
        scoreResult.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

        if (humanScore === 5 || computerScore === 5) {
                if (humanScore > computerScore) {
                pResult.textContent = ("You wins the game!");
            } else if (computerScore > humanScore) {
                pResult.textContent("Computer wins the game!")
            } else {
                pResult.textContent = ("It's a tie!")
            };
        }
       
    }

    

//Button 

btnRock.addEventListener("click", () => playRound("rock", getComputerChoice()) )
btnPaper.addEventListener("click", () => playRound("paper", getComputerChoice()))
btnScissors.addEventListener("click", () => playRound("scissors", getComputerChoice() ))



   

