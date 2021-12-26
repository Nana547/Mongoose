const mongoose = require("mongoose");
// const { number } = require("yargs");
 const { strict, string, number } = require("yargs")

// I am going to introduce a discriminator key so that the TV schema can inherit from the Movie Schema.
//  The Movie Schema is The BASE

 baseOptions = {
     discrimantorKey: "String",
  };

const movieSchema = mongoose.model("movieSchema" , new mongoose.Schema({
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
    }, baseOptions,

}));

const Movie = mongoose.model("movieSchema" );

module.exports = Movie ;