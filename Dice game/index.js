var randomnumber1 = Math.floor(Math.random()*6) + 1;

var diceimage = "./images/dice" + randomnumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", + diceimage);


var randomnumber2 = Math.floor(Math.random()*6) + 1;

var diceimage2 = "./images/dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", + diceimage2);


if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
} else if(randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
} else{
    document.querySelector("h1").innerHTML = "It is a tie";
}