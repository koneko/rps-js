const express = require("express")
const app = express()
const fs = require("fs")
const chalk = require("chalk");
const port = 4000;
const loadState = function() {
    var rps = JSON.parse(fs.readFileSync("rps.json").toString())
    return rps;
}
const saveState = function() {
    // var rps = loadState()
    const dataJSON = JSON.stringify(rps)
    fs.writeFileSync("rps.json", dataJSON)
    // fs.writeFileSync("rps.json",)
}


app.get("/oneclient", (req, res) => {
    var oneclient = fs.readFileSync("client/oneclient.html")
    // console.log(oneclient)
    console.log("Player one connected!")
    res.send(oneclient.toString())
})

app.get("/twoclient", (req, res) => {
    var twoclient = fs.readFileSync("client/twoclient.html")
    // console.log(twoclient)
    console.log("Player two connected!")
    res.send(twoclient.toString())
})

app.get("/client.js", (req, res) => {
    var twoclient = fs.readFileSync("client/client.js")
    // console.log(twoclient)
    res.send(twoclient.toString())
})

app.get("/actions/orock", (req, res) => {
    var rps = JSON.parse(fs.readFileSync("rps.json").toString())
    rps.playerone = "rock";
    res.send(rps);
    fs.writeFileSync("rps.json", JSON.stringify(rps))
})

app.get("/actions/opaper", (req, res) => {
    var rps = JSON.parse(fs.readFileSync("rps.json").toString())
    rps.playerone = "paper";
    res.send(rps);
    fs.writeFileSync("rps.json", JSON.stringify(rps))
})

app.get("/actions/oscissors", (req, res) => {
    var rps = JSON.parse(fs.readFileSync("rps.json").toString())
    rps.playerone = "scissors";
    res.send(rps);
    fs.writeFileSync("rps.json", JSON.stringify(rps))
})

app.get("/actions/trock", (req, res) => {
    var rps = JSON.parse(fs.readFileSync("rps.json").toString())
    rps.playertwo = "rock";
    res.send(rps);
    fs.writeFileSync("rps.json", JSON.stringify(rps))
})

app.get("/actions/tpaper", (req, res) => {
    var rps = JSON.parse(fs.readFileSync("rps.json").toString())
    rps.playertwo = "paper";
    res.send(rps);
    fs.writeFileSync("rps.json", JSON.stringify(rps))
})

app.get("/actions/tscissors", (req, res) => {
    var rps = JSON.parse(fs.readFileSync("rps.json").toString())
    rps.playertwo = "scissors";
    res.send(rps);
    fs.writeFileSync("rps.json", JSON.stringify(rps))
})

app.listen(port, () => {
    console.log(chalk.yellow(`Server listening on port ${port}.`))
    console.log(chalk.redBright("Player one: http://localhost:4000/oneclient"))
    console.log(chalk.blueBright("Player two: http://localhost:4000/twoclient"))
})
//im not working on this much anymore, ill finish it later