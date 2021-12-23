 require("dotenv").config( )
 const mongoose = require("mongoose")

  const connection = async ( )=>{
     
     try {
        await mongoose.connect(process.env.MONGU_URI);
        console.log("Successfully Connected") ;

     } catch (error) {
        console.log(error);
     }
 }

 connection();