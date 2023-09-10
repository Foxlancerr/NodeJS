const express = require('express');
const User = require("../model/userSchema");

const router = express.Router()

router.post('/register', async (req, res) => {
    if (req.body.length == 0) return res.send("body is empty");
    
    const user = await User.create({
        username: req.body.username,
        passward: req.body.passward,
        email: req.body.email
    })
    res.redirect("/login");
})

router.post('/login', async (req, res) => {
    if (req.body.length == 0) return res.send("body is empty");
    const { username, passward } = req.body;
    const loggedIn = await User.findOne({
        username: username,
        passward: passward
    })
    if (!loggedIn) return res.redirect("/register")
    res.redirect("/");
})



module.exports = router;