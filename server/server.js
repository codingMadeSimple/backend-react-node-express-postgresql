const express = require("express");
const cors = require("cors");
const pool = require("./database2");

//Server that is an express object
//Gives all methods of the express object
const app = express();

//Helps parse json server requests
app.use(express.json());
//Middleware for save connection
app.use(cors());

//endpoints
app.get("/adduser", (req, res) => {
  console.log(req.body);
  res.send("Response Received" + req.body);
  console.log(req.query);
});

app.post("/adduser", (req, res) => {
  const username = req.body["username"];
  const password = req.body["password"];

  console.log("Username:", username);
  console.log("Password:", password);

  const insertStatement = `INSERT INTO accounts (username, password) VALUES ('${username}', '${password}')`;

  pool.query(insertStatement).then((response) => {
  console.log("Data Saved")
  console.log(response);
  }).catch((error) => {
  console.log("ERROR", error);
});

  // console.log(req.body);
  res.send("Response Received" + req.body);
});

app.listen(4000, () => console.log("Server on port 4000"));
