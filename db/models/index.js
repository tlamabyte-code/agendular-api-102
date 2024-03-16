const { Daily, DailySchema } = require('./daily.model')


function setupModels(sequelize) {
    Daily.init(DailySchema, Daily.config(sequelize))
}

module.exports = setupModels