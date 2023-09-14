const jsonToken = require('jsonwebtoken');
const { get } = require('mongoose');
console.log(jsonToken)
const privateKey = "yt-Clone"

function setUser(user) {
    return jsonToken.sign({ ...user }, privateKey)
}

function getUser(token) {
    return jsonToken.verify(token, privateKey)
}

module.exports = { setUser, getUser }

// const token = setUser({
//     name:"ahmad",
//     age:23
// })

// console.log(token)
// const user = getUser(token);
// console.log(user);
