const express = require("express")
const route = express.Router()
const botController = require("../controller/botController")

route.post("/", botController.sendMg)

module.exports = route