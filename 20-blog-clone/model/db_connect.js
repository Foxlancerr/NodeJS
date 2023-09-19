const mongoose = require("mongoose")

async function connectDB() {
    mongoose.connect('mongodb://0.0.0.0:27017/blog_clone')
        .then(() => console.log("mongoDb is connected successfully"))
        .catch(err => console.error(err.message))
}

module.exports = connectDB;