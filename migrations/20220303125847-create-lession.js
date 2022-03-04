'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Lessions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      course: {
        type: Sequelize.INTEGER
      },
      student: {
        type: Sequelize.STRING
      },
      linkMeet: {
        type: Sequelize.STRING
      },
      timeStart: {
        type: Sequelize.STRING
      },
      timeEnd: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      status:{
        type:Sequelize.STRING,
        allowNull: true,
        defaultValue:"active"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },  
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Lessions');
  }
};