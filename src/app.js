require("./db/connection")
const yargs = require("yargs")
const { addMovie, findMovies, updateMovies, removeMovies } = require("./movie/movie.functions")
const { addTV, findTV, updateTV, deleteTV } = require("./tv/tv.functions")
const mongoose = require("mongoose")

const app = async (args) => {
    try {
        if (args.add) {
            const movieObject = {
                title: args.title,
                actor: args.actor,
                rating: args.rating,
            };
            await addMovie(movieObject);
            mongoose.disconnect();
        
    } else if ( args.read){
     const readObj = { }
     await findMovies(readObj)
     mongoose.disconnect();
    } else if (args.update){
        const updateObj = { }
        await updateMovies(updateObj)
        mongoose.disconnect( )

    } else if (args.remove){
       deleteObj = { }
       await removeMovies(deleteObj)
       mongoose.disconnect( ) 
       
    } else if (args.addtv){
        const tvObj = { }
        await addTV(tvObj);
        mongoose.disconnect( )
    } else if(args.findTV){
        fndObj = { }
        await findTV(fndObj)
        mongoose.disconnect( )
    }
     else if(args.updateTV){ 
         updObj = { }
         await updateTV(updObj)
         updateTV.save( )
         mongoose.disconnect( )
     }
     else if(args.deleteTV) {
         delObj = { }
         await deleteTV(delObj)
         deleteTV.save( )
         mongoose.disconnect( )
     }
    else {
        console.log("Incorrect command");
        mongoose.disconnect();
    }

} catch (error) {
    console.log(error)
    mongoose.disconnect();
}
}

(yargs.argv)