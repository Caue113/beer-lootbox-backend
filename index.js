const databaseConfigurations = require("./database/database-configuration.js")
const mysql = require("mysql2");
const express = require("express");

const app = express();

//Porta de execucao do Server
const port = 3000;      

//Permite com que use JSON para I/O
app.use(express.json())

//Inicia o servidor
app.listen(port, ()=>{
    console.log(`Listening server on port: ${port}`)
});

//#region /GET Endpoints

app.get("/", (req, res) =>{
    res.json( {"message": "Hellooo World"});
})

app.get("/bebidas", (req, res) =>{

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
        host: databaseConfigurations.config.host,
        port: databaseConfigurations.config.port,
        user: databaseConfigurations.config.user,
        password: databaseConfigurations.config.password,
        database: databaseConfigurations.config.database
    });

    connection.connect();

    connection.query('SELECT * FROM bebidas', (error, result, fields) =>{
        if(error) return console.log(error);
        console.log(result)
    });

    console.log("SQL END");
    connection.end();
})

//#endregion