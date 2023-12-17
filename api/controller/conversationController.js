const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const conversationSchema = require("../models/conversationModel")

const allConversation = (req, res) => {
    conversationSchema.find()
    .populate("sender")
    .populate("reciever")
    .then(data => {
        res.status(200).json({data})
    })
    .catch(err => {
        res.status(500).json({error:err})
    })
}

const createMsg = (req, res) => {
    const msg = new conversationSchema({
        message : req.body.message,
        sender : req.body.sender,
        reciever : req.body.reciever,
    })

    msg.save()
    .then(data => {
        res.status(200).json({data})
    })
    .catch(err => {
        res.status(500).json({error:err})
    })
}

const deleteConversation = (req, res) => {
    conversationSchema.findByIdAndDelete(req.body.id)
    .then(() => {
        res.status(200).json({message : "deleted"})
    })
    .catch(err => {
        res.status(500).json({error :err})
    })
}

const getSingleConversation = (req, res) => {
    conversationSchema.find({
        sender : req.body.sender,
        reciever : req.body.reciever
    })
    .then(data => {
        res.status(200).json({data})
    })
    .catch(err => {
        res.status(500).json({error : err})
    })
}

module.exports = {
    allConversation,
    createMsg,
    deleteConversation,
    getSingleConversation,
}