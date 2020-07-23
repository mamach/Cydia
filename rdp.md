# How to install xrdp on Ubuntu 16.04

## Step 1
```
sudo apt-get install xrdp
```

## Step 2
xrdp and Unity desktop  will not work together. Trying connect without another desktop environment will show blank screen.
Our preferred desktop environment alternative is Mate-Desktop.
To install Mate Desktop run the following commands.

```
sudo apt-get update
sudo apt-get install mate-core mate-desktop-environment mate-notification-daemon
```

## Step 3
Configuring xrdp to use the Mate desktop environment.
You need to edit **/etc/xrdp/startwm.sh** file
Run the following command to configure this
```
sudo sed -i.bak '/fi/a #xrdp multiple users configuration \n mate-session \n' /etc/xrdp/startwm.sh
```


Done :)
Now you are ready to connect to Ubuntu using RDP.




# References
[1]. [XRDP- how to install xrdp on ubuntu 16.04](http://c-nergy.be/blog/?p=8952)
