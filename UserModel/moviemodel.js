
const mongoose=require("mongoose")
const movieSchema=mongoose.Schema({
    moviename:{
        type:String
    },
    movietype:{
        type:String
    }
})
const movieModel=mongoose.model("movie",movieSchema)
module.exports=movieModel