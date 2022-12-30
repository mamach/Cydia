- For high traffic environments, node.js is tremondously useful.

- Node.js is ideal for I/O bound applications due to its single thread event loop asynchronous processing.

- Node.js majority of time spent waiting for network, file system nd database transactions to complete.

- Thanks to Node.js asynchronous I/O methods which allow simutaneous requests to be served during the time it takes for a read/write to complete.

# Streams
- Use streams: Node.js has a powerful stream API that allows you to efficiently process large amounts of data without having to load it all into memory at once.
- Streams can be used to read data from a file pipe it through a series of transformations and then write it to a new file or send it over the network.



# Use Parallel Execution

- use parallel features from async.js

# Use Async/await

- Node.js is built on top of an event driven non blocking I/O model which makes it well suited for building scalable high performance systems.
- When designing system make sure to use asynchronous programming techniques, such as callbacks, promises to avoid blocking the event loop and ensure that system can handle a large number of concurrent requests.
- 

# Clustering
- Use a cluster or multiple processes
- Node.js runs on single thread, which means that it can only use a single cpu core.
- To take advantage of multiple CPU cores and improve performance cluster module can be used(to create cluster of processes) that share the same port and handle same requests in a round robin fashion.
- 

# Cache

- Caching can significantly improve the performance of system by reducing number of expensive database queries and network requests.
- Redis or Memcached can be used to store frequently accessed data in memory allowing to retrieve at much faster rate.

# Render static assets
- For serving static assets fast web server like nginx or apache to be used.
- These web servers are optimized for serving static content and can handle a large number of concurrent requests much more efficiently than node.js
- 

# Database or Datastore
- Use a databse that is optimized for fast writes and reads such as Redis, MongoDB.
- For structured data use MySQL or PostgreSQL.


# Employ client side rendering

# Keep code small and light


# Message Queue

- For processing large volumes of data asynchronously you can use a message queue like RabbitMQ or Kafka to offload the data processing to separate worker processes.


# Monitor and Optimize

- Use tools like performance hooks for performance monitoring.
- Use tools like New Relic to understand how app is performing and identify bottlenecks.

