$(document).ready(function() {
    
    const mortys = {
        morty1: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty1.png",
        },
        morty2: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty2.png",
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
            image: "assets/images/mortys/morty5.png",
        },
        // morty6: {
        //     points: Math.floor(Math.random() * 12) + 1,
        //     image: "assets/images/mortys/morty1.png",
        // },
        // morty7: {
        //     points: Math.floor(Math.random() * 12) + 1,
        //     image: "assets/images/mortys/morty2.png",
        // },
        // morty8: {
        //     points: Math.floor(Math.random() * 12) + 1,
        //     image: "assets/images/mortys/morty3.png",
        // },
        // morty9: {
        //     points: Math.floor(Math.random() * 12) + 1,
        //     image: "assets/images/mortys/morty4.png",
        // },
        // morty10: {
        //     points: Math.floor(Math.random() * 12) + 1,
        //     image: "assets/images/mortys/morty5.png",
        // },
    }

    var onDeckMorty = [];
    var needsMorty = false;
    var mortysInPlay = 0;
    var wins = 0;

    function setGameUp(){
        roundReset();

    }

// soundclips when mortys are clicked / when stuff happens.

// css / mobile


    function renderMortys(){
        for (var key in mortys){
            if(mortysInPlay < 4){
                var mortyDiv = $("<div class='mortyButton' data-name='" + key + "'>");
                var mortyImage = $("<img alt='A wild morty appears' class='mortyImage'>").attr("src", mortys[key].image);
                mortyDiv.append(mortyImage);
                $("#mortyArea").append(mortyDiv);
                mortysInPlay += 1;
                }else{
                    var mortyDiv = $("<div class='mortyButton' data-name='" + key + "'>");
                    var mortyOnDeckImage = $("<img alt='A wild morty appears' class='onDeckMorty'>").attr("src", mortys[key].image);
                    mortyDiv.append(mortyOnDeckImage);
                    onDeckMorty.push(mortyDiv);
                    $("#mortysOnDeck").append(mortyDiv);
                }
        }
    }
    // *************************************************************************************************************************************************
    // fails after first render of morty because array is empty, Need to either change the logic of function or add enough Morty's to buffer array.
    // *************************************************************************************************************************************************
    
    function newMorty(needsMorty){
        console.log(onDeckMorty);
        if(needsMorty === true){
            onDeckMorty[0].addClass("mortyImage");
            onDeckMorty[0].removeClass("onDeckMorty");
            $("#mortyArea").append(onDeckMorty[0]);
            onDeckMorty.shift(onDeckMorty[0]);
            console.log(onDeckMorty.length);
            needsMorty = false;
        }else{
        }
    }

    function generateMortySound(sound){
        // picks random soundbite for Morty to say every click
    }



    function collectMorty(morty){
        morty.remove();
        needsMorty = true;
        newMorty(needsMorty);
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


    $("#mortyArea").on("click", '.mortyButton', function(event){
        updatePlayerScore($(this));
    })

    function roundWin(){
        wins += 1;
        if(wins === 6){
            alert("You won the game")
        }
    }

    // create winning game  / round win logic
    function winLose(playerScore, morty){
        if (currentScore === targetScore){
            console.log(needsMorty);
            collectMorty(morty);
            roundReset();
            setGameUp();
            roundWin();
        }
        if (currentScore > targetScore){  
            roundReset();
            setGameUp();
            alert("You Lost!");
        }
    }
})