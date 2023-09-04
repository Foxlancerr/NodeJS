/**
 *****************************************************************************************
 * @how_node_js_worked              lec4                  93/9/2023
 * @Architecture_of_nodeJS
 *  when the user send request to the server so this request may be synchronously or Asynchronously
 *  it will wait on @eventQuenu and @eventLoap will take the request based on the FIFO manner.
 *  if the request is synchronously then directly the event loap will respone.
 *  but when the request is Asynchronously, then it will pass to the @treadpoll where alot of tread is
 *  available.the @tread can take that request and process it and when processing is complete,then it will
 *  back the responce, In this way the server is not blocked(too waiting) and the one process is running by 
 *  one thread and the other process will be excuted the other threads.
 * ************************************************************************************** 
 */