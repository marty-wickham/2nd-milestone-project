$(document).ready(function() {

    $(".center").click(function() {
        $(this).addClass("highlight");
    });
    
    $("#red").click(function() {
        $(this).addClass("highlight")
    })
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
