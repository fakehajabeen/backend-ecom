const mongoose= require("mongoose");

async function connectDB(){

    try {
     await   mongoose.connect(process.env.MONGODB_URI)
        
    } catch (error) {
        console.log(error)
        
    }
 }

 //mongoose.connect('mongodb://127.0.0.1/MERN-book')
module.exports= connectDB;

