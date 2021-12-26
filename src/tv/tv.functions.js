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

exports.findTV = async(findObj) =>{
  try {
    const newTV = new TV(findObj)
    await newTV.save( )
    newTV.find({title, actor, rating, season}).toArray( )
    await newTV.save( )
    console.log(`The title of the TV show is : ${findObj.title}`)
    console.log(`The actor of this TV series is : ${findObj.actor}`)
    console.log(`The rating of this TV series is : ${findObj.rating}`)
    console.log(`The season of this TV series is : ${findObj.season}`)
  } catch (error) {
    console.log(error)
  }
}

exports.updateTV = async (updatObj ) =>{
  try {
    const newTV = new TV(updatObj)
    await newTV.save( )
    newTV.update({title: updatObj.title}, {actor: updatObj.actor}, {rating: updatObj.rating}, {season: updatObj.season})
    await newTV.save( )
    console.log(`Succesfully Updated ${updatObj.title}`)
  } catch (error) {
    console.log(error)
  }
}

exports.deleteTV = async (deletObj ) =>{
  try {
   const newTV = new TV(deletObj)
   await newTV.save( )
   newTV.remove({title: deletObj.title})
   await newTV.save( )
   console.log(`Succesfullt deleted ${deletObj.title}`)
  } catch (error) {
    console.log(error) 
  }
}