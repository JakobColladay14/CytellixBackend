const db = require("../models/index")
const commonService = require("./common.service")

class UserService {
    async createUser(user) {
        let checkUser = await db.User.findOne({email: user.email.toLowerCase()})
        let hp

        if (checkUser) {
            Promise.reject({
                msg: "Account already exists"
            })
        } else {
            hp = await commonService.hashPassword(user.password)
        }


        user.password = hp.hash
        user.salt = hp.salt
        user.email = user.email.toLowerCase()


        let newUser = new db.User({
            name: user.name,
            email: user.email,
            role: user.role,
            password: user.password,
            salt: user.salt
        })  
        return newUser.save()
    }

    getUserByEmail(email) {
        return db.User.findOne({email: email.toLowerCase()})
    }

    getRole(userId) {
        return db.User.findOne({_id: userId}, { role: true })
    }

    getUserById(userId) {
        return db.User.findOne({ _id: userId})
    }

    updateUser(userId, user) {
        return db.User.findByIdAndUpdate(userId,
            {
                name: user.name,
                email: user.email,
                admin: user.admin,
            }, 
            { new: true}
        )
    }

    deleteUser(userId) {
        return db.User.findByIdAndDelete(userId)
    }

}

module.exports = new UserService()