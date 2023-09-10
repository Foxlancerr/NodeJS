<div style= "background-color:#012169; padding: 20px 20px">

# Server Side Rendering:

    serverside rendring means our Html file is render from server side.

we can design our UIs, and render it,but there have a problem
because all html files are render in index.js file is not a good idea.Have alot of reasons

- difficult to understand reading and writing code
- our nodejs which is serverside language will handle the UIs.

we also render the UIs in that way....

```
app.get('/',(req,res)=>{
    res.end(<h1>This is Simple rendering</h1>)
})
```

## Template Engine in ServerSide

    Template engine will solve that problems which is mention above.
    we can create a seperate file and with the help of template engine we can render our files.
    There are some most popular templates Engine.
        1. EJS
        2. PUG
    but here we can use EJS.

# [Installation Guide:](https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application)

## Installation

open terminal and type

    npm i ejs

Set the view engine to ejs or this is middleware and its location is index.js

    app.set('view engine', 'ejs');

### Note

    we can follow MVC pattern, so there have one folder where we can save ejs file.
    The folder name is views

There is another middleware which will say to the server that where my EJS file contains.

- by default we can store the ejs files inside the views folder.
- ./views/file_name.ejs
  we have required one module called ==> path-module

```
const path = require('path');
const express = require('express');
app.set("views", path.resolve(__dirname, "views"))
```

- res.render(file_pathname,{}).
- it will take two arguments.
  - file_pathname
  - the object which we sended property to the EJS file.

```
    res.render('home',{
        name:"ahmad"
    });
```

## Example:

```
var express = require('express');
var app = express();
var path = require('path');

// set the view engine to ejs
app.set('view engine', 'ejs');

//tell to server that look the file in the views folder
app.set("views",path.resolve("./views"))

// index page
app.get('/', function(req, res) {
  res.render('home');
});

// about page
app.get('/about', function(req, res) {
  res.render('about');
});

app.listen(8080);
console.log('Server is listening on port 8080');
```

this will give unique code every time when they render.



</div>
