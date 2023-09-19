const mongoose = require("mongoose")
const crypto = require('crypto')
const { createNewToken } = require('../utils/token')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type:String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    email: {
        type: String,
        required: true
    },
    salt: String
}, { timestamps: true })


/**
 * In here we can encrypt the password using the node js built in pakage called @crypto
 * *************************************************************************************
 */
userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return;
    const salt = crypto.randomBytes(16).toString();
    const hashedPassword = crypto.createHmac("sha256", salt)
        .update(user.password)
        .digest('hex')

    this.salt = salt;
    this.password = hashedPassword;
    next();
})

/**
 * here we can check the user password is valid or not
 * *************************************************************************************
 */
userSchema.static('matchPassword',async function (username, password){
    const user = await this.findOne({username})
    if(!user) throw new Error('Sorry! no user is exist')

    const salt = user.salt;
    const hashedPassword = user.password

    const providedPassword = crypto.createHmac("sha256", salt)
    .update(password)
    .digest('hex')

    if(providedPassword !== hashedPassword) throw new Error('password is not correct')

    const token = createNewToken(user);
    console.log(token)
    return token
})

const Db_User = mongoose.model('user', userSchema)

module.exports = Db_User