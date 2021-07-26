# Generate CSR
* Install Openssl with the following command
```
sudo atp install openssl
```
* check the version of openssl
```
openssl version
```

* Generate CSR  and Key using the following command.
```
openssl req -newkey rsa:2048 -nodes -keyout example.com.key -out example.com.csr
```

References:
[1]. [Generate CSR and Key](https://www.digitalocean.com/community/tutorials/how-to-install-an-ssl-certificate-from-a-commercial-certificate-authority)
