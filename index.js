const express = require("express")
const app = express()
const fs = require("fs")
const chalk = require("chalk")
const port = 4000;

app.get("/oneclient", (req, res) => {
    var oneclient = fs.readFileSync("client/oneclient.html")
    // console.log(oneclient)
    res.send(oneclient.toString())
})

app.get("/twoclient", (req, res) => {
    var twoclient = fs.readFileSync("client/twoclient.html")
    // console.log(twoclient)
    res.send(twoclient.toString())
})


app.listen(port, () => {
    console.log(chalk.yellow(`Server listening on port ${port}.`))
    console.log(chalk.redBright("Player one: http://localhost:4000/oneclient"))
    console.log(chalk.blueBright("Player two: http://localhost:4000/twoclient"))
})