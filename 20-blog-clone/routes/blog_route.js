const express = require('express')
const Db_Blog = require('../model/db_blogs')

const blogRouter = express.Router()

blogRouter.post('/create', async (req, res) => {

    const { title,desc } = req.body;
    
    const blog = await Db_Blog.create({
        title,desc
    })

    if (!blog) return res.send('someThing wrong')
    res.redirect('/blog')
})





module.exports = blogRouter