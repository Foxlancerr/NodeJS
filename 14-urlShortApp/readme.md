<div style= "background-color:#012169; padding: 20px 20px">

# URL SHORTER
    Mini app which have full crud functinality.
    It will delete,update and post urls and store in DB.
    In this we can short the urls and store in DB.


## shortid pakage

    this pakage will allow me to short your urls
## Installation
    npm i shortid
how the syntex look like.

```
const shortid = require('shortid');

const id = shortid()
console.log(id)
```
this will give unique code every time when they render.

## mongoose Schema

we can create the mongoose schema by the following....

```
const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
   siteUrl:{
       type: String,
       required:true
   },
   shortId: String,
   totalRequest: [{timeStamp: Number }]
},{timeStamp: true})

const Url = mongoose.model('siteUrl',urlSchema);
```

</div>
