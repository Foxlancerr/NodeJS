<div style= "background-color:#012169; padding: 20px 20px">

# http_modules lec4 93/9/2023

- HTTP is the default request-response mechanism which will be used for sending and
- recieving req and responce.
- it is built in module which is implemented in NodeJS

```
const http = require('http')
```

## how_to_create_server

- there is a method in http which is @createServer and it wil make the server,it
- also can take two arguments.
- 1.  request
- 2.  response
- it will also return some data(object data).

```
const server = http.createServer((req,res)=>{ })
```

- then it will return object data which can store it and we called @listen method
- and it will take two arguments.
- 1.  port number where we can listen
- 2.  callback function which will show that our server is running.

```
 server.listen(portNumber, callbackFunction)
```

## disadvantage

- In http module,if we can define different routes we can used condition like ifelse and
- switch statements to differentaite differnt routes.
- it will consume a lot of time,and not easy to understand
  ### express
- we can use express instead of http modules,because it easy to understand and have alot
- of build in functionality.

</div>
