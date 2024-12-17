# GraphQL

## Introduction
* query language for APIs.
* opensourced by facebook.
* speeds up the request process.

### Why GraphQL
* REST has been popular way to expose data from a server.
* Instead of having multiple endpoints that return fixed data structures, GraphQL has a  single endpoint.
* It is client job to specify what data it needs from it.

## TOC
* Defining Schema
* Adding resolver function
* Setup the server
* Setup the client
* Fetching data from the server
* Rendering data
* Conclusion

## Installing GraphQL and Apollo Server
* [GraphQL](https://github.com/graphql/graphql-js)
* [Apollo Server](https://github.com/apollographql/apollo-server)
* Apollo Server will help us implement the GraphQL functionalities.
* Apollo Server is part of the [Apollo Data Graph Platform](https://www.apollographql.com/)
* installing using npm
```
npm install graphql
```

## Apollo Server
* Apollo is a platform for building a data graph.
* Data graph is a communication layer that seamlessly connects your application clients to back-end services.
* GraphQL  designed for the needs of product engineering teams building modern data driven applications.
* Apollo community builds on top of GraphQL and provides different tools build projects.
* Tools provided by apollo are mainly for 
	* Client and
	* Server

### Apollo Client
* Helps frontend communicate with a GraphQL API.
* It has support for the React, Vue, Angular, Android, and Native Development on iOS.

### Apollo Server
* Apollo Server is GraphQL server layer in your backend that delivers the responses back to the client request.


## Defining Schema
* GraphQL is at core of any GraphQL server implementation.
* GraphQL Schema describes the shape of your data.
* It describes shape of the data.
* It also specifies which queries and mutations are available.
* GraphQL will provide two important capabilities
	* Building a type schema
	* Serving queries against schema defined in previous step.
* Please refer to following example schema for more info.
```
type Song {
  title: String
  author: Author
}

type Author {
  name: String
  songs: [Song]
}
```

* Following example will show how to define Query type like getSongs, getAuthors.

```
type Query {
  getSongs: [Song]
  getAuthors: [Author]
}
```

* We can use any programming language to create a GraphQL schema and build an interface around it.
* In this example we are using Apollo server to execute GraphQL queries.



## Node.js
* we have to import the tag function gql from apollo-server to parse the schema this way
```
const {gql} = require('apollo-server');
```
and then declare a typeDefs constant which is an abstract syntax tree of the GraphQL code.

* When GraphQL server receives a query to process , it generally comes in as a String. 
* This string must be tokenized and parsed into a representation that the machine understands.
* This representation is called an abstraction syntax tree.
```
const { gql } = require('apollo-server');
const typeDefs = gql`
 populationpopulation type Query {
    greeting: String
  }
`;
```


## Adding resolver function
* Way to answer client requests.
* A resolver is a function that handles the data for each one of the fields of your schema.
* you can send the data to the client by fetching a back-end database, or a third party API.
* In resolver function we need to map type definitions of Schema
* For e.g., 
```
const resolvers = {
  Query: {
    greeting: () => 'Hello GraphQL World!'
  }
};
```

## Setting up of the server
* 


## GraphQL Playground
* This is an environment, where we can perform Queries, Mutations, or Subscriptions to our schema and interact with its data.
* This is some kind of Postman to RESTful services.
* [GraphQL Playground](https://github.com/prisma-labs/graphql-playground)
* This environment comes default with Apollo

### Experimenting with GraphQL Playground
* sending the following payload will return hello world from Node.js server as shown in example.
```
query{
  greeting
}
```










# References
[1]. [Getting started with GraphQL and Node.js](https://www.freecodecamp.org/news/get-started-with-graphql-and-nodejs/amp/)
