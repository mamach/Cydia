# SAGA Pattern
- The Saga Pattern is a design pattern used in microservices architectures to manange distributed transactions across multiple independent services and their distinct databases.

- In a monolithic architecture, acid transactions guarnantee that either all database updates succeed or none do.
- However, in a microservice setup where each service owns its database (database per service pattern), traditional ACID transactions spans across networks are either impossible or too slow.
- A saga breaks a large transaction into a series of local transactions.

## How it works.
- Step by step local updates: Each service executes its own local transaction and updates its database.
- Event Publishing: Once successful, the service publishes an event or message to trigger the next service's local transaction.
- Compensating Transactions (Rollback Mechanism): If any local transaction fails, the saga executes compensating transactions in reverse order to undo the changes mad by previous steps.

## Real world Example
- Consider an ecommerce order process involving three microservices:
    - Order Service
    - Payment Service and
    - Inventory Service
- Success flow
    - order service: creates pending order -> publishes order created
    - inventory service: reserves stock items -> publishes stocks reserved.
    - Order service : Updates order status to completed.

- Failure and Rollback Flow
    - what happens if the inventory service finds an item is out of stock?
    - order service: creates pending order
    - payment service: chages $100
    - inventory service: out of stock, fails and publishes StockReservationFailed.
    - Compensating Action: Payment services receives failure event and refunds $100
    - Compensating action 2: order service updates order status to cancelled.

- Saga Implementation Approaches.
    - There are 2 primary ways to coordinate a Saga
    1. Choreography
        - Services communicate directly via events without a central coordinator.
        - Each service listens for events and decides what local action to take.
        - Pros: simple to implement for small workflows; highly decoupled.
        - Cons: Hard to trace/debug as workflows grow; risks cyclic dependencies between services.
    2. Orchestration
        - A central service the saga orchestrator tells each participant service what command to execute and handles failures.
        - Pros: easy to manage complex workflows; centralized state management
        - Cons: Introduces central point of logic, needs careful design to prevent becoming a monolith.

---
- Maintaining data consistency across distributed databases without heavy 2PC (two phase commit)
- executes a sequence of local transactions across services. If a step fails the saga executes a reverse chain of compensating transactions to undo previous changes.
- Multi service business  workflows e.g., reserve inventory -> charge card -> ship item.

---

















































 
