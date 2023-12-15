const express = require("express")
const route = express.Router()
const conversationController = require("../controller/conversationController")

route.get("/", conversationController.allConversation)
route.post("/", conversationController.createMsg)

module.exports = route