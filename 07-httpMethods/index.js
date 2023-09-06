/**
 * *************************************************************************************************************************
 * @HTTPMethods                               @lec6                                    6/9/2023 / wednesday
 * @GET
 *  the get method is used when we request to a server and the server will send the data.
 *  by default the method get is setted.
 * @post
 *  when we send data to server, by using form or any other method.
 * @put
 *  when the data is already exist but we can change the specific data.
 * @delete
 *  when we want that the specific data is removed we can used the delete method.
 * @how_we_know_what_type_of_request
 *  there is a specail method (req.method)
 *  @param { req.method }
 * *************************************************************************************************************************
 */
const url = require('url');
console.log(url)
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    //here we used the url modules.
    const myUrl = url.parse(req.url)
    console.log(myUrl)
    if (req.url == '/favicon.ico') return res.end();
    const log = `${Date.now()}: ${req.url} new request is recieved\n`
    fs.appendFile("./06-urlModule/log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case '/':

                //here we can use different http methods
                if (req.method == "GET")
                    return res.end("this is get method");
                else if (req.method == "POST")
                    //query your DB
                    return res.end("this is post method");
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