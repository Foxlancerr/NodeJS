const express = require('express');
const Db_Yt_Channel = require('../model/db_yt_channels');
const Db_Yt_Channel_vedios = require('../model/db_yt_channel_vedios.js');
const Db_Yt_User = require('../model/db_yt_users');
const yt_staticRouter = express.Router();
const loginAuth = require('../midleware/auth')


/**
 * user getter request 
 * ****************************************************************************
 */ 
yt_staticRouter.get('/users',loginAuth, async (req, res) => {
    try{

        const users = await Db_Yt_User.find({});
        if (users.length == 0) return res.send('No Data is available');
        res.render('display_users', { users: users })
    }catch(err){
        console.log(err.message)
    }
})

yt_staticRouter.get('/users/create', (req, res) => {
    res.render('create_users')
})

/**
 * channel getter request 
 * ****************************************************************************
 */
yt_staticRouter.get('/channel',loginAuth, async (req, res) => {
    const allChannels = await Db_Yt_Channel.find({});
    if (allChannels.length == 0) return res.send('No Data is available');
    console.log(allChannels)
    res.render('display_channels', { allChannels: allChannels })
})

yt_staticRouter.get('/channel/create',loginAuth, (req, res) => {
    res.render('create_channel')
})


/**
 * channel_vedios getter request 
 * ****************************************************************************
 */
yt_staticRouter.get('/channel/vedios',loginAuth, async (req, res) => {
    const allChannelVedios = await Db_Yt_Channel_vedios.find({});
    if (allChannelVedios.length == 0) return res.send('No Data is available');
    console.log(allChannelVedios)
    res.render('display_vedios', { allChannelVedios: allChannelVedios })
})

yt_staticRouter.get('/channel/vedios/create',loginAuth, (req, res) => {
    res.render('create_vedio')
})


/**
 * login 
 * ****************************************************************************
 */ 
yt_staticRouter.get('/users/login', (req, res) => {
    res.render('login_users')
})

/**
 * home page getter request 
 * ****************************************************************************
 */ 
yt_staticRouter.get('/', (req, res) => {
    res.render('home')
})


module.exports = yt_staticRouter;