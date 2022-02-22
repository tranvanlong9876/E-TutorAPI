'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Request.init({
    author:DataTypes.STRING,
    student: DataTypes.STRING,
    course: DataTypes.INTEGER,
    status:{
      type:String,
      default:"processing"
    },
    timeCreate: {
      type: DataTypes.STRING,
      createdAt: true
    }
  }, {
    sequelize,
    modelName: 'Request',
  });
  return Request;
};