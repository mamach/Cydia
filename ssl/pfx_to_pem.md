# pfx to pem file conversion

## Situation
A certificate server such as Microsoft Certificate Server may only export certificates in a pfx format. If Apache on Linux needs the certificate they need to be converted to pem format.
 
 
## Resolution
OpenSSL can be used to export the private key and the cert file from the pfx file.
OpenSSL can be downloaded and installed on Windows or Linux, and is most likely installed on a OES2 Linux server.
 
On a Linux server with OpenSSL, copy the filename.pfx file to any folder you choose. Open a terminal and perform the following.
 
 
To export the private key without a passphrase or password.
```
openssl pkcs12 -in filename.pfx -nocerts -nodes -out key.pem
```
To Generate a public version of the private RSAkey
```
openssl rsa -in key.pem -out server.key
```

To export the Certificate
```
openssl pkcs12 -in filename.pfx -clcerts -nokeys -out cert.crt
```


Reference
[1]. [pfx to pem](https://support.microfocus.com/kb/doc.php?id=7004039)
