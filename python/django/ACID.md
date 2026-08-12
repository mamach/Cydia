# ACID Transactions vs Saga Pattern
- In a monolithic architecture with a single relational database, transactions adhere strictly to ACID properties.
    1. Atomicity - All operations succeed, or everything rolls back.
    2. Consistency - Data moves from one valid state to another.
    3. Isolation - Uncommitted concurrent transactions donot interfere with each other.
    4. Durability - Committed data is permanently saved.

# Why ACID Fails
- When microservices each own their independent database, achieving distribured ACID requires protocols like Two-Phase Commit (2PC).
- However 2PC creates strong coupling, synchronous blocking, low availability, and poor performance across networks.
- 

# How Saga Adjusts the Model
- The saga pattern replaces strict ACID with BASE
    - BA - Basically available
    - S - Soft State
    - E - Eventual Consistency.
- It breaks down a global transaction into local ACID transactions.
- The Key Trade Off - Lack of Isolation: In a Saga, intermediate states are immediately committed and visible to other services before the overall distributed workflow finishes. If a step fails later, compensating transactions run asynchronously to restore consistency.

# Real Time Implementation and Tools for Sagas
- Implementing a Saga manually using raw code and HTTP calls can quickly lead to edge case bugs
    - e.g., handling network drops, timeouts, or retries.
- In production systems specialized engines and frameworks are used.

## Orchestration Engines
- Temporal / Cadence - Open-source, code-first state machines (available in Go, Python, Java, Typescript), They track workflow execution state automatically, handle retries and execute compensation code seamlessly when functions throw errors.
- Camunda / Zeebe - Orchestrators that execute workflows modeled visually via BPMN or json/yaml. Ideal for complex enterprise business logic.
- AWS Step Functions - A managed cloud orchestration engine. Useful for serverless architecture to sequence multi step tasks with built in error handling and retries.

## Choreography and Framework Libraries.
- MassTransit(.NET) - Features Built-in state Machine Sagas that track messages on message brokers like RabbitMQ, or RDBMS backends.
- Axon Framework / Eventuate Tram(Java) - Application frameworks designed around CQRS, event sourcing and saga management across kafka, rabbitmq or rdbms backends.
- Debezium + Apache Kafka: Used to build event driven choreography by streaming database changes reliably into kafka. 

---
# Outbox Pattern or Transactional Outbox Pattern.
- In microservice discussions, what is sometimes colloquially termed a closed box or outbox solution is formally known as transactional outbox pattern.
- Problem it solves: Dual-Write Failures
- save an order record to postgesql
- publish an ordercreated  event kafka or RabbitMQ.
- In the db write succeeds but the network drops before reaching kafka, your services become out of sync. If you swap the order and kafka succeeds but db write fails, you sent a false event. you cannot perform a dual write across a database and a message broker atomicall without distributed locks.

## How Outbox Pattern Works
- Instead of publishing to the message broker directly during http request:
    - single local transaction: the service updates its main database table and writes a message into an outbox table in same database using local ACID transaction.
    - background message relay: a seperate background worker (or change data capture tool Debezium) reads new rows from the outbox table.
    - Publish and clear: the relay sends the event to the message broker(kafka/rabbitmq) and marks the record as processed or deletes it from the outbox table.

---
# Flow 
- Microservice -> Single local ACID transaction.
    - service database
        - order table (insert record)
        - outbox table (insert event)
- Asychronous Polling or CDC
- Outbox Relay / Debezium
- Message Broker (kafka/ rabbitmq)

- the outbox pattern acts as reliable bridge for sagas. It guarantees at-least-once delivery of events without compromising local database consistency.

---





















































