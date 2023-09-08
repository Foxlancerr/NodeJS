const User = require('../model/user.js')
async function getAllUsers(req,res) {
    try {
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
    } catch (e) {
        console.error(e.message);
    }
}

async function getSingleUser(req, res) {
    const id = req.params.id;
    const targetUser = await User.findById(id);
    if (!targetUser) return res.status(404).send("user not found" + id);

    const html = `<ul>
            <li>${targetUser.gender}</li>
            <li>${targetUser.name}</li>
            <li>${targetUser.age}</li>
        </ul>`
    res.send(html);
}

async function createUser(req, res) {
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
}

async function deleteUser(req, res) {
    const id = req.params.id;
    const targetUser = await User.findByIdAndRemove(id);
    if (!targetUser) return res.status(404).send("user not found" + id);
    res.send("successfully deleted " + id);
}

async function updateUser(req, res) {
    const id = req.params.id;
    console.log(id)
    const updateUser = await User.findByIdAndUpdate(id, {
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
    });
    if (!updateUser) return res.status(404).send("user not found" + id);
    res.send("updated successfully: " + id)
}

module.exports = {
    getAllUsers,
    createUser,
    getSingleUser,
    deleteUser,
    updateUser
}