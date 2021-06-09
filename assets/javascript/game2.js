$(document).ready(function() {
    
    function randomNumMortys() {
        return {
        morty1: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "../assets/images/mortys/morty1.png",
        },
        morty7: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty7.png",
        },
        morty8: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty8.png",
        },
        morty3: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty3.png",
        },
        morty4: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty4.png",
        },
        morty2: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty2.png",
        },
        morty5: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty5.png",
        },
        morty6: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty6.png",
        },
        morty9: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty9.png",
        },
        morty0: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/Morty0.png",
        },
        }
    }
    var mortysInPlay = 0;

    function setGameUp(){
        roundReset();
        mortys = randomNumMortys();
    }
    // create GAME WIN function that keeps track of collected / ondeck mortys and animates screen when 6 are collected.

    function renderMortys(){
        for (var key in mortys){
            if(mortysInPlay < 4){
                var mortyDiv = $("<div class='mortyButton' data-name='" + key + "'>");
                var mortyImage = $("<img alt='A wild morty appears' class='mortyImage'>").attr("src", mortys[key].image);
                mortyDiv.append(mortyImage);
                $("#mortyArea").append(mortyDiv);
                mortysInPlay += 1;
                console.log(mortysInPlay);
            }
        }
    }



    function generateMortySound(sound){
        // picks random soundbite for Morty to say every click
    }



    function generateMortys(morty){
        morty.remove();
        mortysInPlay -= 1;
        renderMortys();
        var mortyImage = (mortys[morty.attr("data-name")]).image;
        var mortyCollectedImage = $("<img alt='A Collected Morty' class='collectedMorty'>").attr("src", mortyImage);
        $("#mortysCollected").append(mortyCollectedImage);

    }

    function updatePlayerScore(morty){
        currentScore += mortys[morty.attr("data-name")].points;
        $("#currentScore").text(currentScore);
        winLose(currentScore, morty);
    }

    function roundReset(){
        currentScore = 0;
        targetScore = Math.floor(Math.random() * 102) + 19;
        $("#currentScore").text(currentScore);
        $("#targetScore").text(targetScore);
    }

    setGameUp();
    renderMortys();

    $(".mortyButton").on("click", function(event){
        updatePlayerScore($(this));
    })

    // create winning game  / round win logic
    function winLose(playerScore, morty){
        if (currentScore === targetScore){
            alert("You Won!");
            generateMortys(morty);
            roundReset();
            setGameUp();
        }
        if (currentScore > targetScore){  
            roundReset();
            setGameUp();
            alert("You Lost!");
        }
    }

    // create Morty's injection on winning match

})