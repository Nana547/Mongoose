const TV = require("./tv.model")
const mongoose = require("mongoose")

exports.addTV = async(tvObj ) => {
    try {
      const newTV = new TV(tvObj);
      await newTV.save( );
      mongoose.disconnect( );  
    } catch (error) {
console.log(error)
    }
}