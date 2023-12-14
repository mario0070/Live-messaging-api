const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")

app.use(express.json())
app.use(morgan("dev"))
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )

    if(req.method == "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
    }
    next()
})

app.get("/", (req, res) => {
    res.status(200).json({
        message : "welcome to Chat app api",
        version : "1.0",
        author : "muhammadjamiu"
    })
})

app.use((req, res) => {
    res.status(404).json({
        message : "Endpoint not found"
    })
})

module.exports = app