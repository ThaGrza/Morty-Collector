$(document).ready(function() {


    function setGameUp(){
        var playerMatchingNumber = 0;
        const mortys = {
            morty1: {
                points: Math.floor(Math.random() * 12) + 1,
                imageurl: "assests/images/mortys/morty1.png",
            },
            morty2: {
                points: Math.floor(Math.random() * 12) + 1,
                imageurl: "assests/images/mortys/morty2.png",
            },
            morty3: {
                points: Math.floor(Math.random() * 12) + 1,
                imageurl: "assests/images/mortys/morty3.png",
            },
            morty4: {
                points: Math.floor(Math.random() * 12) + 1,
                imageurl: "assests/images/mortys/morty4.png",
            },
            morty5: {
                points: Math.floor(Math.random() * 12) + 1,
                imageurl: "assests/images/mortys/morty5.png",
            },
            morty6: {
                points: Math.floor(Math.random() * 12) + 1,
                imageurl: "assests/images/mortys/morty6.png",
            },
        }
        for(let i = 0; i < mortys.length; i++){
            $("#gameArea").append(i[i]);
        }
        
        var randomNum = Math.floor(Math.random() * 102) + 19;
        $("#targetScore").text(randomNum);
        generateMortys();
    }

    function generateMortySound(sound){
        // picks random soundbite for Morty to say every click
    }

    function generateMortys(){
        return {

        }
    }

    setGameUp();


















    
    // create winning game  / round win logic

    // create losing game / round loss logic

    // create Morty's injection on winning match

    // create game logic.
})