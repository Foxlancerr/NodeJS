/**
 * *************************************************************************************************************************
 * @URL_MODULES                                 @lec6                                    6/9/2023 / wednesday
 * If we used the res.url then it will have limited option like it does have query parameter and many more functionality
 * but we installed external url pakage by using npm @param { npm i url} 
 * @componentOfURL
 *   1)protocol   http://
 *   2)domain     www.google.com
 *   3)path       /about
 *   4)query      ?price=200
 * 
 * how to use it:
 *   @param { const url = require('url) }
 * @method.
 *   @parse the parse method will help to seperate all the url into differnt pieces
 *   like pathname,host,auth,search,query etc
 *   it will take two argument.
 *     1)url
 *     2)[parseQueryString=false] If `true`, the `query` property will always be set 
 *       to an object returned by the {@link querystring} module's `parse()` method. If `false`, the `query` property
 *       on the returned URL object will be an unparsed, undecoded string.
 *   @param { const myUrl = url.parse(req.url,true) }
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
    if(req.url == '/favicon.ico') return res.end();
    const log = `${Date.now()}: ${req.url} new request is recieved\n`
    fs.appendFile("./06-urlModule/log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
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