const express = require('express');
const { Types } = require('mysql');
const { Sequelize, DataTypes } = require('sequelize');
const router=express.Router();
const employee=require("../config/config")


const user_table = employee.define('UserDetails', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true,
    
  },
  Type: {
    type: DataTypes.STRING
    
  },
  Gender: {
    type: DataTypes.STRING
    
  },
  Department: {
    type: DataTypes.STRING
    
  },
  Purpose: {
    type: DataTypes.STRING
    
  },
  Emp_Id: {
    type: DataTypes.STRING,
    required:true
    
  }
},



 {
  
});

user_table.sync().then(()=>{
    console.log("Table sync successfully");


})

module.exports=user_table;