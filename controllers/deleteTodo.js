const Todo = require("../models/Todo");

exports.deleteTodo = async (req,res) => {
    try{
       const {id} = req.params;
       await Todo.findByIdAndDelete(id);
       res.status(200).json( 
       {
          success:true,
          message:"deleted succesfully",
       })
    }catch(err)
    {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: err.message,
        });
    }
}
