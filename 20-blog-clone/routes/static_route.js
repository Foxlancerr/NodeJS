const express = require('express');
const staticRouter = express.Router();
const Db_Blog = require('../model/db_blogs')

staticRouter.get('/',async (req,res) =>{
   res.render('home')
})

staticRouter.get('/login',(req,res) =>{
    res.render('login')
})

staticRouter.get('/signup',(req,res) =>{
    res.render('signup')
})

/**
 * Blogs Get requests
 * ****************************************************************************
 */

staticRouter.get('/blog',async (req,res) =>{
    const blogs = await Db_Blog.find({})
    if(!blogs) res.redirect('/create')
    res.render('blogs',{
        blogs:blogs
    })
})

staticRouter.get('/blog/create',async(req,res)=>{
    res.render('create_blog')
})

staticRouter.get('/blog/:id', async (req, res) => {
    const id = req.params.id
    
    const blog = await Db_Blog.findOne({_id: id})
    console.log(blog)
    res.render('each_blog',{
        blog:blog
    })
})




module.exports = staticRouter;