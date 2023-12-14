const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userSchema = require("../models/userModel")

const getUser = (req, res) => {
    userSchema.find()
    .then(data => {
        res.status(200).json({data})
    })
    .catch(err => {
        res.status(500).json({err})
    })
}

const createUser = (req, res) => {
    userSchema.find({email : req.body.email})
    .then(data => {
        if(data.length >= 1){
            res.status(402).json({message : "user already exist"})
        }else{
            const user = new userSchema({
                firstname : req.body.firstname,
                email : req.body.email,
                password : req.body.password,
                username : req.body.username,
            })
            user.save()
            .then(data => {
                res.status(200).json({data})
            })
            .catch(err => {
                res.status(500).json({err})
            }) 
        }
    })
    .catch(err => {
        res.status(500).json({err})
    })
}

module.exports = {
    getUser,
    createUser,
}