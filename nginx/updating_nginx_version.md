# Introductin
* Download key from url https://nginx.org/keys/nginx_signing.key
*  add the key using the command
``` 
sudo apt-key add nginx_signing.key
```
* update the sources list using the following commands
```
sudo nano /etc/apt/sources.list
deb http://nginx.org/packages/mainline/ubuntu/ xenial nginx
deb-src http://nginx.org/packages/mainline/ubuntu/ xenial nginx
```

* Run following commands to install latest version of nginx
```
sudo apt-get update 
sudo apt-get install nginx
```

# References
[1]. [updating nginx version in ubunt 16.04](https://askubuntu.com/questions/1002470/cant-update-nginx-to-version-higher-than-1-12-2-in-ubuntu-16-04)
