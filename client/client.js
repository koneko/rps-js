const hideButtons = function() {
    var rockbutton = document.getElementById("rock")
    var paperbutton = document.getElementById("paper")
    var scissorsbutton = document.getElementById("scissors")
    rockbutton.style.display = "none"
    paperbutton.style.display = "none"
    scissorsbutton.style.display = "none"
}
const showButtons = function() {
    var rockbutton = document.getElementById("rock")
    var paperbutton = document.getElementById("paper")
    var scissorsbutton = document.getElementById("scissors")
    rockbutton.style.display = "block"
    paperbutton.style.display = "block"
    scissorsbutton.style.display = "block"
}
const orock = function() {
    hideButtons()
    sendAction("orock")
}
const opaper = function() {
    hideButtons()
    sendAction("opaper")
}
const oscissors = function() {
    hideButtons()
    sendAction("oscissors")
}
const trock = function() {
    hideButtons()
    sendAction("trock")
}
const tpaper = function() {
    hideButtons()
    sendAction("tpaper")
}
const tscissors = function() {
    hideButtons()
    sendAction("tscissors")
}
const sendAction = function(action) {
    if(action == "orock") {
        //player action is rock
        var youractionID = document.getElementById("youraction")
        var url = "http://localhost:4000/actions/orock"
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
        youractionID.innerText = `The action you sent was rock.`
    } else if (action == "opaper") {
        var youractionID = document.getElementById("youraction")
        var url = "http://localhost:4000/actions/opaper"
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
        youractionID.innerText = `The action you sent was paper.`
    } else if (action == "oscissors") {
        var youractionID = document.getElementById("youraction")
        var url = "http://localhost:4000/actions/oscissors"
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
        youractionID.innerText = `The action you sent was scissors.`
    } else if (action == "trock") {
        var youractionID = document.getElementById("youraction")
        var url = "http://localhost:4000/actions/trock"
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
        youractionID.innerText = `The action you sent was rock.`
    } else if (action == "tpaper") {
        var youractionID = document.getElementById("youraction")
        var url = "http://localhost:4000/actions/tpaper"
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
        youractionID.innerText = `The action you sent was paper.`
    } else if (action == "tscissors") {
        var youractionID = document.getElementById("youraction")
        var url = "http://localhost:4000/actions/tscissors"
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
        youractionID.innerText = `The action you sent was scissors.`
    }
}