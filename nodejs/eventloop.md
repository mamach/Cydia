- Node.js is single threaded(means javascript can do one thing at a time)

- Node.js doesnot stop from running other operations becasue of Libuv(C++ library for even loop)

# Internals

- Call stack (an essential piece that tracks which part of program is running)

-  Whenever javascript function is invoked it gets pushed to call stack. Once the function reaches its end or a return statement it is popped out off the stack.

- Codes like database query are immediately popped off because they may take a long time. These kind of requests passed to Libuv(which asynchrounously handled in the background)

- Node.js can keep running other code without blocking its single thresd.

- While Libuv handles a query in the background javascript is not blocked.

- When the query is done in Libuv, event is pushed to the I/O event queue	
