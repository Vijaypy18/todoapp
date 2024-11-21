 const express = require("express");
 const router =express.Router();
 //import controlloer
 const { createTodo } = require("../controllers/createtodo");
 //it will fetch the element by route and byId using same code;
 const { getTodo , getTodoById } = require("../controllers/getTodo");
 const {updateTodo} = require("../controllers/updateTodo");
 const {deleteTodo} = require("../controllers/deleteTodo");
 //define API routes
 router.post("/createTodo", createTodo);
 router.get("/getTodos", getTodo);

 router.get("/getTodos/:id", getTodoById);
 router.put("/updateTodo/:id",updateTodo); 
 router.delete("/deleteTodo/:id", deleteTodo);

 module.exports = todos;