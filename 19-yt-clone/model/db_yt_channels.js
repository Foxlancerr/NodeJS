const mongoose = require('mongoose');

const yt_channelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    profileImage: String,
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'yt_channel_vedio'
    }
}, { timestamps: true })

const Yt_Channel = mongoose.model('yt_channel',yt_channelSchema)

module.exports = Yt_Channel;