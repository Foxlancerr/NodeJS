<div style= "background-color:#012169; padding: 20px 20px">

# Handling Express get,post,put,update,delete methods:

## express_get_method :

This method is used to get data from the server.
This will take two arguments

- path
- the callback function which have three arguments.(req,res,next)

```
app.get(path,callbackFunction)
```

## express_post_method :

This method is used to send data to the server.
This will take two arguments

- path
- the callback function which have three arguments.(req,res,next)

```
app.post(path,callbackFunction)
```

## express_put_method :

This method is used to update data to the server.
This will take two arguments

- path
- the callback function which have three arguments.(req,res,next)

```
app.get(path,callbackFunction)
```

## express_delete_method :

This method is used to get data from the server.
this will take two arguments

- path
- the callback function which have three arguments.(req,res,next)

```
app.delete(path,callbackFunction)
```

## note

In delete and update methed we can have a unique id when it match,so we can add data

- or delete data based on id.
- we can get these id by using the express method (req.param.id)

</div>
