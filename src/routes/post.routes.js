const express = require("express");
const router = express.Router();
const checkAuth = require("../middlewares/check.auth");
const postController = require("../controllers/post.controller");
const middleware = require("../middlewares/check.auth")

router.post("/newPost/:userId", middleware.checkToken, postController.newPost);

router.put("/editPost", middleware.checkToken, postController.updatePost);

router.get("/getPostsByUser/:userId", middleware.checkToken, postController.getPostsByUser)

router.get("/getAllPosts", middleware.checkToken, postController.getAllPosts)

router.get('/getPostById/:postId', middleware.checkToken, postController.getPostById)

router.put("/updatePost", middleware.checkToken, postController.updatePost)

router.delete("/deletePost/:id", middleware.checkToken, postController.deletePost);

router.delete('/deleteByUser/:userId', middleware.checkToken, postController.deletePostByUser)

// Favorite Post

module.exports = router