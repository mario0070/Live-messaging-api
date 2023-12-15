const mongoose = require("mongoose")

const schema = mongoose.Schema

const conversationSchema = new schema({
    sender : {type : schema.Types.ObjectId, required : true, ref : "User"},
    reciever : {type : schema.Types.ObjectId, required : true, ref : "User"},
    message : {type : String, required : true},
},{timestamps : true})

module.exports = mongoose.model("conversation", conversationSchema)