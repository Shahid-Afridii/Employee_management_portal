const express = require('express')
const router=express.Router();
const employee=require("../config/config");
const user_table = require('../models/model');




router.get('/', function (req, res) {
    res.send('Welcome to Dashboard Router')
  })


  //get all users
  
  router.get("/getalluser",(req,res)=>{
    user_table.findAll({}).then((data)=>{
      res.send(data)
    })
  });



  module.exports=router;