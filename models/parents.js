'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Parents.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password:DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    status: {
      type: DataTypes.BOOLEAN,
      allowNull:true,
      default: true,
    },
    idStudents: {
      type : DataTypes.INTEGER,
      allowNull: true,
      default: "null",
    }
  }, {
    sequelize,
    modelName: 'Parents',
  });
  return Parents;
};