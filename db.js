const { Client } = require('pg')
// const dotenv =require("dotenv");
// dotenv.config({path:'./config.env'});
const connection = new Client({
  host     : "cloudassg.cxg6poyroahl.ap-south-1.rds.amazonaws.com",
  user     : "postgres",
  database : "cloudAssg",
  password : "nikita-2510",
  port     : 5432
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

// connection.end();

module.exports = {connection}