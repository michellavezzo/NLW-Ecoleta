const express = require("express")
const server = express()

//config. public folder
server.use(express.static("public"))

// way app config.
//home page
//req : requisiçao //res: resposta
server.get("/", (req,res) =>{
    res.sendFile(__dirname + "/views/index.html")
})
server.get("/create-point", (req,res) =>{
    res.sendFile(__dirname + "/views/create-point.html")
})
server.get("/search-results", (req,res) =>{
    res.sendFile(__dirname + "/views/search-results.html")
})

//turn server on
server.listen(3000)