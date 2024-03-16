const { models } = require('../utils/sequelize')

class DailiesService {
    constructor() {
        this.dailies = []
    }

    // Obtener todos los registros de BD
    async all() {
        const dailies = await models.Daily.findAll()
        return dailies
    }

    // Hacer un registro en BD
    async create(data) {
        const newDaily = await models.Daily.create(data)
        return newDaily
    }


}

module.exports = DailiesService