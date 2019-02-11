//Global Variables//
//=============================================================
//Crystal Variables//

var crystal = {
    diamond:
    {
        name: "Diamond",
        value: 0
    },
    emerald:
    {
        name: "Emerald",
        value: 0
    },
    ruby:
    {
        name: "Ruby",
        value: 0
    },
    sapphire:
    {
        name: "Sapphire",
        value: 0
    },

}

// Scores (Reach this Score and Your Score)//

var reachScore = 0;
var playerScore = 0;

// Wins and Losses tracking//

var wins = 0;
var losses = 0;

//End of Global Variables//
// ========================================================================================

//Functions//

//this Function creates the random numbers for the game. I found this on:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random// //

var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function () {
    //resets the score to reach//
    playerScore = 0;

    //creates a new score to reach (between 21 and 123)//
    reachScore = getRandom(21, 123);

    //This creates different values for each crystal//
    crystal.diamond.value = getRandom(1, 13);
    crystal.emerald.value = getRandom(1, 13);
    crystal.ruby.value = getRandom(1, 13);
    crystal.sapphire.value = getRandom(1, 13);

    console.log("target score " + reachScore);
    console.log("Diamond: " + crystal.diamond.value + "| Emerald: " + crystal.emerald.value + " | Ruby: " + crystal.ruby.value + " | Sapphire: " + crystal.sapphire.value);

    //JQUERY - Injects to HTML file the player score and the score to reach//
    $("#reachScore").html(reachScore);
    $("#playerScore").html(playerScore);
}

//when player clicks on the crystal a number value gets attached to the crystal and displays the score totals//

var addValue = function (crystal) {

    //this changes the player score//
    playerScore = playerScore + crystal.value;

    //this JQUERY code changes the value of the Player Score in HTML//
    $("#playerScore").html(playerScore);

    //Call of the winCheck function//
    winCheck();

    console.log("player score" + playerScore);

}
// this checks if the player has won or lost//
var winCheck = function () {

    if (playerScore > reachScore) {

        //adds a loss to the "Losses" counter//
        losses++;

        //this JQUERY code writes the loss to HTML document//

        $("#losses").html(losses);
        alert("Sorry, please try again :(");
        console.log("loss");
        //function call to restart the game//
        startGame();
    }

    else if (playerScore == reachScore) {



        wins++;

        //this JQUERY code writes the win to HTML document//

        $("#wins").html(wins);
        alert("You are awesome, you won!");

        console.log("win");

        //function call to restart the game//
        startGame();
    }
}

//JQUERY- Wiring the crystal pictures to a click event//

$("#diamond").click(function () {
    addValue(crystal.diamond);
})
$("#emerald").click(function () {
    addValue(crystal.emerald);
})
$("#ruby").click(function () {
    addValue(crystal.ruby);
})
$("#sapphire").click(function () {
    addValue(crystal.sapphire);
})


// JQUERY Wiring the instructions button to a slide toggle function//
$("#btn").click(function () {
    $(".instructions").slideToggle();
});

//Function call to start the game//
startGame();





