var score = 0;
var gameSequence = [];
var playerSequence = [];
var start = true;


function playRed() {
    $("#red").addClass("highlight-red");

    setTimeout(function() {
        $("#red").removeClass("highlight-red")

    }, 500);
}

function playGreen() {
    $("#green").addClass("highlight-green");

    setTimeout(function() {
        $("#green").removeClass("highlight-green")

    }, 500);
}

function playBlue() {
    $("#blue").addClass("highlight-blue");

    setTimeout(function() {
        $("#blue").removeClass("highlight-blue")

    }, 500);
}

function playYellow() {
    $("#yellow").addClass("highlight-yellow");

    setTimeout(function() {
        $("#yellow").removeClass("highlight-yellow")

    }, 500);
}


$(document).ready(function() {

    $("#start-btn").click(function() {

        playSequence();
    });

    if (start == true) {

        $(".col-button").click(function() {

            button = $(this).attr("id");

            if (button == "red") {
                playRed();
                playerSequence.push(1);
                console.log(playerSequence);
            }

            if (button == "green") {
                playGreen();
                playerSequence.push(2);
                console.log(playerSequence);
            }

            if (button == "blue") {
                playBlue();
                playerSequence.push(3);
                console.log(playerSequence);
            }

            if (button == "yellow") {
                playYellow();
                playerSequence.push(4);
                console.log(playerSequence);
            }
        });
    }
});

function playSequence() {

    for (var i = 0; i < score + 1; i++) {
        
        gameSequence.push(Math.floor((Math.random() * 4) + 1));

        if (gameSequence[i] === 1) {
            playRed();
        }
        if (gameSequence[i] === 2) {
            playGreen();
        }
        if (gameSequence[i] === 3) {
            playBlue();
        }
        if (gameSequence[i] === 4) {
            playYellow();
        }
    }
    console.log(gameSequence);
    checkPlayerTurn();
}

function checkPlayerTurn() {
    
    if (gameSequence == playerSequence) {
        score++;
    }
}












