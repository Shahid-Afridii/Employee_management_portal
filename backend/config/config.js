
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('employee', 'root', 'al-amin', {
    host: 'localhost',
    dialect: 'mysql' 
  });

module.exports=sequelize




  