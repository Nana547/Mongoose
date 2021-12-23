const mongoose = require("mongoose");
// const { number } = require("yargs");
 const { strict, string, number } = require("yargs")

const movieSchema = new mongoose.Schema({
 title: {
     type: String,
     unique : true,
     required : true,
 },
   actor: {
       type: String,
       default : "Not Specified",
   },
    rating: {
        type: Number,
        min: 1,
        max: 10,
        default: 5,
    },

});

const Movie = mongoose.model("Movies" , movieSchema );

module.exports = Movie ;