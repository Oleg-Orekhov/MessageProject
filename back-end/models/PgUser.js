var Sequelize = require('sequelize');
var sequelize = require('../services/connection');


module.exports = sequelize.define('user', {
  email: Sequelize.STRING,
  text: Sequelize.STRING,
  dir: Sequelize.STRING
});