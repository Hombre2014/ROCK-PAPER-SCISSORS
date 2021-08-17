function playRound(pS, cS) {
    if (pS === cS) {
        let anonce = "This is a Tie! You choise was " + pS + " and computer's also " + cS;
        return anonce;
    }
    else if (pS === "rock") {
        if (cS === "paper") {
            anonce = "You lose! Paper beats Rock.";
            return anonce;
        }
        else {
            anonce = "You win! Rock beats Scissors."
            return anonce;
        }
        return anonce;
    }
    else if (pS === "paper") {
        if (cS === "rock") {
            anonce = "You win! Paper beats Rock.";
            return anonce;
        }
        else {
            anonce = "You lose! Scissors beats Paper."
            return anonce;
        }
        return anonce;
    } else  if (cS === "rock") {
        anonce = "You lose! Rock beats Scissors.";
        return anonce;
    }
    else {
        anonce = "You win! Scissors beats Paper."
        return anonce;
    }
}

function myPlay() {
    let choise = prompt("Please, enter your weapon: Rock, paper or scissors?");
    choise = choise.toLowerCase();
    if (choise === "rock" || choise === "paper" || choise === "scissors");
    else {
        alert("You can only choose rock, paper  or scissors! Try again!")
    }
    console.log("My choise is:", choise);
    return choise;
}

function computerPlay() {
    let comp_choise = Math.floor(Math.random()*3);
    let result = "";
    if (comp_choise == 0) {
        result = "rock";
    }
    else if (comp_choise == 1) {
        result = "paper";
    }
    else if (comp_choise == 2) {
        result = "scissors";
    }
    else {
        result = "Undefined" //Error!
    }
    console.log("Comp choise is: ", result);
    return result;
}

function game () {
    plCount = 0;
    compCount = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = myPlay();
        const computerSelection = computerPlay();
        score = playRound(playerSelection, computerSelection);
        if (score.charAt(0) === "T") {
            plCount += 1;
            compCount += 1;
        }
        else if (score.charAt(4) === 'w') {
            plCount += 1;
        }
        else {
            compCount += 1;
        }
        console.log("The result is = Player: ", + plCount + " , Computer: " + compCount);
    }
    if (plCount > compCount) {
        console.log("The winner is: Player")
    }
    else if (plCount < compCount) {
        console.log("The winner is: Computer")
    } else {
        console.log("Thi was a Tie!")
    }
}

game();