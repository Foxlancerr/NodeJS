const express = require('express')
const Db_User = require('../model/db_users')

const userRouter = express.Router()

userRouter.post('/signup', async (req, res) => {

    const { role, email, username, password } = req.body;
    const existUser = await Db_User.findOne({ username, email })
    if (existUser) return res.render('login', {
        info: "Sorry! user is already exist , just Signin"
    })
    const user = await Db_User.create({
        username, password, email, role
    })
    if (!user) return res.send('someThing wrong')
    res.render('login', {
        info: 'user is successfully created'
    })
})

userRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {

        const token = await Db_User.matchPassword(username, password);
        if (!token) res.redirect('/signup')
        res.cookie('token', token).redirect('/')
    } catch (err) {
        console.error(err)
        res.render('signup', {
            info: err.message
        })
    }
})

module.exports = userRouter