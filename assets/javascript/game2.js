$(document).ready(function() {

    // var rules = document.getElementById(".rulesModal");
    // rules.show;
    const winSounds = ["assets/sounds/win/alright.mp3","assets/sounds/win/heckYeah.mp3","assets/sounds/win/thankGod.mp3","assets/sounds/win/waiting.mp3"];

    const lossSounds = ["assets/sounds/loss/absolutely.mp3","assets/sounds/loss/doingOk.mp3",
    "assets/sounds/loss/moron.mp3","assets/sounds/loss/geez.mp3","assets/sounds/loss/sorry.mp3"];

    const mortySounds = ["assets/sounds/morty/anxiety.mp3","assets/sounds/morty/hello.mp3",
    "assets/sounds/morty/helpMe.mp3","assets/sounds/morty/howMuch.mp3","assets/sounds/morty/gardener.mp3",
    "assets/sounds/morty/sleep.mp3","assets/sounds/morty/weird.mp3","assets/sounds/morty/geez.mp3"];

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
        morty6: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty6.png",
        },
        morty7: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty7.png",
        },
        morty8: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty8.png",
        },
        morty9: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty9.png",
        },
        morty10: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty10.png",
        },
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

    function generateMortySound(condition){
        if(condition === 'morty'){
            let randomMortySound = Math.floor(Math.random() * mortySounds.length);
            let mortySound = new Audio(mortySounds[randomMortySound]);
            mortySound.play();
        }
        if(condition === 'win'){
            let winningSound = Math.floor(Math.random() * winSounds.length);
            let winSound = new Audio(winSounds[winningSound]);
            winSound.play();
        };
        if(condition === 'loss'){
            let losingSound = Math.floor(Math.random() * lossSounds.length);
            let lossSound = new Audio(lossSounds[losingSound]);
            lossSound.play();
        }
    }

    function collectMorty(morty){
        morty.remove();
        needsMorty = true;
        newMorty(needsMorty);
        generateMortySound('win');
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
        generateMortySound('morty');
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
            generateMortySound('loss');
            roundReset();
            setGameUp();
            alert("You Lost!");
        }
    }
})