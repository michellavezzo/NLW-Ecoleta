// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operaçoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db // para usar o require no server.js



//utilizar o obj de banco de dados para as opecaoes
//db.serialize(() => {

//     //com comandos slq vou:

//     //1criar tabela 
//     //``quebra de linha ao inves de ""

//     db.run(`
//             CREATE TABLE IF NOT EXISTS places (
//                 id INTEGER  PRIMARY KEY  AUTOINCREMENT,
//                 image TEXT,
//                 name TEXT,
//                 address TEXT,
//                 address2 TEXT,
//                 state TEXT,
//                 city TEXT,
//                 items TEXT
//             );
//         `)

//     //inserir dados na tabela

//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city, 
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `
//         // const values = [
//         //     "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
//         //     "Colectoria",
//         //     "Guilherme Gemballa, Jardim América",
//         //     "Num. 260",
//         //     "Santa Catarina",
//         //     "Rio do Sul",
//         //     "Resíduos Eletrônicos, Lâmpadas"
//         // ]
//     const values = [
//         "https://images.unsplash.com/photo-1518792528501-352f829886dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Num. 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }
//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)



//     //3 consultar dados da tabela
// db.all(`SELECT * FROM places`, function(err, rows) {
//     if (err) {
//         return console.log(err)
//     }

//     console.log("Aqui estão seus registros: ")
//     console.log(rows)

// })

// //     //4 deletar dados da tabela
// db.run(`DELETE FROM places WHERE id = ?`, [14], function(err) {
//     if (err) {
//         return console.log(err)
//     }
//     console.log("Registro deletado com sucesso.")
// })
//})

//////////1hr do video 5