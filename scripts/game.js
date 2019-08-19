let results = 0;
let ties = 0;
let lost = 0;
let wins = 0;
const options = ["Scissors", "Paper", "Rock", "Lizard", "Spock"];
const history = $("#resultsHistory");
game = function (ele) {
    _this = $(this);
    playerChoice = parseInt(_this.attr("data-btn"));
    console.log("Player choice is " + playerChoice);
    $(".gameBtn").attr("disabled", "");
    compChoice = Math.floor(Math.random() * 5) + 1;
    console.log("Computer choice is " + compChoice);
    let status = whoWon(playerChoice, compChoice);
    wonHow(playerChoice, compChoice, results);

    $(".gameBtn").removeAttr("disabled");
}

whoWon = function (player, computer) {
    if (player == computer) {
        results = 1;
        ties+=1;
        $("#tie").text(ties)
        
    }
    else if (computer == player + 1 || computer == player + 3) {
        results = 2;
        wins+=1;
        $("#win").text(wins);
    }
    else {
        results = 3;
        lost+=1;
        $("#lost").text(lost);
    }
}
wonHow = function (player, computer, status) {
    console.log(status);
    computerName = options[computer - 1];
    playerName = options[player - 1];
    console.log(player + " " + playerName);
    console.log(computer + " " + computerName);
    if (status == 1) {
        console.log("tie");
        history.prepend($("<div>").addClass("resultText tieText").text("You Tied!"));
    }
    else if (status == 2) {
        console.log("win results");
        switch (playerName) {
            case "Scissors":
                if (computer == 2) {
                    history.prepend($("<div>").addClass("resultText winText").text("You Won! Scissors cuts Paper!"));
                    break;
                }

                if (computer == 4) {
                    history.prepend($("<div>").addClass("resultText winText").text("You Won! Scissors decapitates Lizard!"));
                    break;
                }

            case "Paper":
                if (computer == 3) {
                    history.prepend($("<div>").addClass("resultText winText").text("You Won! Paper covers Rock!"));
                    break;
                }
                if (computer == 5) {
                    history.prepend($("<div>").addClass("resultText winText").text("You Won! Paper disproves Spock!"));
                    break;
                }
            case "Rock":
                if (computer == 4) {
                    history.prepend($("<div>").addClass("resultText winText").text("You Won! rock crushes lizard!"));
                    break;
                }
                if (computer == 1) {
                    history.prepend($("<div>").addClass("resultText winText").text("You Won! rock crushes scissors!"));
                    break;
                }
            case "Lizard":
                if (computer == 2) {
                    history.prepend($("<div>").addClass("resultText winText").text("You Won! Lizard eats Paper!"));
                    break;
                }
                if (computer == 5) {
                    history.prepend($("<div>").addClass("resultText winText").text("You Won! Lizard poisons Spock!"));
                    break;
                }
            case "Spock":
                if (computer == 1) {
                    history.prepend($("<div>").addClass("resultText winText").text("You Won! Spock smashes Scissors!"));
                    break;
                }
                if (computer == 3) {
                    history.prepend($("<div>").addClass("resultText winText").text("You Won! Spock vaporizes Rock!"));
                    break;
                }

        }
    }
    else if (status == 3) {
        console.log("lose results")
        switch (playerName) {
            case "Scissors":
                if (computer == 3) {
                    history.prepend($("<div>").addClass("resultText lostText").text("You Lost! Rock crushes Scissors"));
                    break;
                }

                if (computer == 5) {
                    history.prepend($("<div>").addClass("resultText lostText").text("You Lost! Spock smashes Scissors"));
                    break;
                }

            case "Paper":
                if (computer == 1) {
                    history.prepend($("<div>").addClass("resultText lostText").text("You Lost! Scissors cuts Paper"));
                    break;
                }
                if (computer == 4) {
                    history.prepend($("<div>").addClass("resultText lostText").text("You Lost! Lizard eats Paper"));
                    break;
                }
            case "Rock":
                if (computer == 2) {
                    history.prepend($("<div>").addClass("resultText lostText").text("You Lost! Paper covers Rock"));
                    break;
                }
                if (computer == 5) {
                    history.prepend($("<div>").addClass("resultText lostText").text("You Lost! Spock vaporize Rock"));
                    break;
                }
            case "Lizard":
                if (computer == 1) {
                    history.prepend($("<div>").addClass("resultText lostText").text("You Lost! Scissors decapitates Lizard"));
                    break;
                }
                if (computer == 3) {
                    history.prepend($("<div>").addClass("resultText lostText").text("You Lost! Rock crushes Lizard"));
                    break;
                }
            case "Spock":
                if (computer == 2) {
                    history.prepend($("<div>").addClass("resultText lostText").text("You Lost! Paper disproves Spock"));
                    break;
                }
                if (computer == 4) {
                    history.prepend($("<div>").addClass("resultText lostText").text("You Lost! Lizard posions Spock"));
                    break;
                }
        }
    }
}


$(document).on("click", "button.gameBtn", game);