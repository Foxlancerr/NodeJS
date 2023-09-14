const express = require('express');
const Db_User = require('../model/db_yt_users');
const yt_userRouter = express.Router();

yt_userRouter.post('/create', async (req, res) => {
    try{
        if (req.body.length == 0) return res.send('empty body');
        const {username,password,email} = req.body;
        
        const existUser = await Db_User.findOne({
            username: username,
            password: password
        })

        if (existUser) return res.redirect('/users/login')

        const newUser = await Db_User.create({
            username,
            password,
            email,
        })
        
        if (!newUser) return res.send("something wrong")
        res.render('create_users')
    }catch(err){
        res.send(err.message)
    }
})

//login user
yt_userRouter.post('/login', async (req, res) => {
    try{
        const {username,password} = req.body;
        
        const logUser = await Db_User.findOne({
            username: username,
            password: password
        })

        console.log("logUser"+logUser)
        
        if (!logUser) return res.redirect('/users/create')
            res.redirect('/users')
    }catch(err){
        res.send(err.message)
    }
})

yt_userRouter.delete('/delete/:id', async (req, res) => {
    try{
        const id = req.params.id;
        if (!id) return res.send('no id is present in the query parameter')
        
        if (req.body.length == 0) return res.send('empty body');
        
        const del = await Db_User.findByIdAndDelete(id);
        if (!del) return res.send('the user is not present with this id')
        
        res.send('the user is deleted with username is:'+ del.username)
    }catch(err){
        res.send(err.message)
    }
})

yt_userRouter.put('/update/:id', async (req, res) => {
    try{
        const id = req.params.id;
        if (!id) return res.send('no id is present in the query parameter')
        if(!req.body) return res.send('body is empty');
        const {username,password,email} = req.body;
        const update = await Db_User.findByIdAndUpdate(id, {
            username,
            password,
            email
        });
        
        if (!update) return res.send('the user is not present with this id')
        res.send('updated'+ update)
    }catch(err){
        res.send(err.message);
    }
})

module.exports = yt_userRouter;