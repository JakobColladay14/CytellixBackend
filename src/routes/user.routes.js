const express = require("express");
const router = express.Router();
const checkAuth = require("../middlewares/check.auth");
const userController = require("../controllers/user.controller")
const middleware = require('../middlewares/check.auth')

router.get("/getUser/:userId", middleware.checkToken, userController.getUserById);

router.put("/updateUser/:userId", middleware.checkToken, userController.updateUser);

router.delete("/removeUser/:userId", middleware.checkToken, userController.deleteUser)

module.exports = router