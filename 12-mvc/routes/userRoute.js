const express = require('express');
const User = require('../model/user.js')

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
*/

const router = express.Router();

router.route('/')
    .get(async (req, res) => {
        const user = await User.find({});
        if (user.length == 0) return res.status(404).send("Data is unavailable");
        const html = `
            <div>${user.map(each => (
            `<ul>
                <li>${each.gender}</li>
                <li>${each.name}</li>
                <li>${each.age}</li>
            </ul>`
        )).join("")
            }
            </div >
    `;
        res.send(html);
    })
    .post(async (req, res) => {
        try {
            const newUser = await User.create({
                name: req.body.name,
                age: req.body.age,
                gender: req.body.gender,
            })
            res.send(newUser);
        } catch (err) {
            res.send(err.message)
            console.log(err.message)
        }
    })

/**
 * delete and update request
 * ***************************************************************************
*/
router.route('/:id')
    .get(async (req, res) => {
        const id = req.params.id;
        const targetUser = await User.findById(id);
        if (!targetUser) return res.status(404).send("user not found" + id);

        const html = `<ul>
                <li>${targetUser.gender}</li>
                <li>${targetUser.name}</li>
                <li>${targetUser.age}</li>
            </ul>`
        res.send(html);
    })
    .delete(async (req, res) => {
        const id = req.params.id;
        const targetUser = await User.findByIdAndRemove(id);
        if (!targetUser) return res.status(404).send("user not found" + id);
        res.send("successfully deleted " + id);
    })
    .put(async (req, res) => {
        const id = req.params.id;
        console.log(id)
        const updateUser = await User.findByIdAndUpdate(id, {
            name: req.body.name,
            gender: req.body.gender,
            age: req.body.age,
        });
        if (!updateUser) return res.status(404).send("user not found" + id);
        res.send("updated successfully: " + id)
    })



module.exports = router;