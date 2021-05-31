$(document).ready(function() {
    const mortys = {
        morty1: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "../assets/images/mortys/morty1.png",
        },
        // morty2: {
        //     points: Math.floor(Math.random() * 12) + 1,
        //     image: "assets/images/mortys/morty2.png",
        // },
        morty3: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty3.png",
        },
        morty4: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty4.png",
        },
        // morty5: {
        //     points: Math.floor(Math.random() * 12) + 1,
        //     image: "assets/images/mortys/morty5.png",
        // },
        // morty6: {
        //     points: Math.floor(Math.random() * 12) + 1,
        //     image: "assets/images/mortys/morty6.png",
        // },
        morty7: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty7.png",
        },
        morty8: {
            points: Math.floor(Math.random() * 12) + 1,
            image: "assets/images/mortys/morty8.png",
        },
        // morty9: {
        //     points: Math.floor(Math.random() * 12) + 1,
        //     image: "assets/images/mortys/morty9.png",
        // },
        // morty0: {
        //     points: Math.floor(Math.random() * 12) + 1,
        //     image: "assets/images/mortys/Morty0.png",
        // },
    }

    var currentScore = 0;

    function setGameUp(){
        for(let i = 0; i < mortys.length; i++){
            $("#gameArea").append(i[i]);
        }
        
        var randomNum = Math.floor(Math.random() * 102) + 19;
        $("#targetScore").text(randomNum);
        generateMortys();
    }

    function renderMortys(){
        for (var key in mortys){
        var mortyDiv = $("<div class='mortyButton'>");
        var mortyImage = $("<img alt='A wild morty appears' class='mortyImage'>").attr("src", mortys[key].image);
        mortyImage.attr("value", mortys[key].points)
        mortyDiv.append(mortyImage);
        $("#mortyArea").append(mortyDiv);
        }
    }



    function generateMortySound(sound){
        // picks random soundbite for Morty to say every click
    }



    function generateMortys(){
    // Decides how many mortys can be in play / in onDeck

    }

    function updatePlayerScore(morty){
        // currentScore += 3;
        // $("#currentScore").text(currentScore);
        alert(morty.value);
    }


    setGameUp();
    renderMortys();

    $(".mortyButton").on("click", function(event){
        updatePlayerScore($(this));
    })

    // create winning game  / round win logic

    // create losing game / round loss logic

    // create Morty's injection on winning match

    // create game logic.
})