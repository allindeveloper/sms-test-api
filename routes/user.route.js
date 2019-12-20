const express = require('express');

const bcrypt = require("bcrypt");
const {validateUserCreate, validateUserLogin} = require('../models/user'); 

let db = require('../db')


const router = express.Router();

// create some helper functions to work on the database


  // register route
  router.post("/Create", async (req, res, next) => {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let password = req.body.password;
    let salt = 10;
    const { error } = validateUserCreate({firstname,lastname,email,password}); 
    if (error) return res.status(400).send(error.details[0].message);
    await bcrypt.hash(password, salt, (err, hash) => {
      var sql = `INSERT INTO users (firstname, lastname, email, password) VALUES ("${firstname}", "${lastname}", "${email}", "${hash}")`;
      db.query(sql, function(err, result) {
        if (err) {
          res.status(500).send({ error: "An Error Has Occurred"  });
        }
       
        res
          .status(200)
          .json({ code: 200, status: "ok" });
      });
    });
  });

  module.exports = router; 