'use strict';

const fs = require('fs');
const path = require('path');
const {Sequelize, DataTypes} = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
sequelize = new Sequelize('mysql://usltzrspxt3n8eck:ucUaCm4HuzzpgtI1kx6A@baxtsuhfkagoyb0gq9wb-mysql.services.clever-cloud.com:3306/baxtsuhfkagoyb0gq9wb');

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.admin = require("./admin")(sequelize, DataTypes)
db.parents = require("./parents")(sequelize, DataTypes)
db.students = require("./students")(sequelize, DataTypes)
db.tutors = require("./tutors")(sequelize, DataTypes)
db.news = require("./news")(sequelize, DataTypes)
db.report = require("./report")(sequelize, DataTypes)
db.course = require("./course")(sequelize, DataTypes)
db.request = require("./request")(sequelize, DataTypes)


module.exports = db;
