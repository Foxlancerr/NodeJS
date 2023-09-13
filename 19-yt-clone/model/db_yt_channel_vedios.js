const mongoose = require('mongoose')

const yt_channelVedioSchema = new mongoose.Schema({
    vedioUrl:{
        type:String
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String
    }
},{timestamps:true})

const Yt_Channel_Vedios = mongoose.model('yt_channel_vedio',yt_channelVedioSchema)

module.exports = Yt_Channel_Vedios;