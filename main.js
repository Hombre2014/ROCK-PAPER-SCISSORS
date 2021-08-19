let playerScore = 0;
let computerScore = 0;
let annonce = "";

const weapons = document.querySelectorAll('.weapon');

weapons.forEach(img => {
    img.addEventListener('click', function () {
        playRound(img.id);
    })
})

function updateResults() {
    let result = "";
    result = document.getElementById("player");
    result.innerHTML = playerScore;
    result = document.getElementById("computer");
    result.innerHTML = computerScore;
}

function updateAnnonce() {
    let txt = "";
    txt = document.getElementById("roundResult");
    txt.innerHTML = annonce;
}

play.addEventListener('click', function() {location.reload()})

// function playNewGame() {
//     btn = document.querySelector("button");
//     document.addEventListener("click", location.reload());
// }

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    console.log("Player Selection: ", playerSelection);
    console.log("Computer Selection: ", computerSelection);
    if (playerSelection === computerSelection) {
        annonce = "This is a Tie! Player: " + playerSelection + ", Computer: " + computerSelection;
        updateAnnonce();
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        annonce = "You Win! " + playerSelection + " beats " + computerSelection;
        updateAnnonce();
        playerScore += 1;
        updateResults();
        if (playerScore == 5) {
            let finalResult = document.getElementById("summary");
            finalResult.innerHTML = "You won the Game! Congratulations!";
            document.getElementById("play").disabled = false;
        }
    }
    else {
        annonce = "You Lost! " + computerSelection + " beats " + playerSelection;
        updateAnnonce();
        computerScore += 1;
        updateResults();
        if (computerScore == 5) {
            let finalResult = document.getElementById("summary");
            finalResult.innerHTML = "You lost the Game! Play again!";
            document.getElementById("play").disabled = false;
        }
    }
}

function computerPlay() {
    compChoise = Math.floor(Math.random() * 3);
    switch (compChoise) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}