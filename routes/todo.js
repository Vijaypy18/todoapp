const express = require('express');
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");
const { getTodo,getTodoById } = require("../controllers/getTodo");
const { deleteTodo } = require("../controllers/deleteTodo");
const { updateTodo } = require("../controllers/updateTodo");
// Define routes
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodos/:id", getTodoById);
router.delete("/deleteTodo/:id",deleteTodo);
router.put("/updateTodo/:id",updateTodo);
// Export the router correctly
module.exports = router;
