const Movie = require("./movie.model")
const mongoose = require("mongoose")

exports.addMovie = async (movieObj ) => {
 try {
     const newMovie = new Movie(movieObj)
     await newMovie.save()
     mongoose.disconnect( )
 } catch (error) {
     console.log(error)
 }
}

exports.findMovies = async (movieObj) => {
    try {
       const newMovies = new Movie(movieObj) 
       await newMovies.save( )
       newMovies.find({title, actor, rating}).toArray( )
       await newMovies.save( )
       console.log(`The title of the movie is : ${movieObj.title }`)
       console.log(`The name of the actor is  : ${ movieObj.actor}`)
       console.log(`The movie rating is : ${movieObj.rating}`)
       mongoose.disconnect( )
    } catch (error) {
       console.log(error) 
    }
}

exports.updateMovies = async (updateObj) =>{
    try {
       const newMovis = new Movie(updateObj)
       await newMovis.save( ) 
       newMovis.update({title: updateObj.title}, {[updateObj.updatekey] : updateObj.updateValue})
       await newMovis.save( )
       console.log(`Succesfully updated ${updateObj.title}`)
    } catch (error) {
        console.log(error)
    }
}

exports.removeMovies = async (deleteObj) => {
    try {
      const newMoves = new Movie(deleteObj)  
      await newMoves.save( )
      newMoves.remove({title: deleteObj.title})
      await newMoves.save( )
      console.log(`Successfully Deleted ${deleteObj.title}`)
    } catch (error) {
      console.log(error)  
    }
}