# API Gateway
Services in a microservices architecture share common requirements regarding authentication and transportation. **API Gateway** provide a shared layer to handle differences between service protocols and fulfills the requirements of specific clients(browser, mobile app, legacy systems.)

## Microservices and Consumers
Microservices are a service oriented architecture where teams can design, develop and ship their applications independently. It allows **technology diversity** on various levels of the system. We don't want to implement our internal services in our microservices architecture in a way to support multiple clients and reimplement the same logic all over. This is where the **API Gateway** comes into picture and provides a shared layer to handle differences between service protocols and fulfills the requirements of specific clients.

## What is API Gateway?
API Gateway is a type of service in a microservices architecture which provides a shared layer and API for clients to communicate with internal protocols, **aggregating data** and **implement shared logic** like authentication and rate limitters.
* **API Gateway** is the entry point to our microservices.
![API Gateway as an entry point to microservices](https://blog-assets.risingstack.com/2017/07/api-gateway-1.png)

## Node.js API Gateway
* **Netflix** uses Node.js API Gateways.[Read More](https://www.infoq.com/news/2017/06/paved-paas-netflix)
![Netflix approach to handle different clients](https://image.slidesharecdn.com/qconpaved-170718200756/95/paved-paas-to-microservices-7-638.jpg?cb=1500408507)

## API Gateway Functionalities

### Routing and Versioning
* route requests from client to specific services.
* handle versioning
![API Gateway as microservices entry point](https://blog-assets.risingstack.com/2017/07/api-gateway-entrypoint-1.png)

### Evolutionary Design
* Helps to break down monolithic application.
* Smooth transition from monolith architecture to microservices.
![Evolutionary design with API Gateway](https://blog-assets.risingstack.com/2017/07/api-gateway-evolutinary-design.png)

### Authentication
* Services are protected in a DMZ via network configurations and expose them to clients via API Gateway.
![API Gateway with Authentication](https://blog-assets.risingstack.com/2017/07/api-gateway-auth-1.png)

### Data Aggregation
* Using **API Gateway** data can be collected from multiple sources and final result will be part of the response.
* In following image API Gateway merges and returns user and credit information as one piece of data to the client. Note that these are owned and managed by different microservices.
![API Gateway Aggregation](https://blog-assets.risingstack.com/2017/07/api-gateway-aggregation-1.png)

### Serialization format transformation

### Protocol Transformation

### Overambitious API Gateways
* Avoid putting non-generic logic like domain specific data transformation.
* Services should always have full ownership over their data domain. 
* Always define clear responsibilities for API Gateway and only include **generic shared logic** in it.

## Node.js API Gateways
* use **[express-gateway](http://www.express-gateway.io/)** to create API Gateways.
* Authenticate each request before we proxy it to the user service.
```javascript
const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()

const userServiceProxy = httpProxy('https://user-service')

// Authentication
app.use((req, res, next) => {
  // TODO: my authentication logic
  next()
})

// Proxy request
app.get('/users/:userId', (req, res, next) => {
  userServiceProxy(req, res, next)
})
```
or
```javascript
const express = require('express')
const request = require('request-promise-native')
const app = express()

// Resolve: GET /users/me
app.get('/users/me', async (req, res) => {
  const userId = req.session.userId
  const uri = `https://user-service/users/${userId}`
  const user = await request(uri)
  res.json(user)
})
```

## Summary
* **API Gateway** provides a shared layer to serve client requirements with microservices architecture. 


## Reference
[1]: [Building API Gateway way with node.js](https://blog.risingstack.com/building-an-api-gateway-using-nodejs/)
