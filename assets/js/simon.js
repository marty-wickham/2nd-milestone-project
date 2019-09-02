var turn = 0; // keeps track of the current turn
var sequenceIndex = 0; // keeps track of the animation sequence
var gameSequence = []; // stores the games sequence
var playerSequence = []; // stores the players sequence
var playerIndex = 0; // keeps track of the players current position in the sequnce
var active = false; // whether or not the buttons are activated
var strict = false; // whether strict is true or not
var start = false; // whther the game has started or not

const redAudio = document.getElementById("red-audio"); // game sounds
const greenAudio = document.getElementById("green-audio");
const blueAudio = document.getElementById("blue-audio");
const yellowAudio = document.getElementById("yellow-audio");
const gameOver = document.getElementById("game-over");

// function to prefill the sequence of numbers

function fillArray() {
    for (var i = 0; i < 10; i++) {
        gameSequence.push(Math.floor((Math.random() * 4) + 1));
    }
    console.log(gameSequence);
}

// animation and sound functions for each button

function playRed() {
    redAudio.play();
    $("#red").addClass("highlight-red");

    setTimeout(function() {
        $("#red").removeClass("highlight-red")
    }, 400);
}

function playGreen() {
    greenAudio.play();
    $("#green").addClass("highlight-green");

    setTimeout(function() {
        $("#green").removeClass("highlight-green")
    }, 400);
}

function playBlue() {
    blueAudio.play();
    $("#blue").addClass("highlight-blue");

    setTimeout(function() {
        $("#blue").removeClass("highlight-blue")
    }, 400);
}

function playYellow() {
    yellowAudio.play();
    $("#yellow").addClass("highlight-yellow");

    setTimeout(function() {
        $("#yellow").removeClass("highlight-yellow")
    }, 400);
}

// making sure the page has fully loaded before associating the buttons to functions.

$(document).ready(function() {

    $("#start-btn").click(function() {

        if (start === false) { // The start button will also act as a reset button.
            start = true;
            fillArray();
            playSequence();
            console.log("strict is " + strict);
            console.log("start is " + start);

            $("#counter").text(0);
            $(this).addClass("highlight-red");
            $("#counter-display").addClass("highlight-red");
        }
        else {
            resetGame();
        }
    });

    $("#strict-btn").click(function() {

        if (start === false) { // Changing strict mode should only be available if the game has not yet been started.

            if (strict === true) {
                strict = false;
                console.log("strict is " + strict);
                $(this).removeClass("highlight-yellow");
            }
            else {
                $(this).addClass("highlight-yellow");
                strict = true;
                console.log("strict is " + strict);
            }
        }
    });

    $(".col-button").click(function() {                 // What happens when the the player can press each button.

        var button = $(this).attr("id");

        if (button == "red" && active == true) {
            playRed();
            playerSequence.push(1);
            checkPlayerTurn();
            console.log(playerSequence);
        }

        if (button == "green" && active == true) {
            playGreen();
            playerSequence.push(2);
            checkPlayerTurn();
            console.log(playerSequence);
        }

        if (button == "blue" && active == true) {
            playBlue();
            playerSequence.push(3);
            checkPlayerTurn();
            console.log(playerSequence);
        }

        if (button == "yellow" && active == true) {
            playYellow();
            playerSequence.push(4);
            checkPlayerTurn();
            console.log(playerSequence);
        }
    });
});


function playSequence() {
    sequenceIndex = 0;                      // These variables must be reset in order to play the sequence from the beginning each time
    playerIndex = 0;
    playerSequence = [];
    console.log("The turn is " + turn);
    active = false;

    var animateInterval = setInterval(function() {

        if (sequenceIndex === turn) {
            active = true;
            clearInterval(animateInterval);
            console.log("active is " + active);
        }
        if (gameSequence[sequenceIndex] === 1) {
            playRed();
        }
        if (gameSequence[sequenceIndex] === 2) {
            playGreen();
        }
        if (gameSequence[sequenceIndex] === 3) {
            playBlue();
        }
        if (gameSequence[sequenceIndex] === 4) {
            playYellow();
        }
        sequenceIndex++;
        console.log("sequenceIndex is " + sequenceIndex);

    }, 800);
}


function checkPlayerTurn() {

    if (gameSequence[playerIndex] === playerSequence[playerIndex]) {

        playerIndex++;

        if (playerSequence.length === turn + 1) {
            active = false;
            turn++;
            $("#counter").text(turn);
            setTimeout(playSequence, 1000);

            if (playerSequence.length === gameSequence.length) {

                $("#counter").text(turn);
                setTimeout(function() {
                    alert("You win!!!");
                }, 250);

                setTimeout(function() {
                    resetGame();
                }, 2000);
            }
        }
    }
    else if (strict == true) {

        active = false;
        gameOver.play();
        setTimeout(function() {
            alert("Game over! Your score is " + turn);
        }, 250);

    }
    else {

        setTimeout(function() {
            alert("Wrong move! Try again.");
        }, 250);
        active = false;
        setTimeout(playSequence, 1000);
    }
}

function resetGame() {          // resets the game
    active = false;
    strict = false;
    start = false;
    turn = 0;
    sequenceIndex = 0;
    gameSequence = [];
    playerSequence = [];
    playerIndex = 0;


    $("#counter").text("--");
    $("#start-btn").removeClass("highlight-red");
    $("#counter-display").removeClass("highlight-red");
    $("#strict-btn").removeClass("highlight-yellow");
}
