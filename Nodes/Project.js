const mongoose=require("mongoose");


const ProjectSchema=new mongoose.Schema({

title:{
type:String,
required:true
},

description:String,

technology:String,

image:String,

github:String

});


module.exports =
mongoose.model(
"Project",
ProjectSchema
);
