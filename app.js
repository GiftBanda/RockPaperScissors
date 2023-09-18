const computerChoice = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const drawScoreDisplay = document.getElementById("draw-score");

const possibleChoices = document.querySelectorAll("button");

let userChoice;
let userScore = 0;
let computerScore = 0;
let drawScore = 0;

//console.log(possibleChoices);

possibleChoices.forEach((possibleChoice) =>
    possibleChoice.addEventListener("click", (e) => {
        userChoice = e.target.id;
        console.log(userChoice);
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        getResult(userChoice, computerChoice);
    })
);

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerChoice.innerHTML = "rock";
    }
    if (randomNumber === 2) {
        computerChoice.innerHTML = "paper";
    }
    if (randomNumber === 3) {
        computerChoice.innerHTML = "scissors";
    }
}

function getResult(userChoice, computerChoice) {
    switch (userChoice + computerChoice.innerHTML) {
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
            win(userChoice, computerChoice.innerHTML);
            break;
        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
            lose(userChoice, computerChoice.innerHTML);
            break;
        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
            draw(userChoice, computerChoice.innerHTML);
            break;
    }
}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
    drawScoreDisplay.innerHTML = drawScore;
    resultDisplay.innerHTML = `${userChoice} beats ${computerChoice}. You win!`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
    drawScoreDisplay.innerHTML = drawScore;
    resultDisplay.innerHTML = `${computerChoice} beats ${userChoice}. You lose!`;
}

function draw(userChoice, computerChoice) {
    drawScore++;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
    drawScoreDisplay.innerHTML = drawScore;
    resultDisplay.innerHTML = `${computerChoice} equals ${userChoice}. It's a draw!`;
}

// Path: index.html
