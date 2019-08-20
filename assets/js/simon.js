var turn = 0; // keeps track of the current turn
var sequenceIndex = 0; // keeps track of the animation sequence
var gameSequence = []; // stores the games sequence
var playerSequence = []; // stores the players sequence
var playerIndex = 0; // keeps track of the players current position in the sequnce
var active = false; // whether or not the buttons are activated
var strict = false;

const redAudio = document.getElementById("red-audio"); // game sounds
const greenAudio = document.getElementById("green-audio");
const blueAudio = document.getElementById("blue-audio");
const yellowAudio = document.getElementById("yellow-audio");
const gameOver = document.getElementById("game-over");

// function to prefill the sequence of numbers

function fillArray() {
    for (var i = 0; i < 30; i++) {
        gameSequence.push(Math.floor((Math.random() * 4) + 1));
    }
    console.log(gameSequence);
}

// animation functions for each button

function playRed() {
    redAudio.play();

    $("#red").addClass("highlight-red");

    setTimeout(function() {
        $("#red").removeClass("highlight-red")

    }, 500);
}

function playGreen() {
    greenAudio.play();

    $("#green").addClass("highlight-green");

    setTimeout(function() {
        $("#green").removeClass("highlight-green")

    }, 500);
}

function playBlue() {
    blueAudio.play();

    $("#blue").addClass("highlight-blue");

    setTimeout(function() {
        $("#blue").removeClass("highlight-blue")

    }, 500);
}

function playYellow() {
    yellowAudio.play();

    $("#yellow").addClass("highlight-yellow");

    setTimeout(function() {
        $("#yellow").removeClass("highlight-yellow")

    }, 500);
}

// making sure the page has fully loaded before associating the buttons to functions.

$(document).ready(function() {


    $("#start-btn").click(function() {
        $("#counter").text(0);
        turn = 0;
        gameSequence = [];
        fillArray();
        playSequence();
        console.log(strict);
        
        $(this).addClass("highlight-red");
    });

    $("#strict-btn").click(function() {
        $(this).addClass("highlight-yellow");
        strict = true;
    })

    $(".col-button").click(function() {

        button = $(this).attr("id");

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
    sequenceIndex = 0;
    playerIndex = 0;
    playerSequence = [];
    turn++;
    console.log(turn);
    active = false;

    var animateInterval = setInterval(function() {
        if (sequenceIndex === turn - 1) {
            active = true;
            clearInterval(animateInterval);
            console.log(active);
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
        console.log(sequenceIndex);

    }, 800);
}


function checkPlayerTurn() {
    playerIndex++;

    if (gameSequence[playerIndex - 1] == playerSequence[playerIndex - 1]) {

        if (playerSequence.length == turn) {
            $("#counter").text(turn);
            setTimeout(playSequence, 1000);
        }
        return;
    }
    else {
        active = false;
        gameOver.play();
    }
}
