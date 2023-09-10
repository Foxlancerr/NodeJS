const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    siteUrl: String,
    totalRequest: [{timeStamp: Number }]
}, { timestamps: true })

const Url = mongoose.model('urlShort', urlSchema);

module.exports = Url;