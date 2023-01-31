nginx

```
http {
    upstream myapp1 {
        server srv1.example.com;
        server srv2.example.com;
        server srv3.example.com;
    }
 
    server {
        listen 80;
 
        location / {
            proxy_pass http://myapp1;
        }
    }
}
```
