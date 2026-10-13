let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("playerChoice").textContent = "You chose: " + playerChoice;
  document.getElementById("computerChoice").textContent = "Computer chose: " + computerChoice;

  let winner = "";

  if (playerChoice === computerChoice) {
    winner = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    winner = "You win!";
    playerScore++;
  } else {
    winner = "Computer wins!";
    computerScore++;
  }

  document.getElementById("winner").textContent = "Result: " + winner;
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}
