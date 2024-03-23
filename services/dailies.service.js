// Clase que interactua con la BD
const { models } = require('../utils/sequelize')

class DailiesService {
    constructor() {
        this.dailies = []
    }

    async all() {
        // Utilizar findAll de ORM Sequelize (dev07)
        const dailies = await models.Daily.findAll({
            order: [
                ['id', 'DESC']
            ]
        })
        return dailies
    }

    async create(data) {
        // const daily = await this.dailyCompleted()

        // if (daily) {
        //     throw boom.conflict()
        // }
        const newDaily = await models.Daily.create(data)
        return newDaily
    }
}

module.exports = DailiesService