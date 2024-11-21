 //import the model
 const Todo = require("../models/Todo");
 //define route handler 
 exports.deleteTodo = async (req, res) => {
    try {
        // Step 1: Find the id from the request parameters
        const { id } = req.params;

        // Step 2: Delete the todo by id
        await Todo.findByIdAndDelete(id);

        
        // Step 3: Send success response
        res.json({
            success: true,
            message: 'Deleted successfully',
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: err.message,
        });
    }
}
