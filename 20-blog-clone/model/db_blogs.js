const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    coverImage:String,
    title:String,
    desc:String,
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
},{timestamps: true})

const Db_Blog = mongoose.model('blog',blogSchema);

module.exports = Db_Blog;