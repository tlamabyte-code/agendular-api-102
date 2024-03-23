const { Sequelize } = require('sequelize')
const setupModels = require('../db/models')
const envVars = require('./env')
const sequelizeConfig = require('../db/config')

const sequelize = new Sequelize(
    envVars.env === 'production'
        ? sequelizeConfig.production
        : sequelizeConfig.development
)

setupModels(sequelize)

module.exports = sequelize