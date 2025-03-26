
var gamePattern = [];

var userClickedPattern = [];

var buttonColour = ["red", "blue", "green", "yellow"];

var level = 0

var started = true;


$(document).keypress(function(event){
    if (started === true){

        $("h1").text("Level " + level);
        nextSeqeunce();
        started = false;
    }
})

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playsound(userChosenColour);

    console.log(userClickedPattern);

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});


function nextSeqeunce(){
    userClickedPattern = [];

    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColour[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColour);

}


function playsound(name){
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}


function animatePress(currentColour){
    $("." + currentColour).addClass("pressed")

    setTimeout(function(){
        $("." + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if (gamePattern.length === userClickedPattern.length){
            setTimeout(function(){
                nextSeqeunce();
            }, 1000)
        }

    } else {
        console.log("failure");
        playsound("wrong");

        $("body").addClass("game-over")

        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

        $("h1").text("Game Over, Press Any Key to Restart");

        startover();
    }
}

function startover(){
    level = 0;
    started = true;
    gamePattern = [];
}

