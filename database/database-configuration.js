const mysql = require("mysql2");


let DATABASES_ENUM = {
    TestDB: -1,
    DrinkHouseDB: 0,

}

const TEST_CONFIG = {
    host: "localhost",
    user: "root",
    port: "3306",
    password: "12345",
    database: "testing_db"
}

const DRINKHOUSE_CONFIG = {
    host: "localhost",
    user: "root",
    port: "3306",
    password: "12345",
    database: "drink_house"
}

/**
 * 
 * @param {DATABASES_ENUM} database 
 * @returns 
 */
function getConfig(database = DATABASES_ENUM.DrinkHouseDB)
{
    try {
        switch (database) {
            case DATABASES_ENUM.TestDB:
                console.log("Sucess Test")                
                return TEST_CONFIG;
    
            case DATABASES_ENUM.DrinkHouseDB:
                console.log("Sucess DrinkHouse")
                return DRINKHOUSE_CONFIG;
        }    
    } catch (error) {
        console.error("ERROR: " + error);
    }
}






module.exports = {
    TEST_CONFIG : TEST_CONFIG,
    DRINKHOUSE_CONFIG : DRINKHOUSE_CONFIG,
    DATABASES_ENUM : DATABASES_ENUM,
    /* getConfig : getConfig(), */
}