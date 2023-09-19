const JWT = require('jsonwebtoken');
require('dotenv').config()

privateKey = "hello world"

function createNewToken(user){
    const payload = {
        role: user.role,
        email: user.email,
        username: user.username
    }
    const token = JWT.sign(payload,privateKey)
    return token
}

function verifyToken(token){
    const user = JWT.verify(token,privateKey)
    return user
}

module.exports = {
    createNewToken,
    verifyToken
}