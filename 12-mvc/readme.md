<div style= "background-color:#012169; padding: 20px 20px">

# MVC MODEL CONTROLLAR VIEW

- this is important concept in NODEJS because when we write a thousands lins of code in one file, containing routers, database connection, logics
  then it will difficult for understanding and we used this MVC concept.

## Model

In model we have all logics of databases

## View

In view we have all logics of front end and how your application look

## Controllar

In controllar we have all basics logics which contrall our entire application

# how to set custom routers

- a custom router used it that time when we have the same routes and we
- can make different request on the same route like get,post etc
## syntex
- we can called the router function predefine in express

```
const router = express.Router()
```

- then we can called route method which can take the path and its have a
- sub methods called get,post,put,delete and these all recieve a async function as a parameter

```
 router.route("pathnameURL")
        .get(async function)
        .post(async function)
        .put(async function)
```

- we can export these routers

```
 module.exports= router
```

- and its parent(index.js) we can import it
- ```
  const router = require("file location")
  ```

- and we used it, like a middleware but this middleware can take two arguments
- 1. pathname
- 2. Import router

```
app.use('pathnameURl',router)
```

</div>
