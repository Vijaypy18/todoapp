const express = require('express');
// const dbConnect = require('./config/database');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
//helo

// Import the router correctly
const  todoRoutes = require("./routes/todo"); // Make sure path is correct
app.use("/api/v1", todoRoutes);  // Register routes with prefix '/api/v1'

app.get('/',(req,res) => {
    res.send(`<h1> This is HomePage Babay<h1>`);
});
const DbConnect = require("./config/database");
DbConnect();

app.listen(PORT,() => { 
    console.log("APP IS RUNNING ON PORT:3000");
});


