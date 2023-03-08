const express = require("express");
const cors = require('cors');
const mysql = require("mysql2");
const databaseConfigurations = require("./database/database-configuration.js");
const { json } = require("express");

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
    //Método recomendado abaixo

    /*  
    const connection = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "12345",
        database: "testing_db"
    });
    */

    //Método que futuramente usará diferentes usuários para acessar funcionalidaades
    //com restrições específicas
    const connection = mysql.createConnection({
        host: databaseConfigurations.TEST_CONFIG.host,
        port: databaseConfigurations.TEST_CONFIG.port,
        user: databaseConfigurations.TEST_CONFIG.user,
        password: databaseConfigurations.TEST_CONFIG.password,
        database: databaseConfigurations.TEST_CONFIG.database
    });

    connection.query('SELECT nome FROM bebidas WHERE bebida_id = 1', (error, result, fields) =>{
        if(error) return console.log(error);
        console.log("Resultado Query: ")
        console.log(result);
        res.send(result);
    });
    
    console.log("SQL END x");
    return resultado;
})


app.get("/test", (req, res) =>{
    let data = [{id: 1, nome: "Jose",}]
    res.send(data);
})

app.get("/test2", (req, res) =>{
    const connection = mysql.createConnection({
        host: databaseConfigurations.TEST_CONFIG.host,
        port: databaseConfigurations.TEST_CONFIG.port,
        user: databaseConfigurations.TEST_CONFIG.user,
        password: databaseConfigurations.TEST_CONFIG.password,
        database: databaseConfigurations.TEST_CONFIG.database
    });

    connection.query('SELECT nome FROM bebidas WHERE bebida_id = 10', (error, result, fields) =>{
        if(error) return console.log(error);
        console.log("[/test2] Resultado Query: ")
        console.log(result);
        res.send(result);
    });
})


//#endregion