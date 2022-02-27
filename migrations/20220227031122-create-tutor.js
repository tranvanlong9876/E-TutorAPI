'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tutors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      bithDay: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING,
        defaultValue:"https://res.cloudinary.com/phankieuphuicloud/image/upload/v1625397754/imgAvatar/russia2_r0aqlr.jpg"
      },
      email: {
        type: Sequelize.STRING
      },
      password: Sequelize.STRING,
      status:{
        type:Sequelize.STRING,
        defaultValue:"pending",
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING
      },
      languae: {
        type: Sequelize.STRING
      },
      skill: {
        type: Sequelize.STRING,
        defaultValue:"dev"
      },
      education: {
        type: Sequelize.STRING
      },
      gpa: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Tutors');
  }
};