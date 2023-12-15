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
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                const user = new userSchema({
                    firstname : req.body.firstname,
                    email : req.body.email,
                    password : hash,
                    username : req.body.username,
                })
                user.save()
                .then(data => {
                    res.status(200).json({data})
                })
                .catch(err => {
                    res.status(500).json({err})
                }) 
            })
           
        }
    })
    .catch(err => {
        res.status(500).json({err})
    })
}

const loginUser = (req, res) => {
    userSchema.find({email : req.body.email})
    .then(data => {
        if(data.length <= 0){
            res.status(403).json({message : "user does not exist"})
        }else{
            bcrypt.compare(req.body.password, data[0].password, (err, hash) => {
                if(hash){
                    res.json(data)
                }else{
                    res.status(403).json({message : "invalid credential"})
                }
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
    loginUser,
}