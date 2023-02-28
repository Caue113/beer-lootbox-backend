const mysql = require("mysql2");


const configurations ={
    host: "localhost",
    port: "3306",
    user: "root",
    password: "12345",
    database: "testing_db",
}

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345",
    database: configurations.database
});