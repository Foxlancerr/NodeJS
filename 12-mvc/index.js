/**
 * *******************************************************************************
 * @restApi
 * *******************************************************************************
 */
const express = require('express');
const mongoose = require('mongoose');
console.log(mongoose)
const router = require('./routes/userRoute.js')
const app = express();

mongoose.connect("mongodb://0.0.0.0:27017")
    .then(() => {
        console.log("connection is established")
    })
    .catch(err => console.log(err.message))

app.use(express.json());




app.use('/api/users', router)

app.listen(3000, () => {
    console.log('listening on post 3000');
})
