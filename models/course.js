'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    author: DataTypes.STRING, 
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    ageLimit: DataTypes.STRING,
    price: DataTypes.STRING,
    student:{
      type:DataTypes.STRING,
      defaultValue:""
    },
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};