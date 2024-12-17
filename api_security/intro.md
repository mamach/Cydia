# AUTHENTICATE

Authenticate is probably the most vital security measure. Always use secure authentication methods such as 
* OAuth
* JWT or
* API Keys

It is not recommended to use basic authentication as it sends user credentials with each request. It is considered  
the least square method.


# VALIDATE INPUT

Data validation verifies incoming requests to ensure they are not improper entry attempts, such as SQL injections 
or cross site scripting.

Validation should be implemented on syntactical and semantic levels.

Syntactic enforces correct syntax.
Semantic enforces correctness of values.


* JSON and XML schema validation methods.
* Regular expressions
* Data type validators 
* Minimum and Maximum Range Check
* Minimum and Maximum Length Check.

# USE AN API GATEWAY

API gateways are an all in one way to implement security, monitoring and overall API management.

* They are a single entry point for API calls.
* They sit between the clients and number of backend services to handle calls appropriately.


# USE RATE LIMITING

Rate limiting is a way to protect server infrastructure if an influx of request occurs.

With rate limiting, clients sending an in influx of requests will have their access blocked after exceeding the 
maximum call rate.


# ONLY SHARE REQUIRED DATA

Your API should only return the appropriate data. Double check what your endpoints return and make sure no 
security info, like an API keys is returned.

You can also remove 'X-Powered-By' response headers as they leak server side info that could potentially aid 
attackers in exploitation.


