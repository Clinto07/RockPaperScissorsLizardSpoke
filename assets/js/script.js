const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages =  document.getElementById("messages");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

for (let button of buttons) {
    button.addEventListener("click", function() {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playersChoice);
    });
}

function playGame(playersChoice) {

playerImage.src = `assets/images/${choices[playerChoice]}.jpg`;
playerImage.alt = choices[playerChoice];

let computerChoice = Math.floor(Math.random() *5);

computerImage.src = `assets/images/${choices[computerChoice]}.jpg`;
computerImage.alt = choices[computerImage];

let result = checkWinner(choices[computerChoice], choices[playerChoice]);
}

function checkWinner() {}
    