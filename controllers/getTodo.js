const Todo = require("../models/Todo");

exports.getTodo = async (req,res) => {
 try{
    const response = await Todo.find({});
    res.status(200).json({
        success:true,
        data:response,
        message:"Entire todo data is fetched"
    });
 }catch(err)
 {
    console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'server error',
        });
 }
};

exports.getTodoById = async (req,res) => {
    try{
         const {id}  = req.params;
         const todo = await Todo.findById(id);

         if(!todo)
         {
          return  res.status(404).json({
            success : false,
            message: "No data found with given Id",
            })
         }
         //data for given id found
         res.status(200).json({
            success:true,
            data:todo,
            message:`todo ${id} data successfully fetched`,
          })
    }catch(err)
    {
        console.error(err);
        // console.log(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'server error',
    });
}
}
