# Circuit Breaker
- Distributed systems design pattern.
- Address the fundamental challentes in failure resilience, data consistency, and reliable asychronous communication across decoupled microservices.
- cascading failures caused by calling unresonsive or slow downstream services.
- wraps remote calls in a state machine(closed, open, half-open).
- Immediately fails fast with a fallback when error thresholds  are crossed, allowing the target service time to recover.
- Resilience around http/gRPC APIs e.g., resilience4j

---
- prevents systemic cascading failure when a dependent service is down or failing at scale.
- systematic and sustained e.g., database down, 500 error spikes high latency.
- reduces latency, fails fast, immediately drops calls in an open state without contacting the downstream service.
- protects downstream service: gives the failing service dedicated breathing room to recover.
- stateful , tracks failure rates across all call threads over a sliding window.

---


