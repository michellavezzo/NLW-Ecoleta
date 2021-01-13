const express = require("express")
const server = express()

// pegar o banco de dados
const db = require("./database/db")

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

    //pegar dados do banco de dados
    //consultar dados da tabela
    db.all(`SELECT * FROM places`, function(err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length
            //console.log("Aqui estão seus registros: ")
            //console.log(rows)
            //mostrar pag html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total: total })

    })


})

//turn server on
server.listen(3000)