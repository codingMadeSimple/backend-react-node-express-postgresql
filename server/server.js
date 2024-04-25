const express = require('express');
const cors= require('cors');
const bodyParser = require('body-parser');

//Server that is an express object
//Gives all methods of the express object
const app = express();

//Helps parse json server requests
app.use(express.json());
//Middleware for save connection
app.use(cors());

//endpoints
app.get('/adduser', (req, res) => {
  console.log(req.body);
  res.send("Response Received" + req.body); 
  console.log(req.query)
});

app.listen(4000, () => console.log('Server on port 4000'));