var Sequelize = require('sequelize');
var sequelize = require('../services/connection');
//var sequelize = require('../server');

module.exports = sequelize.define('user', {
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  dir: Sequelize.STRING
});