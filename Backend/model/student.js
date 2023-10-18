const mongoose = require("mongoose");


const studentScehma = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    class:{
        type:String,
        required:true
    },
    marks:{
        type:Number,
        required:true
    }
})

const StudentModel = mongoose.model("student",studentScehma);

module.exports={
    StudentModel
}