# Clear System Logs
```
sudo truncate -s 0 /var/log/syslog
```

# Clear Kernel Logs
```
sudo truncate -s 0 /var/log/kern.log
```

# Clear Package Logs
```
sudo truncate -s 0 /var/log/dpkg.log
```

# Clear Authentication Logs
```
sudo truncate -s 0 /var/log/auth.log
```

# Clear Application Logs (Nginx, Apache, etc.)
```
sudo truncate -s 0 /var/log/auth.log
```

# Clear All Rotated Log Files
```
sudo logrotate -f /etc/logrotate.conf
```

