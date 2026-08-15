- The solid principles are 5 design  guidelines for writing maintainable, scalable and readable object oriented code.
- They help reduce tight coupling and make codebases easier to test and extend.

# Single Responsibility Principle 
- A class or module should have only one reason to change, meaning it should have only one job.
```
// ❌ Bad: User class handles both database operations and email logic
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    saveToDatabase() { /* Database logic here */ }
    sendWelcomeEmail() { /* SMTP logic here */ }
}

// ✅ Good: Separate responsibilities into distinct modules
class UserRepository {
    save(user) { /* Database logic */ }
}

class EmailService {
    sendWelcomeEmail(email) { /* SMTP logic */ }
}
``` 

# Open / Closed Principle 
- Software entities should be open for extension, but closed for modification.
- You should be able to add new features without changing existing code.
```
// ❌ Bad: Adding a new payment type requires modifying this function
function processPayment(type, amount) {
    if (type === 'creditCard') { /* process CC */ }
    else if (type === 'paypal') { /* process PayPal */ }
}

// ✅ Good: Extend functionality using polymorphism/strategy pattern
class CreditCardProcessor {
    process(amount) { return `Processed $${amount} via Credit Card`; }
}
class PayPalProcessor {
    process(amount) { return `Processed $${amount} via PayPal`; }
}

function executePayment(processor, amount) {
    return processor.process(amount);
}
```

# Liskov Substitution Principle
- Subclasses must be substitutable for their base classes without breaking programs behavior.
// ❌ Bad: A subclass breaks expectations by throwing an error for a supported base behavior
class Bird {
    fly() { return "Flying..."; }
}
class Penguin extends Bird {
    fly() { throw new Error("Penguins can't fly!"); }
}

// ✅ Good: Design hierarchies correctly based on actual capabilities
class Bird {}
class FlyingBird extends Bird {
    fly() { return "Flying..."; }
}
class SwimmingBird extends Bird {
    swim() { return "Swimming..."; }
}


# Interface segregation Principle
- clients should not be forced to depend on methods they do not use.
- 
```
// ❌ Bad: A monolithic worker class forces implementation of unused features
class MultiFunctionPrinter {
    print() { /* ... */ }
    fax() { /* ... */ }
}

// ✅ Good: Segregate into smaller, focused classes/components
class Printer {
    print() { console.log("Printing..."); }
}
class FaxMachine {
    fax() { console.log("Faxing..."); }
}
```

# Dependency Inversion Principle
- Depend on abstractions, not concretions. 
- High level modules should not depend on low level modules.
- both should depend on abstractions e.g., dependency injections.


```
// ❌ Bad: High-level service is tightly coupled to a specific database module
const mysql = require('mysql2');
class UserService {
    constructor() {
        this.db = mysql.createConnection({...}); // Hardcoded dependency
    }
}

// ✅ Good: Pass the dependency via the constructor (Dependency Injection)
class UserService {
    constructor(databaseClient) {
        this.db = databaseClient; // Depends on an abstraction/passed interface
    }
    getUser(id) {
        return this.db.query(`SELECT * FROM users WHERE id = ?`, [id]);
    }
}
```











































