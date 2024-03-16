const { Model, DataTypes } = require('sequelize')

const DAILY_TABLE = 'dailies'

const DailySchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    note: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    emotion: {
        allowNull: false,
        type: DataTypes.STRING,        
    },
    color: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: '#03331f'
    },
    timestamp: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'daily_timestamp',
        defaultValue: () => Math.floor(Date.now() / 1000)
    }
}

class Daily extends Model {

    static associate() {
        // Permite hacer relaciones (llaves foraneas)
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: DAILY_TABLE,
            modelName: 'Daily',
            timestamps: false
        }
    }
}

module.exports = { DAILY_TABLE, DailySchema, Daily }