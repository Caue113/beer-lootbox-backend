const database = "testing_db";


const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345",
    database: database
})

connection.connect((error) =>{
    if(error) return console.log(error)
    console.log(`Connected to ${database} with Sucess!`);
    
    createTable("teste_usuarios");
})


function createTable(name)
{
    let sql = `CREATE TABLE IF NOT EXISTS ${name} (
        nome VARCHAR(50)
    );`
    connection.query(sql, (error, results, fields) =>{
        if(error) return console.log(error);
        console.log(`Created ${name} with Sucess!`);
    });
}

