const { Sequelize } = require('sequelize')
const setupModels = require('../db/models')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.db',
    logging: true
})

setupModels(sequelize)

module.exports = sequelize