const express = require("express");

const moment = require("moment");
const uuidv1 = require("uuid/v1");
let db = require("../db");

const router = express.Router();
// create some helper functions to work on the database

router.post("/Search", (req, res, next) => {
  var sql = `SELECT orderid,name,food,time,code, createdat, message FROM orders`;
  db.query(sql, function(err, result) {
    if (err) {
      res.status(500).send({ error: err });
    }
    res.json(result);
  });
});

module.exports = router;
