# Intro
- Key Players include the user, the identity provider(IDP), and the application.
- IDP: An entity responsible for user authentication and verification. Common IDPs include Google, Facebook, and Company Specific Systems.
- Application: The software or service that the user wants to access. Applications rely on IDP for user authentication. With SSO users can seamlessly log in to various applications with a single set of credentials, enhancing convenience and security.
- SSO simplifies user access by enabling them to log in multiple applications with single set of credentials.
- SSO centralizes the security and access management.

# Steps

## 1 
- User tries to login, Application redirects them to SSO service which serves as IDP.
- IDP Authenticates user, often by checking their credentials. If successful it issues a token or assertion verifying the user identity.
- This token is sent back to the user's browser which in turn presents it to the application.
- The application recognizing the token as valid and grants the user access without requiring them to re-enter credentials.

This ensures user access multiple applications with single login.

# Source
[1]. [Alex Xu](https://twitter.com/alexxubyte/status/1724827440953040998)
