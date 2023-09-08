const express = require('express');
const users = require('../../User.json')
const  User = require('../model/user.js')

const router = express.Router();

router.get('/', async (req, res) => {
    const user = await User.find({});
    const html = `
   <div>${user.map(each => (
        `<ul>
        <li>${each.gender}</li>
        <li>${each.fullName}</li>
        <li>${each.age}</li>
        </ul>`
    )).join("")
        }
   </div >
    `;
    res.send(html);
})

//post methods
router.post('/', (req, res) => {
    const data = req.body;
    users.push({ ...data, id: users.length + 1 });
    res.send(data);
})

//post methods
router.delete(':id', (req, res) => {
    res.send("Welcome")
});

//post methods
router.patch(':id', (req, res) => {
    res.send("Welcome")
})

module.exports = router;