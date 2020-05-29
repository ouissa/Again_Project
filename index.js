const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user"); //new addition
const volunteer = require("./routes/volunteer"); //new addition
const InitiateMongoServer = require("./config/db");
const path = require("path");
var cors = require("cors");

// Initiate Mongo Server
InitiateMongoServer();


const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());


// this basically will stay the samw, except it should handle different kinds of users, which means more subroutes
app.use("/user", user);
app.use("/volunteer", volunteer);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
