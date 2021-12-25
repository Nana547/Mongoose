const mongoose = require("mongoose");
const Movie = require("../movie/movie.model.js");
const yargs = require("yargs");
//  require("../movie.model.js")

const TVSchema =  Movie.discriminator("TVSchema" , new mongoose.Schema({
    season : {
        type : "Number",
        required : "true",
    },
}));

const TV = mongoose.model("TVSchema");

module.exports = TV ;