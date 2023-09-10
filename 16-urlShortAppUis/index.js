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
const path = require('path');
require('./model/connectDB')();
const router = require('./routes/route.js')

const app = express()

app.use(express.urlencoded({ extended:false}))
app.use(express.json())
app.use('/',router)

app.set('view engine', "ejs");
app.set('views',path.resolve(__dirname,"views"));


app.listen(3000,()=>{
   console.log("app is connected");
})