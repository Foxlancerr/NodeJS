const express = require('express');
const Db_Yt_Channel = require('../model/db_yt_channel');
const Db_Yt_Channel_vedios = require('../model/db_yt_channel_vedios.js');
const staticRouter = express.Router();

staticRouter.get('/channel', async (req, res) => {
    const allChannels = await Db_Yt_Channel.find({});
    if (allChannels.length == 0) return res.send('No Data is available');
    console.log(allChannels)
    res.render('display_channels', { allChannels: allChannels })
})

staticRouter.get('/channel/vedios', async (req, res) => {
    const allChannelVedios = await Db_Yt_Channel_vedios.find({});
    if (allChannelVedios.length == 0) return res.send('No Data is available');
    console.log(allChannelVedios)
    res.render('display_vedios',{ allChannelVedios: allChannelVedios })
})

staticRouter.get('/channel/vedios/create',(req,res)=>{
    res.render('create_vedio')
})

staticRouter.get('/channel/create',(req,res)=>{
    res.render('create_channel')
})

staticRouter.get('/',(req,res)=>{
    res.render('home')
})


module.exports = staticRouter;