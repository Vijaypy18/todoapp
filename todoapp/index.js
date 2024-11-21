//import express 
const express = require('express');
//creating an instance of express
const app = express();

//load config form env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;
 
//middleware to parse json request body
//always parse the data using data parser

app.use(express.json());

//import routes for ToDO API
const todos= require("./routes/todos");
//mount the todo ASPI routes
app.use("/api/v1", todos);




//default Route
app.get("/",(req,res) =>{
    res.send(`<h1> This is HomePage Baby<h1>`);

});

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//start server
app.listen(PORT,() => {
    console.log(`server started successfully at ${PORT}`);
});



