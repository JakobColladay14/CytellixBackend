const postService = require("../service/post.service")

class PostController {

    async newPost(req, res) {
        let { userId } = req.params
        let newPost = await postService.createPost(req.body, userId)

        res.json(newPost)
    }

    async getPostsByUser(req, res) {
        let { userId } = req.params
        let posts = await postService.getPostsByUser(userId)
        
        res.json(posts)
    }

    async getAllPosts(req, res) {
        let posts = await postService.getAllPosts()

        res.json(posts)
    }

    async updatePost(req, res) {
        let updatedPost = await postService.updatePost(req.body)

        res.json(updatedPost)
    }

    async deletePost(req, res) {
        let { id } = req.params
        let resp = await postService.deletePostById(id)

        res.json(resp)
    }

    async getPostById(req, res) {
        let { postId } = req.params

        try {
            let post = await postService.getPostById(postId)
            res.json(post)
        } catch {
            res.json(null)
        }

    }

    async deletePostByUser(req, res) {
        let { userId } = req.params
        let resp = await postService.deletePostByUser(userId)

        res.json(resp)
    }
}


module.exports = new PostController()