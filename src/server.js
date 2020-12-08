const express = require("express")
const server = express()

//config. public folder
server.use(express.static("public"))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// way app config.
//home page
//req : requisiçao //res: resposta
server.get("/", (req, res) => {
    return res.render("index.html", )
})
server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})
server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

//turn server on
server.listen(3000)