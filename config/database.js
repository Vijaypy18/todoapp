const mongoose = require('mongoose');
require("dotenv").config();

const dbConnect = async () => {
    try{
        await  mongoose.connect(process.env.DATABASE_URL)

        
         console.log("DB ka connection is succesfully")
    }catch(error){
         console.log("Db coonection issues");
         console.log(error.message);
         process.exit(1);
    }
}

module.exports = dbConnect;