let jwt = require('jsonwebtoken')
let config = require('../config/app.config')

let checkToken = (req, res, next) => {
    let token = req.headers['authorization'];
    console.log(req.headers)
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length)
    }

    if(token) {
        jwt.verify(token, config.secret, (err,decoded) => {
            if(err) {
                return res.json({
                    success: false,
                    message: 'Token is not valid',
                })
            } else {
                req.decoded = decoded
                next()
            }
        })
    } else {
        return res.json({
            success: false,
            message: 'Auth Token is not supplied'
        })
    }
}

module.exports = {
    checkToken: checkToken
}