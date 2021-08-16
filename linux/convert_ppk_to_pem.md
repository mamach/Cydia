# Convert PPK format to PEM
* install putty tolls in linux using the following command
```
sud apt-get install putty-tools
```

* convert ppk file to pem file using following command
```
puttygen server_key.ppk -O private-openssh -o server_key.pem
```
* Change pem file permissions to 400
```
chmod 400 server_key.pem
```

* connect to remote server using the following command
```
ssh -i server_key.pem ubuntu@<remote_server_ip>
```


