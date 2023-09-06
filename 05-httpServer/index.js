/**
 *****************************************************************************************
 * @http_modules             lec4                  93/9/2023
 * HTTP is the default request-response mechanism which will be used for sending and
 * recieving req and responce.
 * it is built in module which is implemented in NodeJS
 * @param { const http = require('http') }
 * 
 * @how_to_create_server
 *   there is a method in http which is @createServer and it wil make the server,it
 *   also can take two arguments.
 *   1)request
 *   2)response
 *   it will also return some data(object data).
 *   @param { const server = http.createServer((req,res)=>{ })}
 *   
 *   then it will return object data which can store it and we called @listen method
 *   and it will take two arguments.
 *   1) port number where we can listen
 *   2) callback function which will show that our server is running.
 *   @param { server.listen(portNumber, callbackFunction)}
 * 
 * @disadvantage
 *   In http module,if we can define different routes we can used condition like ifelse and
 *   switch statements to differentaite differnt routes.
 *   it will consume a lot of time,and not easy to understand
 * @express
 *   we can use express instead of http modules,because it easy to understand and have alot 
 *   of build in functionality.
 * ************************************************************************************** */
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} new request is recieved\n`
    fs.appendFile("./05-httpServer/log.txt", log, (err, data) => {
        switch (req.url) {
            case '/': res.end("Home page");
                break;
            case '/contact': res.end("Contact page");
                break;
            case '/about': res.end("About page");
                break;
            default: res.end("404! erorr page not found");
        }
    })
})
server.listen(3000, () => {
    console.log("Listening on port 3000");
})
 /**
* ************** @The_End ******************
* ************** @The_End ******************
* ************** @The_End ******************
*/