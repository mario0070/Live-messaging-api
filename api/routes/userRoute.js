const express = require("express")
const route = express.Router()
const userController = require("../controller/userController")

route.get("/", userController.getUser)
route.post("/", userController.createUser)

module.exports = route