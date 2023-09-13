const mongoose = require('mongoose')
async function dbConnect() {
    mongoose.connect('mongodb://0.0.0.0:27017/youtube_db')
        .then(() => console.log("mongoDB is connected"))
        .catch((e) => console.log(e.message))
} 

module.exports = dbConnect;