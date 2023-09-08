<div style= "background-color:#012169; padding: 20px 20px">

# MVC-Advanced

    In this we can add some advanced folders structure, every logics, database,routes have seperate folders.
    what folders is included here......
    1. middleware
    2. routes
    3. controllor
    4. view
    5. Model

## MongoDB

    we used mongoose to connect your database with nodejs.

how to connect your mongoDb using mongoose

```
const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/nodejs")
   .then(()=> console.log("Connected to MongoDB"))
   .catch((e)=> console.log(e.message))
```

## mongoose Schema

we can create the mongoose schema by the following....

```
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
   name:{
       type: String,
       required:true
   },
   age: String,
   gender:{
       type: String,
       enum:["male", "female"],
   }
})

const User = mongoose.model('user1',userSchema);
```

</div>
