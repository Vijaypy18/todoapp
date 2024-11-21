 //import the model
 const Todo = require("../models/Todo"); 

 //define route handler
 exports.getTodo = async(req,res) => {
    try {
         //fetch all todo items form database
         const todos = await Todo.find({});
         //resopnse ke andar sare data ko send kar diya
         res.status(200).json({
         
            success: true,
            data: todos,
            message: "Entire Todo Data is fetched",
         });
    }catch(err) {
        console.error(err);
        // console.log(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'server error',
        });
                   
     }
    };

    exports.getTodoById = async(req,res) => {
      try {
         //extract todo item basis on id
         const {id} = req.params;
         const todo = await Todo.findById(id);   

         //data for given id  not found
         if(!todo) {
            return res.status(404).json({
               success : false,
               message: "No data found with given Id",
            })
         }
       //data for given id found
       res.status(200).json({
         success:true,
         data:todo,
         message:`todo ${id} data successfully fetcged`,
       })
      }catch(err) {
        console.error(err);
        // console.log(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'server error',
        });
                   
     }
      

      }
    














































































































































































 