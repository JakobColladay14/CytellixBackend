const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const config = require('../config/app.config')

class CommonService {

    hashPassword(pw) {
        let password = {}

        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(pw, salt);
        console.log(salt, hash, "This is after the bcrypt")
        password.salt = salt
        password.hash = hash

        return password
    }

    checkHash(pw, hash) {
        return bcrypt.compareSync(pw, hash)
    }

    generateToken(email) {
        let token = jwt.sign({email: email}, 
            config.secret,
            { expiresIn: '24h' }
        );
        
        return token
    }
}

module.exports = new CommonService()