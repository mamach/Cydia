# Transactional Outbox
- Loss of event messages or inconsitent state when updating a database and publishing a event.
- Dual write problem
- writes business data and an outbound message record into an outbox table with the same local db transaction.
- A background tailer (CDC like Debezium or poller) reliably publishes events to KAFKA/RabbitMQ.
- Reliably emitting domain events whenever local database entities changes.

---

