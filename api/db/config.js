const envVars = require("../utils/env")
const pg = require('pg')

module.exports = {
    development: { 
        storage: "database.db", 
        dialect: "sqlite" 
    },
    production: {
        dialect: "postgres",
        dialectModule: pg,
        host: envVars.dbHost,
        port: 5432,
        username: envVars.dbUser,
        password: envVars.dbPass,
        database: envVars.dbName,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
}