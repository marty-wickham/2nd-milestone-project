$(document).ready(function() {

    $(".center").click(function() {
        $(this).addClass("highlight");
    });

    $("#red").click(function() {
        $(this).addClass("highlight")
    });



    $(".btn-box").click(function() {
        var count = $("#count").text(0);
    });

});

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


$(".btn-box").click(function() {
    startGame();
});

function startGame() {
    playSequence();
}

function playSequence() {
    for (var i = 0; i < score + 1; i++) {
        console.log(gameSequence[i]);
    }
}
