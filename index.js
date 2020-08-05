const express = require("express")
const app = express()
const fs = require("fs")
const chalk = require("chalk")
const port = 4000;

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

app.get("/actions/orock", (req, res) => {
    console.log("i was accessed via request!")
})

app.get("/actions/opaper", (req, res) => {
    
})

app.get("/actions/oscissors", (req, res) => {
    
})

app.get("/actions/trock", (req, res) => {

})

app.get("/actions/tpaper", (req, res) => {
    
})

app.get("/actions/tscissors", (req, res) => {
    
})

app.listen(port, () => {
    console.log(chalk.yellow(`Server listening on port ${port}.`))
    console.log(chalk.redBright("Player one: http://localhost:4000/oneclient"))
    console.log(chalk.blueBright("Player two: http://localhost:4000/twoclient"))
})