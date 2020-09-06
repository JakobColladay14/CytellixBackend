const mongoose = require('mongoose')
const config = require("../config/app.config")

const db = {}

config.models.forEach((model) => {
    db[model.name] = mongoose.model(model.name, require("./" + model.path))
})

module.exports = db;