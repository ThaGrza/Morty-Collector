// Assigns variables.
var random_result;
var win;
var lose;



random_result = Math.floor(Math.random() * 120) + 19;
console.log(random_result);
     
$("#result").html("Random Result: " + random_result);
// Crystal main logic.
for (var i = 0; i < 4; i++){
    var random = Math.floor(Math.random() * 11)+ 1;
    console.log(random);
    var crystal = $("<div>");
    crystal.attr({
        "class": "crystal",
        "data-random": random});
    $(".crystals").append(crystal);
}

// $(".crystal").on("click", function() {
//     console.log($(this));
// })