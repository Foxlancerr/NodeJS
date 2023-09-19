const express = require('express');
const staticRouter = express.Router();
const authLogin = require('../middlewares/auth');
const Db_Blog = require('../model/db_blogs')

staticRouter.get('/',authLogin,async (req,res) =>{
   res.render('home',{
    user: req.user
   })
})

staticRouter.get('/user/login',(req,res) =>{
    res.render('login')
})

staticRouter.get('/user/signup',(req,res) =>{
    res.render('signup')
})

/**
 * Blogs Get requests
 * ****************************************************************************
 */

staticRouter.get('/blog',authLogin,async (req,res) =>{
    const blogs = await Db_Blog.find({})
    if(!blogs) res.redirect('/create')
    res.render('blogs',{
        blogs:blogs,
        user: req.user
    })
})

staticRouter.get('/blog/create',authLogin,async(req,res)=>{
    console.log(req.user)
    res.render('create_blog',{
        user: req.user
    })
})

staticRouter.get('/blog/:id',authLogin, async (req, res) => {
    console.log(req.user)
    const id = req.params.id
    
    const blog = await Db_Blog.findOne({_id: id})
    console.log(blog)
    res.render('each_blog',{
        blog:blog,
        user: req.user
    })
})




module.exports = staticRouter;