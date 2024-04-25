// Desc: Database connection object
const { Pool } = require("pg");

const pool = new Pool({
  user: "dbtraining",
  password: "dbtraining",
  host: "localhost",
  port: 5432,
  database: "postgres",
});

pool
  .query("CREATE DATABASE db_login_practice")
  .then((response) => {
    console.log("Database created");
    console.log(response);
  })
  .catch((error) => {
    console.log("ERROR", error);
  });

module.exports = pool;
