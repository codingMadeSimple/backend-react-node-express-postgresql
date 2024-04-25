// Desc: Database connection object
const { Pool } = require("pg");

const pool = new Pool({
  user: "dbtraining",
  password: "dbtraining",
  host: "localhost",
  port: 5432,
  //Had to use the new database name
  database: "db_login_practice",
});

module.exports = pool;
