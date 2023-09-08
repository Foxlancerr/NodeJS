const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    age: String,
    gender:{
        type: String,
        enum:["male", "female"],
    }
})

const User = mongoose.model('user1',userSchema);

module.exports = User;