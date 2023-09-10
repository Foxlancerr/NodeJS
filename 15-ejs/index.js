/**
 * *******************************************************************************
 * @EJS_Template_Engine
 *  serverside rendring means our Html file is render
 *  from server side.
 * 
 * @installation
 *  npm install ejs
 *  @param {
 *     var express = require('express');
 * var app = express();
 * var path = require('path');
 * 
 * // set the view engine to ejs
 * app.set('view engine', 'ejs');
 * 
 * //tell to server that look the file in the views folder
 * app.set("views", path.resolve(__dirname, "views"))
 * 
 * // index page
 * app.get('/', function(req, res) {
 *   res.render('home');
 * });
 * 
 * // about page
 * app.get('/about', function(req, res) {
 *   res.render('about');
 * });
 * 
 * app.listen(8080);
 * console.log('Server is listening on port 8080'); 
 *   }
 * 
 * *******************************************************************************
 */
const path = require("path")
const express = require('express');


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "views"))

app.get("/", (req, res) => {
    res.render("home")
})


app.listen(3000, () => {
    console.log("app is connected");
})