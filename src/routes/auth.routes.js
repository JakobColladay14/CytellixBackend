const express = require("express");
const router = express.Router();
const checkAuth = require("../middlewares/check.auth");
const authController = require("../controllers/auth.controller");

router.post("/signin", authController.signIn);

router.post("/signup", authController.signUp);

router.post("/signout", authController.signOut);

router.get("/permissions/:userId", authController.permissions);

module.exports = router