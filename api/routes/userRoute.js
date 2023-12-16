const express = require("express")
const route = express.Router()
const userController = require("../controller/userController")
const checkAuth = require("../middleware/checkAuth")

route.get("/",checkAuth, userController.getUser)
route.post("/", userController.createUser)
route.post("/login", userController.loginUser)
route.get("/google-login", userController.googleLogin)

module.exports = route