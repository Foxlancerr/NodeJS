<div style= "background-color:#012169; padding: 20px 20px">

# How NodeJS Worked Lec4 93/9/2023

## Architecture_of_nodeJS

- when the user send request to the server so this request may be synchronously or Asynchronously
- it will wait on <b>eventQuenu</b> and <b>eventLoap</b> will take the request based on the FIFO manner.
- if the request is synchronously then directly the event loap will respone.
- but when the request is Asynchronously, then it will pass to the <b>threadpoll</b> where alot of tread is
- available.the <b>thread</b> can take that request and process it and when processing is complete,then it will
- back the responce, In this way the server is not blocked(too waiting) and the one process is running by
- one thread and the other process will be excuted the other threads.

<div>
