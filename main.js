let playerScore = 0;
let computerScore = 0;
let annonce = "";
let result = "";
let weapons = "";

weapons = document.querySelectorAll('.weapon');
weapons.forEach(img => {
    img.addEventListener('click', function () {
        if (playerScore < 5 && computerScore < 5) {
            playRound(img.id);
        }
    })
})

function updateResults() {
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

play.addEventListener('click', function() {location.reload()});

function playRound(playerSelection) {
    const computerSelection = computerPlay();
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
        if ((playerScore == 5) || (playerScore > 5)) {
            let finalResult = document.getElementById("summary");
            finalResult.innerHTML = "You won the Game! Congratulations!";
            finalResult = document.getElementById("continue");
            finalResult.innerHTML = "If you want to play more, please, press the button!";
            document.getElementById("play").disabled = false;
        }
    }
    else {
        annonce = "You Lost! " + computerSelection + " beats " + playerSelection;
        updateAnnonce();
        computerScore += 1;
        updateResults();
        if ((computerScore == 5) || (computerScore > 5)) {
            let finalResult = document.getElementById("summary");
            finalResult.innerHTML = "You lost the Game! Play again!";
            finalResult = document.getElementById("continue");
            finalResult.innerHTML = "If you want to play more, please, press the button!";
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