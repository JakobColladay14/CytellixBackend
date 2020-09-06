const userService = require("../service/user.service")
const commonService = require("../service/common.service")

class AuthController {
    
    async signIn(req, res) {
        let { email, password } = req.body
        let user = await userService.getUserByEmail(email)

        if(user == null)
            return res.json({ msg: "Email or password is incorrect", user: null })
        
        let didLoginSucceed = await commonService.checkHash(password, user.password)

        if (didLoginSucceed) {
            let token = await commonService.generateToken()
            user['token'] = token
            res.json({msg: "success", user})
        }
        else 
            res.json({ msg: "Email or password is incorrect", user: null })
    }

    async signUp(req, res) {
        let user = await userService.createUser(req.body)
        let token = await commonService.generateToken()
        user['token'] = token
        res.json(user)
    }

    signOut(req, res) {

    }

    async permissions(req, res) {
        let { userId } = req.params
        let permission = await userService.getUserById(userId)
        let roles = []

        switch (permission.role) {
            case 'USER':
                roles.push('USER')
                break;
            case 'AUTHOR':
                roles.push('USER', 'AUTHOR')
                break;
            case 'ADMIN':
                roles.push('USER', 'AUTHOR', 'ADMIN')
                break;
        }

        res.json(roles)
    }

}

module.exports = new AuthController