const express = require('express')
const router=express.Router();
const employee=require("../config/config");
const user_table = require('../models/model');
const userDetailsModel=require("../models/model")




router.post('/insert',(req,res)=>{
  console.log(req.body)
  //user_table.create({empname:'shahid',empid:"100",empsalary:"18000"})
  //-----------------------Body parser--------------------
  userDetailsModel.create({name:req.body.name, Emp_Id:req.body.id, Type:req.body.Type,Gender:req.body.Gender,Department:req.body.Department,
  Purpose:req.body.Purpose}).then((data)=>{
      res.send(data)
  })
})

// getall api
router.get("/getalluser",(req,res)=>{
  user_table.findAll({}).then((data)=>{
    res.send(data)
  })
});


module.exports=router;