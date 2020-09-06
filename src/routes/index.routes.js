const express = require("express");


module.exports = function (app) {
    app.use("/api/auth", require("./auth.routes"));
    app.use("/api/user", require("./user.routes"));
    app.use("/api/post", require("./post.routes"));
}