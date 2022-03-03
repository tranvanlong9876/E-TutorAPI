'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lession extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Lession.init({
    id: DataTypes.INTEGER,
    course: DataTypes.INTEGER,
    student: DataTypes.INTEGER,
    linkMeet: DataTypes.STRING,
    timeStart: DataTypes.STRING,
    timeEnd: DataTypes.STRING,
    date: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lession',
  });
  return Lession;
};