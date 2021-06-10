$(document).ready(function() {
    
    const mortys = {
        morty0: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "../assets/images/mortys/morty1.png",
        },
        morty1: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty7.png",
        },
        morty2: {
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
        morty5: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty2.png",
        },
        morty6: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty5.png",
        },
        morty7: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty6.png",
        },
        morty8: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty9.png",
        },
        morty9: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/Morty0.png",
        },
    }
    var onDeckMortys = Object.keys(mortys).map((key) =>  mortys[key]);
    var mortyCounter = 0;
    var newMortyCounter = 4;
    function setGameUp(){
        roundReset();

    }
    // create GAME WIN function that keeps track of collected / ondeck mortys and animates screen when 6 are collected.


    function renderMortys(){
        for (var key in mortys){
            if(mortyCounter < 4){
                var mortyDiv = $("<div class='mortyButton' data-name='" + key + "'>");
                var mortyImage = $("<img alt='A wild morty appears' class='mortyImage'>").attr("src", mortys[key].image);
                mortyDiv.append(mortyImage);
                $("#mortyArea").append(mortyDiv);
                mortyCounter += 1;
            }else{
                var mortyOnDeckImage = $("<img alt='A wild morty appears' data-name='" + key + "' class='onDeckMorty'>").attr("src", mortys[key].image);
                $("#mortysOnDeck").append(mortyOnDeckImage);
            }
        }
    }

    function newMorty(){
        console.log(onDeckMortys);
        var mortyDiv = $("<div class='mortyButton' data-name='morty'>");
        var mortyImage = $("<img alt='A wild morty appears' class='mortyImage'>").attr("src", onDeckMortys[newMortyCounter].image);
        mortyDiv.append(mortyImage);
        $("#mortyArea").append(mortyDiv);
        newMortyCounter += 1;
    }












    // function newMorty(){
    //     var counter = 0;
    //     for (var key in backupMortys){
    //         if(counter < 1){
    //             console.log('FROM NEW MORTYS')
    //             console.log(key);
    //             var mortyDiv = $("<div class='mortyButton' data-name='" + key + "'>");
    //             var mortyImage = $("<img alt='A wild morty appears' class='mortyImage'>").attr("src", backupMortys[key].image);
    //             mortyDiv.append(mortyImage);
    //             $("#mortyArea").append(mortyDiv);
    //             counter += 1;
    //             console.log(counter);
    //             console.log(mortyImage);
    //         }else {
    //         }
    //     }
    // }

    function generateMortySound(sound){
        // picks random soundbite for Morty to say every click
    }



    function collectMorty(morty){
        morty.remove();
        newMorty();
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
    // newMorty();


    $("#mortyArea").on("click", '.mortyButton', function(event){
        updatePlayerScore($(this));
        console.log($(this));

    })


    // create winning game  / round win logic
    function winLose(playerScore, morty){
        if (currentScore < targetScore){
            // alert("You Won!");
            collectMorty(morty);
            roundReset();
            setGameUp();
        }
        if (currentScore > targetScore){  
            roundReset();
            setGameUp();
            alert("You Lost!");
        }
    }
})