'use strict';
const { DAILY_TABLE } = require('../models/daily.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(DAILY_TABLE, [
      {
        note: "Daily Lunes, iniciando la semana x_x",
        emotion: "😪",
        color: "#03331f",
        daily_timestamp: (new Date(2024, 3, 18).getTime())
      },
      {
        note: "Daily Martes, día dos, viernes lejos",
        emotion: "😐",
        color: "#03331f",
        daily_timestamp: (new Date(2024, 3, 19).getTime())
      },
      {
        note: "Daily Miércoles, ya casi veo pronto el descanse",
        emotion: "🙂",
        color: "#03331f",
        daily_timestamp: (new Date(2024, 3, 20).getTime())
      },
      {
        note: "Daily Jueves, por fin tengo energía para continuar",
        emotion: "😁",
        color: "#03331f",
        daily_timestamp: (new Date(2024, 3, 21).getTime())
      },
      {
        note: "Daily Viernes, el mejor día de la semana",
        emotion: "😍",
        color: "#03331f",
        daily_timestamp: (new Date(2024, 3, 22).getTime())
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
