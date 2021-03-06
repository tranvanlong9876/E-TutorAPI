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
    id: { 
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true},
    course: DataTypes.INTEGER,
    student: DataTypes.STRING,
    linkMeet: DataTypes.STRING,
    timeStart: DataTypes.STRING,
    timeEnd: DataTypes.STRING,
    date: DataTypes.STRING,
    description: DataTypes.STRING,
    status:{
      type:DataTypes.STRING,
      allowNull: true,
      defaultValue:"active"
    }
  }, {
    sequelize,
    modelName: 'Lession',
  });
  return Lession;
};