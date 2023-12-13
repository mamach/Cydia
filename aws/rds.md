# Exporting Cloud database with command
```
PGPASSWORD='password_here' pg_dump --no-owner -h db.host_name-south-1.rds.amazonaws.com -p 5432 -U user_name db_name > ./file.sql
```
