const express = require('express');
const Url = require('../model/urlSchema.js')
const { getAllUrls } = require("../control/urlControl.js")


const router = express.Router();

router.get('/', async (req, res) => {
    const allUrl = await Url.find({})
    return res.render("home", { url: allUrl })
})

router.get('/register', (req, res) => {
    res.render("register")
})

router.get('/login', (req, res) => {
    res.render("login")
})

module.exports = router;

