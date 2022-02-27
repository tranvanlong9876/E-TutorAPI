'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tutor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tutor.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    bithDay: DataTypes.STRING,
    phone: DataTypes.STRING,
    avatar: {
      type: DataTypes.STRING,
      defaultValue:"https://res.cloudinary.com/phankieuphuicloud/image/upload/v1625397754/imgAvatar/russia2_r0aqlr.jpg"
    },

    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status:{
      type:DataTypes.STRING,
      defaultValue:"pending",
      allowNull: true,
    },
    address: DataTypes.STRING,
    languae: DataTypes.STRING,
    skill: {
      type:DataTypes.STRING,
      defaultValue:"dev"
    },
    education: DataTypes.STRING,
    gpa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tutors',
  });
  return Tutor;
};