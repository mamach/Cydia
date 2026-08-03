# To validate a certificate and key match:


This command will print out the MD5 checksums of the certificate and the key. If the checksums are identical, then the certificate and key match.
```
openssl x509 -noout -modulus -in certificate.crt | openssl md5
openssl rsa -noout -modulus -in key.pem | openssl md5
```

Here is a breakdown of the commands:

- openssl x509 is the command to view and verify certificates.
- in certificate.crt is the input file, which is the certificate that you want to validate.
- text is the option to print out the details of the certificate.
- noout is the option to suppress the output of the certificate.
- modulus is the option to print out the modulus of the certificate.
- | is the pipe operator, which is used to pipe the output of one command to the input of another command.
- openssl md5 is the command to calculate the MD5 checksum of a file.
