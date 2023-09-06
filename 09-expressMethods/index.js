/**
 * ***************************************************************************************
 * @handling                                  Express get,post,put,update,delete methods
 * @express_get_method :
 *   This method is used to get data from the server.
 *   this will take two arguments
 *   1) path
 *   2) the callback function which have three arguments.(req,res,next)
 *   @param { app.get(path,callbackFunction)}
 * 
 * @express_post_method :
 *   This method is used to send data to the server.
 *   this will take two arguments
 *   1) path
 *   2) the callback function which have three arguments.(req,res,next)
 *   @param { app.get(path,callbackFunction)}
 * 
 * @express_put_method :
 *   This method is used to update data to the server.
 *   this will take two arguments
 *   1) path
 *   2) the callback function which have three arguments.(req,res,next)
 *   @param { app.get(path,callbackFunction)}
 * 
 * @express_delete_method :
 *   This method is used to get data from the server.
 *   this will take two arguments
 *   1) path
 *   2) the callback function which have three arguments.(req,res,next)
 *   @param { app.get(path,callbackFunction)}
 * 
 * @note
 *   In delete and update methed we can have a unique id when it match,so we can add data
 *   or delete data based on id.
 *   we can get these id by using the express method (req.param.id)
 *   
 * ***************************************************************************************
 */
const Joi = require('joi');
const express = require('express')
const app = express();
console.log(Joi)

//enable stringify method to read data from the body
app.use(express.json());

// validate function
const validateFunc = (data) => {
    const schema = {
        name: Joi.string().min(3).required(),
    }
    return Joi.validate(data, schema);
}

const student = [
    { id: 1, name: 'ahmad' },
    { id: 2, name: 'imran' },
    { id: 3, name: 'zafar' },
    { id: 4, name: 'muskan' }
]

/**
 * @get
*/
app.get('/api/student', (req, res) => {
    res.send(student);
})

/**
 * @post
*/
app.post('/api/student', (req, res) => {
    // called validation function
    const { error } = validateFunc(req.body);

    //check condition
    if (error) {
        res.send(error.details[0].message)
        return;
    }

    const newStudent = {
        id: student.length + 1,
        name: req.body.name
    }
    student.push(newStudent);
    res.send(newStudent);
})

/**
 * @delete
 */
app.delete('/api/student/:id', (req, res) => {
    const eachStu = student.find((stu) => stu.id == req.params.id);
    if (!eachStu) { res.send("id is not found"); return }

    const index = student.indexOf(eachStu);
    console.log(index);
    student.splice(index, 1);

    res.send(eachStu);
})

/**
 * @update
*/
app.put('/api/student/:id', (req, res) => {
    const eachStu = student.find((stu) => stu.id == req.params.id);
    if (!eachStu) { res.send("id is not found"); return }

    const { error } = validateFunc(req.body);
    if (error) { res.send(error.details[0].message); return };

    eachStu.name = req.body.name;
    res.send(eachStu);
})

//post listen
app.listen(9000, () => {
    console.log('listening on post: 9000');
})