const express = require('express');
const path = require('path');
const userRouter = require('./routes/user_route')
const staticRouter = require('./routes/static_route');
const blogRouter = require('./routes/blog_route');
const cookieParser = require('cookie-parser');


require('./model/db_connect.js')();
const app = express();

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use(cookieParser())



app.use('/user', userRouter)
app.use('/blog',blogRouter)
app.use('/',staticRouter)

app.listen(3000,()=>{
    console.log('listening on port 3000');
})