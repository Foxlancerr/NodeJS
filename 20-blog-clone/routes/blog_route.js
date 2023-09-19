const express = require('express')
const Db_Blog = require('../model/db_blogs')

const blogRouter = express.Router()

blogRouter.post('/create', async (req, res) => {

    const { title,desc } = req.body;
    
    const blog = await Db_Blog.create({
        title,desc
    })

    if (!blog) return res.send('someThing wrong')
    res.render('blog')
})

blogRouter.post('/:id', async (req, res) => {
    const id = req.params.id
    
    const blog = await Db_Blog.findOne({id})

    if (!blog) return res.send('someThing wrong')
    res.render('blog')
})



module.exports = blogRouter