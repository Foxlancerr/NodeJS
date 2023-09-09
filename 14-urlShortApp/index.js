/**
 * *******************************************************************************
 * @urlShortnerApp
 *  this is used for short the url if it so long.
 *  @param {
 *      const shortid = require('shortid')
 *      const id = shortid()
 *      console.log(id) 
 *   }
 * 
 * *******************************************************************************
 */
const express = require('express');
require('./model/connectDB')();
const router = require('./routes/route.js')

const app = express()

app.use(express.json())
app.use('/',router)


app.listen(3000,()=>{
    console.log("app is connected");
})