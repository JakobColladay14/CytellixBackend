const userService = require("../service/user.service")

class UserController {

    async getUserById(req, res) {
        let { userId } = req.params
        let user = await userService.getUserById(userId)
        res.json(user)
    }

    async updateUser(req, res) {
        let { userId } = req.params
        let newUser = await userService.updateUser(userId, req.body)

        res.json(newUser)
    }

    async deleteUser(req, res) {
        let { userId } = req.params
        let resp = await userService.deleteUser(userId)

        res.json("Success")
    }

}

module.exports = new UserController()