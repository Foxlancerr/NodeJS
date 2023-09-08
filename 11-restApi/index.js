/**
 * *******************************************************************************
 * @restApi
 * *******************************************************************************
 */
const express = require('express');
const users = require('../User.json');
const app = express();
app.use(express.json());

//get methods
app.get('/api/users', (req, res) => {
    const html = `
   <div>${users.map(user => (
        `<ul>
        <li>${user.gender}</li>
        <li>${user.name}</li>
        <li>${user.age}</li>
        </ul>`
    )).join("")
        }
   </div >
    `;
    res.send(html);
})

//post methods
app.post('/api/users', (req, res) => {
    const data = req.body;
    users.push({ ...data, id: users.length + 1 });
    res.send(data);

})

//post methods
app.delete('/api/users/:id', (req, res) => {
    res.send("Welcome")
});

//post methods
app.patch('/api/users/:id', (req, res) => {
    res.send("Welcome")
})

app.listen(3000, () => {
    console.log('listening on post 3000');
})
