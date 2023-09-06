/**
 * ***************************************************************************************
 * @Day2 Install libraries @express
 *
 * @install : npm i express
 * @express_desc :
 *       Express is a routing and middleware web framework
 *       that has minimal functionality of its own.
 * @problem_solved :
 *       we have a lot of using http modules but its also work perfectly.
 *        1) write more code
 *        2) hard to read the code and have difficult to understand.
 * @express
 *       express solve these problems,but in backend it used http modules
 * ***************************************************************************************
 */

const express = require('express');
const app = express();

// get method in express
app.get('/', function (req, res) {
    res.send("Hello World");
})

// define port to listen the request
app.listen(9000, function () {
    console.log("app is started");
})

/**
 * ************** @The_End ******************
 * ************** @The_End ******************
 * ************** @The_End ******************
 */
