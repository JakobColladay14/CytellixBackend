const mongoose = require('mongoose');
const config = require('./app.config')

mongoose.connect(config.dbUrl, config.dbOptions)

const db = mongoose.connection

db.on("connected", function() {
    console.log("Mongoose default connection open to " + config.dbUrl)
})

db.on("error", function(err) {
    console.log("Mongoose default connection error: " + err)
})

db.on("disconnected", function () {
    console.log("Mongoose default connection disconnected")
})