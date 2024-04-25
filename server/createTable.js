// Desc: Database connection object
const { Pool } = require("pg");

const pool = new Pool({
  user: "dbtraining",
  password: "dbtraining",
  host: "localhost",
  port: 5432,
  database: "db_login_practice",
});

const createTableQuery = `CREATE TABLE accounts (
  user_id serial PRIMARY KEY,
  username VARCHAR (50) UNIQUE NOT NULL,
  password VARCHAR (50) NOT NULL);
`

pool
  .query(createTableQuery)
  .then((response) => {
    console.log("Table Created");
    console.log("response", response);
  })
  .catch((error) => {
    console.log("ERROR", error);
  });

module.exports = pool;
