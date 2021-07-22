# Enabling SSH on Ubuntu

* Install OpenSSH server
```
sudo apt update
sudo apt install openssh-server
```
* Verify Installation
```
sudo systemctl status ssh
```

* allow ssh port in firewall
```
sudo ufw allow ssh
```

* connect to machine over LAN with following command
```
ssh username@ip_address
```


# References
[1]. [Enabling SSH in Ubuntu](https://linuxize.com/post/how-to-enable-ssh-on-ubuntu-18-04/)
