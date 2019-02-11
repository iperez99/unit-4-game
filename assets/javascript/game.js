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

//JQUERY- Wiring the crystal pictures to a click event//

$("#diamond").click(function(){
    alert("test");
})
$("#emerald").click(function(){
    alert("test");
})
$("#ruby").click(function(){
    alert("test");
})
$("#sapphire").click(function(){
    alert("test");
})




// JQUERY Wiring the instructions button to a slide toggle function//
$("#btn").click(function() {
    $(".instructions").slideToggle();
});