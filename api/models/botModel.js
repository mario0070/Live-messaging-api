const mongoose = require("mongoose")

const schema = mongoose.Schema

const botSchema = new schema({
    message : {type : String, required : true},
},{timestamps : true})

module.exports = mongoose.model("Bot", botSchema)