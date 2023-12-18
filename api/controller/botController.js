const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const conversationSchema = require("../models/botModel")


const sendMg = (req, res) => {
    res.json("yae")
}

module.exports = {
    sendMg,
}