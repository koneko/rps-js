const request = require("request")

const hideButtons = function() {
    var rockbutton = document.getElementById("rock")
    var paperbutton = document.getElementById("paper")
    var scissorsbutton = document.getElementById("scissors")
    rockbutton.style.display = "none"
    paperbutton.style.display = "none"
    scissorsbutton.style.display = "none"
}
const rock = function() {
    hideButtons()
}
const paper = function() {
    hideButtons()
}
const scissors = function() {
    hideButtons()
}
const sendAction = function(action) {
    if(action == "rock") {
        //player action is rock
    } else if (action == "paper") {
        //player action is paper
    } else if (action == "scissors") {
        //player action is scissors
    } else {
        //error ig
    }
}