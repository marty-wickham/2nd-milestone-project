var turn = 0;
var sequenceIndex = 0;
var gameSequence = [];
var playerSequence = [];
var playerIndex = 0;
var active = false;
/*
var redAudio = document.getElementById("red-audio");
var greenAudio = document.getElementById("green-audio");
var blueAudio = document.getElementById("blue-audio");
var yellowAudio = document.getElementById("yellow-audio"); */

// prefilling the sequence of numbers

function fillArray() {
    for (var i = 0; i < 30; i++) {
        gameSequence.push(Math.floor((Math.random() * 4) + 1));
    }
    console.log(gameSequence);
}

// animation functions for each button

function playRed() {
    $("#red").addClass("highlight-red");

    setTimeout(function() {
        $("#red").removeClass("highlight-red")

    }, 500);
    /* redAudio.play;*/
}

function playGreen() {
    $("#green").addClass("highlight-green");

    setTimeout(function() {
        $("#green").removeClass("highlight-green")

    }, 500);
    /*  greenAudio.play;*/
}

function playBlue() {
    $("#blue").addClass("highlight-blue");

    setTimeout(function() {
        $("#blue").removeClass("highlight-blue")

    }, 500);
    /* blueAudio.play;*/
}

function playYellow() {
    $("#yellow").addClass("highlight-yellow");

    setTimeout(function() {
        $("#yellow").removeClass("highlight-yellow")

    }, 500);
    /* yellowAudio.play;*/
}

// making sure the page has fully loaded before associating the buttons to functions.

$(document).ready(function() {

    $("#start-btn").click(function() {
        turn = 0;
        gameSequence = [];
        fillArray();
        playSequence();
    });

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
    playerIndex = 0;
    
    if (gameSequence[playerIndex] == playerSequence[playerIndex]) {
        if (playerSequence.length == turn) {
            playSequence();
        }
        else {
            playerIndex++;
        }
    }
}
