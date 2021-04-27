# What is a microservice?

A single microservice contains following to implement one feature of our app.
* Routing
* Middlewares
* Business Logic
* Database Acess 

# Why one database per service
* Services to run independently of other services
* Database schema/structure might change 
* Some services might function more efficiently with different types of DB's


# Data management between Microservices.
* Most of the focus will be on data management between services.
* It is challenging to share data among microservices.

## Sync/Async Communication between services
* Sync - Services communicate with each other using direct requests.
* Async - Services communicate with each other using events

### Sync
* Conceptually easy.
* Introduces dependency between services
* If any inter-service request fails, overall request fails
* The entire request is as fast as slowest request.
* Can easily introduce webs of requests.

### Async
* Event based communication
* 

### Crazy of storing data
	

# Docker

# Orchestring with Kebernetis
