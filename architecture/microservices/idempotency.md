# Idempotency
- Duplicate payload processing resulting from network timeouts or retried requests.
- Assigns a unique idempotency-key per operation.
- The server tracks the keys in a fast store to guarantee  identical requests yield the exact same state without double processing.
- Payment gateways, order processing, and message consumption.

---

