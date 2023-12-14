const mongoose = require("mongoose")

const schema = mongoose.Schema

const userSchema = new schema({
    firstname : {type : String, default : null},
    lastname : {type : String, default : null},
    username : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    profilePic : {type : String, default : null},
},{timestamps : true})

module.exports = mongoose.model("User", userSchema)