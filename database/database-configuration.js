const mysql = require("mysql2");

const TEST_CONFIG = {
    host: "localhost",
    user: "root",
    port: "3306",
    password: "12345",
    database: "testing_db"
}

function getConfig()
{
    return TEST_CONFIG;
}

module.exports = {
    TEST_CONFIG : TEST_CONFIG,
    getConfig : function(){
        getConfig();
    },
}
