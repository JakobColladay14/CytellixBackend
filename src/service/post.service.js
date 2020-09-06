const db = require("../models/index")
const commonService = require("./common.service")

class PostService {
    createPost(post, userId) {
        let newPost = new db.Post({
            title: post.title,
            bodyText: post.bodyText,
            userId,
            author: post.author,
        })

        return newPost.save()
    }

    getPostsByUser(userId) {
        return db.Post.find({userId: userId})
    }

    getAllPosts() {
        return db.Post.find()
    }

    getPostById(id) {
        console.log(id)
        return db.Post.findOne({_id: id})
    }

    updatePost(post) {

        return db.Post.findByIdAndUpdate(post._id, 
            {
                title: post.title,
                bodyText: post.bodyText,
                author: post.author 
            }, 
            { new: true}
        )
    }

    deletePostById(id) {
        return db.Post.findByIdAndDelete(id)
    }

    deletePostByUser(userId) {
        return db.Post.deleteMany({userId: userId})
    }
}

module.exports = new PostService()