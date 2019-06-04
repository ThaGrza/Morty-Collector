// Assigns variables.
var random_result;
var win = 0;
var lose = 0;
var current = 0;


// Generates Targeted score.
random_result = Math.floor(Math.random() * 101) + 19;
console.log(random_result);

// Displays current score and target score.
$("#target").html("Random Result: " + random_result);
$("#currentNum").html("Current Score: " + current);



var startGame = function() {
    // Clears previous crystals.
    $('.crystals').empty();

    // Generates crystals with random numbers.
    for (var i = 0; i < 4; i++){
        var random = Math.floor(Math.random() * 11)+ 1;
        console.log(random);
        var crystal = $("<div>");
        crystal.attr({
            "class": "crystal",
            "data-random": random});
        $(".crystals").append(crystal);
    }
}

// Starts game initially.
startGame();

// Adds targeted crystal value to score counter.
$(document).on("click", ".crystal", function() {
    var num = parseInt($(this).attr('data-random'));
    current += num;
    if(current > random_result){
        lose++;
        $('#lost').html("lost: " + lose);
        alert("You Lost!!!");
        current = 0;
        startGame();
    }
    else if (current === random_result) {
        win++;
        $('#win').html("won: " + win);
        alert("You Won!!!");
        current = 0;
        startGame();

    }
    console.log(current);
});
