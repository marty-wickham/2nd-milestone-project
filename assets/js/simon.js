var score = 0;
var gameSequence = [];
var playerSequence = [];
var start = true;
var redAudio = document.getElementById("red-audio");
var greenAudio = document.getElementById("green-audio");
var blueAudio = document.getElementById("blue-audio");
var yellowAudio = document.getElementById("yellow-audio");


function fillArray() {
    for (var i = 0; i < 30; i++) {
        gameSequence.push(Math.floor((Math.random() * 4) + 1));
    }
    console.log(gameSequence);
}

fillArray();


function playRed() {
    $("#red").addClass("highlight-red");

    setTimeout(function() {
        $("#red").removeClass("highlight-red")

    }, 500);
    redAudio.play;
}

function playGreen() {
    $("#green").addClass("highlight-green");

    setTimeout(function() {
        $("#green").removeClass("highlight-green")

    }, 500);
    greenAudio.play;
}

function playBlue() {
    $("#blue").addClass("highlight-blue");

    setTimeout(function() {
        $("#blue").removeClass("highlight-blue")

    }, 500);
    blueAudio.play;
}

function playYellow() {
    $("#yellow").addClass("highlight-yellow");

    setTimeout(function() {
        $("#yellow").removeClass("highlight-yellow")

    }, 500);
    yellowAudio.play;
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

    for (var i = 0; i < gameSequence.length; i++) {

      
      

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
    
    checkPlayerTurn();
}

/*
function checkPlayerTurn() {

    if (gameSequence == playerSequence) {
        score++;
    }
}

*/
