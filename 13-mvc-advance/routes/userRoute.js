
/**
 *  a custom router used it that time when we have the same routes and we
 *  can make different request on the same route like get,post etc
 * @syntex
 *  we can called the router function predefine in express
 * @param { const router = express.Router() } 
 *  then we can called @route method which can take the path and its have a
 *  sub methods called get,post,put,delete and these all recieve a async function
 *  as a parameter
 * @param { 
 *    router.route("pathnameURL") 
 *        .get(async function)
 *        .post(async function)
 *        .put(async function)
 * }
 *  we can export these routers
 * @param { module.exports= router }
 * and its parent(index.js) we can import it
 * @param { const router = require("file location") }
 * and we used it, like a middleware but this middleware can take two arguments
 * 1) pathname and 2)import router
 * @param { app.use('pathnameURl',router) }
 * ****************************************************************************************************
*/

const express = require('express');
const User = require('../model/user.js');
const { getAllUsers, createUser, deleteUser, updateUser, getSingleUser } = require('../controlor/user.js');
const router = express.Router();

/**
 * get and post request
 * ***************************************************************************
*/
router.route('/')
    .get(getAllUsers)
    .post(createUser)

/**
 * delete and update request
 * ***************************************************************************
*/
router.route('/:id')
    .get(getSingleUser)
    .delete(deleteUser)
    .put(updateUser)

module.exports = router;