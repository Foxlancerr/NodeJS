const express = require('express')
const Db_Yt_Channel_Vedios = require('../model/db_yt_channel_vedios');

const yt_channelVediosRouter = express.Router();

yt_channelVediosRouter.post('/create', async (req, res) => {
    try {
        if (req.body.length == 0) return res.send("no data is available in body section");
        const { vedioUrl, title, description, thumbnail } = req.body;
        const newVedio = await Db_Yt_Channel_Vedios.create({
            vedioUrl,
            title,
            description,
            thumbnail
        })
        if (!newVedio) return res.send("not inserted")
        res.render('create_vedio')
    } catch (err) {
        res.send(err.message);
    }
})


yt_channelVediosRouter.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        if (req.body.length == 0) return res.send('body is empty');
        const { vedioUrl, title, description, thumbnail } = req.body;
        const update = await Db_Yt_Channel_Vedios.findByIdAndUpdate(id, {
            vedioUrl,
            title,
            description,
            thumbnail
        })
        if (!update) return res.send('id not found');
        res.send("updated", + id)
    } catch (err) {
        res.send(err.messege)
    }
})
yt_channelVediosRouter.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const del = await Db_Yt_Channel_Vedios.findByIdAndDelete(id)
        if (!del) return res.status(404).send('id not found');
        res.send("deleted record", + del)
    } catch (err) {
        res.send(err.message)
    }
})


module.exports = yt_channelVediosRouter;