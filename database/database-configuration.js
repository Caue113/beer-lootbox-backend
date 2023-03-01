const mysql = require("mysql2");

const config = {
    host: "localhost",
    user: "root",
    port: "3306",
    password: "12345",
    database: "testing_db"
}

function getConfig()
{
    return config;
}

module.exports = {
    config : config,
    getConfig : function(){
        getConfig();
    },
}
