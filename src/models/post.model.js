const mongoose = require("Mongoose")
const { Schema } = require("mongoose")

let ObjectId = Schema.ObjectId

let PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
    },
    bodyText: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

module.exports = PostSchema