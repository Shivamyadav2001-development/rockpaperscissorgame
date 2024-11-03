let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];
const resultText = document.getElementById("resultText");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const computerChoiceDisplay = document.getElementById("computerChoice"); // New element

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const winner = determineWinner(playerChoice, computerChoice);
        updateScores(winner);
        displayResult(playerChoice, computerChoice, winner);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "draw";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

function updateScores(winner) {
    if (winner === "player") {
        playerScore++;
    } else if (winner === "computer") {
        computerScore++;
    }
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function displayResult(player, computer, winner) {
    computerChoiceDisplay.textContent = computer === "rock" ? "🪨" : (computer === "paper" ? "📄" : "✂️");
    
    if (winner === "draw") {
        resultText.textContent = `It's a draw! You both chose ${player}.`;
    } else if (winner === "player") {
        resultText.textContent = `You win! ${player.charAt(0).toUpperCase() + player.slice(1)} beats ${computer}.`;
    } else {
        resultText.textContent = `You lose! ${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${player}.`;
    }
}

