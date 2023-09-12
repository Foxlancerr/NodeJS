const express = require('express');
const Url = require('../model/urlSchema.js')
const { getAllUrls } = require("../control/urlControl.js")
const auth = require('../middleware/auth.js')


const router = express.Router();

router.get('/',auth, async (req, res) => {
    console.log(req.user)
    const allUrl = await Url.find({createdBy:req.user._id})
    return res.render("home", { url: allUrl })
})

router.get('/register', (req, res) => {
    res.render("register")
})

router.get('/login', (req, res) => {
    res.render("login")
})

module.exports = router;

