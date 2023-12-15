const mongoose = require("mongoose")

const schema = mongoose.Schema

const conversationSchema = new schema({
    sender : {type : String, required : true},
    reciever : {type : String, required : true},
    message : {type : String, required : true},
},{timestamps : true})

module.exports = mongoose.model("conversation", conversationSchema)