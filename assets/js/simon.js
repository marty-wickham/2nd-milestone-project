$(document).ready(function() {

    $(".center").click(function() {
        $(this).addClass("highlight");
    });

    $("#red").click(function() {
        $(this).addClass("highlight")
    });



    $("#star-btn").click(function() {
        var count = $("#count").text(0);
    });
    
    var gameSequence = [];

    function fillArray() {
        for(var i = 0; i < 31; i++)
        gameSequence.push(Math.floor((Math.random() * 4) + 1));
        console.log(gameSequence);
    }
    
    fillArray();
    

});




/* var game = {
    count: 0,
    gameMemory: [],
    playerMemory: [],
    colors: ["red", "green", "blue", "yellow"]
};

function newGame() {
    game.count = 0;
    game.gameMemory = [];
    game.playerMemory = [];
}

newGame();

function gameMove() {
    game.count++;
    game.gameMemory.push(game.colors[Math.floor((Math.random() * 4) + 1)]);
}

gameMove;

function playSequence() {
    for(var i = 0; i <= game.gameMemory.length; i++) {
        document.getElementById(game.gameMemory[i]);
    }
}
*/
