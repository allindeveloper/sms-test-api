let db = require('../db')

  
  const getUsers = (email) => {
    var sql = `SELECT * FROM users where email = ${email}`;
    db.query(sql, function (err, rows, fields) {
      if (err) {
        res.status(500).send({ error: 'Something failed!' })
      }
      return res.json(rows)
    })
  }



exports.getUsers = getUsers;


