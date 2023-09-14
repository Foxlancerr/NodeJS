const express = require('express');
const path = require('path');
const yt_channelRouter = require('./routes/yt_channel_route.js')
const yt_userRouter = require('./routes/user_route.js')
const yt_channelVediosRouter = require('./routes/yt_channel_vedios_route.js')
const yt_staticRouter = require('./routes/static_route.js')

require('./model/db_connect.js')();
const app = express();

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.urlencoded({ extended: false}))
app.use(express.json())

app.use('/channel',yt_channelRouter)
app.use('/users',yt_userRouter)
app.use('/channel/vedios',yt_channelVediosRouter)
app.use('/',yt_staticRouter)

app.listen(3000,()=>{
    console.log('listening on port 3000');
})