
const mysql = require('mysql');

if(process.env.HOST && process.env.USERNAME && process.env.PASSWORD && process.env.DATABASE){
var connection = mysql.createConnection({
  host: process.env.HOST ,
  user: process.env.USERNAME ,
  password: process.env.PASSWORD ,
  database: process.env.DATABASE ,
  connectTimeout: 3600000
});
}else{
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'smsDb',
    connectTimeout: 3600000
  });
}


connection.connect(function(err) {
  if (err) throw err;
  console.log('connected!');
});

module.exports = connection;