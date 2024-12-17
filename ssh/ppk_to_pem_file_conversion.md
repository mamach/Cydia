# Converting ppk file to pem file conversion

- Installing putty key gen in ubuntu. 
```
sudo apt-get install putty-tools 
```

- Conversion of ppk to pem file converion
```
puttygen server1.ppk -O private-openssh -o server1.pem 
```

- Change permissions
```
chmod 400 server1.pem 
```

- 
