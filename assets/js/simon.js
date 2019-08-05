var score = 0;
var gameSequence = [];
var playerSequence = [];

function fillArray() {
    for (var i = 0; i < 30; i++) {
        gameSequence.push(Math.floor((Math.random() * 4) + 1));
    }
    console.log(gameSequence);
}

fillArray();


$(document).ready(function() {

    $("#start-btn").click(function() {
        startGame();
    });

    $(".col-button").click(function() {
        
        button = $(this).attr("id");
        
        if (button == "red") {
            playRed();
            playerSequence.push(0);
        }
    })


});

function startGame() {
    playSequence();
}

function playSequence() {
    for (var i = 0; i < score + 1; i++) {
        if (gameSequence[i] === 0) {
            playRed();
        }
    }
}


function playRed() {
    $("#red").click(functon() {
        $(this).addClass("highlight-red").addClass("red-audio").setInterval(750);
    })
}
