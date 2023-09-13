const mongoose = require('mongoose');
const express = require('express')
const Db_Yt_Channel = require('../model/db_yt_channel');

const yt_channelRouter = express.Router();

yt_channelRouter.post('/create', async (req, res) => {
    try {
        const { name, description, profileImage } = req.body;
        const newChannel = await Db_Yt_Channel.create({
            name,
            description,
            profileImage
        })
        if (!newChannel) return res.send("not inserted")
        res.render('create_channel')
    } catch (err) {
        res.send(err.message)
    }
})

yt_channelRouter.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        if (req.body.length == 0) return res.send('body is empty');
        const { name, description, profileImage } = req.body;
        const update = await Db_Yt_Channel.findByIdAndUpdate(id, {
            name,
            description,
            profileImage
        })
        if (!update) return res.send('id not found');
        res.send("updated")
    } catch (err) {
        res.send(err.message)
    }
})


yt_channelRouter.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    const del = await Db_Yt_Channel.findByIdAndDelete(id)
    if (!del) return res.status(404).send('id not found');
    res.send("deleted record" + del)
})


module.exports = yt_channelRouter;