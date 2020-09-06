const mongoose = require("Mongoose")
const { Schema } = require("mongoose")

let UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    // roles: {
    //     type: Array,
    //     required: true
    // },
    role: {
        type: String,
        required: true,
    },
    token: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
})

module.exports = UserSchema