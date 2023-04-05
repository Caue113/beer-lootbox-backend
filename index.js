const express = require("express");
const cors = require('cors');
const mysql = require("mysql2");
const { json, response } = require("express");
const databaseConfiguration = require("./database/database-configuration.js");

const app = express();

//Porta de execucao do Server
const port = 3002;      

//Permite com que use JSON para I/O
app.use(express.json());

//Permite "Access-Control-Allow-Origin"
app.use(cors());

//Inicia o servidor
app.listen(port, ()=>{
    console.log(`Listening server on port: ${port}`)
});



//#region /GET Endpoints

app.get("/", (req, res) =>{
    res.json( {message: "Hellooo World"});
    console.log({message : "Haai"});
})

app.get("/bebidas", (req, res) =>{
    let resultado;

    //Método que futuramente usará diferentes usuários para acessar funcionalidaades
    //com restrições específicas
    const connection = mysql.createConnection({
        host: databaseConfiguration.TEST_CONFIG.host,
        port: databaseConfiguration.TEST_CONFIG.port,
        user: databaseConfiguration.TEST_CONFIG.user,
        password: databaseConfiguration.TEST_CONFIG.password,
        database: databaseConfiguration.TEST_CONFIG.database
    });

    connection.query('SELECT nome FROM bebidas WHERE bebida_id = 1', (error, result, fields) =>{
        if(error) return console.log(error);
        console.log("Resultado Query: ")
        console.log(result);
        res.send(result);
    });
    
    console.log("SQL END x");
    return resultado;
});

app.get("/test2", (req, res) =>{
    const connection = mysql.createConnection({
        host: databaseConfiguration.TEST_CONFIG.host,
        port: databaseConfiguration.TEST_CONFIG.port,
        user: databaseConfiguration.TEST_CONFIG.user,
        password: databaseConfiguration.TEST_CONFIG.password,
        database: databaseConfiguration.TEST_CONFIG.database
    });

    connection.query('SELECT * FROM bebidas', (error, result, fields) =>{
        if(error) return console.log(error);
        console.log("[/test2] Resultado Query: ")
        console.log(result);
        res.send(result);
    });
})


//#endregion


//#region POST endpoints

app.get("/bebida/:bebidaId", (req, res) =>{

    const bebidaId = req.params.bebidaId;

    console.log(bebidaId);

    const connection = mysql.createConnection(databaseConfiguration.DRINKHOUSE_CONFIG);

    let sql = ` SELECT b.*, M.Marca from bebidas B
                INNER JOIN marcas M
                    ON B.MarcaID = M.ID
                WHERE b.id = ${bebidaId}`

    connection.query(sql, (error, result, fields) =>{
        if(error) return console.log(error);
        console.log("[/bebidas/id] Resultado Query: ")
        console.log(result);
        res.send(result);
    });
})


//#endregion