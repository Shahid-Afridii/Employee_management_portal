
const express = require('express')
const app = express()
const sequelize=require("./config/config");
const DashboardRouter=require("./routes/dashboard")
const InputFieldRouter=require("./routes/inputfield")
const userDetailsModel=require("./models/model")
var bodyParser = require('body-parser');

var cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


  app.get('/', function (req, res) {
    res.send('Hello World')
  })


  app.use('/dashboard',DashboardRouter)
  app.use('/input',InputFieldRouter)
   
  app.listen(3000)