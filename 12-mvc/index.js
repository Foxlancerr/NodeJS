/**
 * *******************************************************************************
 * @restApi
 * *******************************************************************************
 */
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/userRoute.js')
const app = express();

//mongoDB connection
require('./model/connectDB.js')();

//middleware which read the body data
app.use(express.json());

//middleware which can handle routes
app.use('/api/users', router)

app.listen(3000, () => {
    console.log('listening on post 3000');
})
