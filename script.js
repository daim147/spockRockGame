import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js";
// Player
const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");
// Computer
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

const resultText = document.getElementById("resultText");
const allGameIcon = document.querySelectorAll("#player .far, #computer .far");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

let computerSelected = "";
let playerScoreNumber = 0;
let computerScoreNumber = 0;

// Reset All selected icons
function resetSelected() {
  allGameIcon.forEach((icon) => {
    icon.classList.remove("selected");
  });
}

// Reset score and both choice
function resetAll() {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = "";
  computerChoiceEl.textContent = "";
  resultText.textContent = "";
  resetSelected();
}
window.resetAll = resetAll;

// Computer Random Choice
function computerChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber <= 0.2) {
    computerSelected = "rock";
  } else if (computerChoiceNumber <= 0.4) {
    computerSelected = "paper";
  } else if (computerChoiceNumber <= 0.6) {
    computerSelected = "scissors";
  } else if (computerChoiceNumber <= 0.8) {
    computerSelected = "lizard";
  } else {
    computerSelected = "spock";
  }
}

// Add selected to computerChoice

function selectComputer() {
  switch (computerSelected) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
}
// Check Result increase scores, update resultText
function updateScore(playerChoice) {
  if (playerChoice === computerSelected) {
    resultText.textContent = "It's a tie.";
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.includes(computerSelected)) {
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
      resultText.textContent = "You Lose 😥😥";
    } else {
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
      resultText.textContent = "You Won🎉🎉";
      startConfetti();
    }
  }
}

// Call function to process turn
function checkResult(playerChoice) {
  stopConfetti();
  removeConfetti();
  resetSelected();
  setTimeout(() => {
    computerChoice();
    selectComputer();
    updateScore(playerChoice);
  }, 200);
}

// Passing player selection value

function select(playerChoice) {
  // Add selected playerchoice
  checkResult(playerChoice);
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
}

window.select = select;
