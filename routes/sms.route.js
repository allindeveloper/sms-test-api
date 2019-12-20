const express = require('express');

const bcrypt = require("bcrypt");
const {validateSmsCreate} = require('../models/sms'); 

let db = require('../db')


const router = express.Router();


  // register route
  router.post("/Send", async (req, res, next) => {
    let message = req.body.message;
    let selecteCategory = req.body.selecteCategory;
    const { error } = validateSmsCreate({message,selecteCategory}); 
    if (error) return res.status(400).send(error.details[0].message);
    
    // sms api integrationn would start here :)

  });

  

  module.exports = router; 