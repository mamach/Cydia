# backup single database
```
pg_dump db_name -p 5432 mydb > /path/db_backup.sql
```

# dump the cluster 
```
pg_dumpall -p 5432 mydb > /path/mydb_dump.sql
```

# Dump the schema only
```
pg_dump -p 5432 mydb -s > /path/mydb_dump_schema.sql
```

# Restore single database
```
psql db_name < db_backup.sql
```

# More
If you want to restore to an empty database, you might want to run 
following commands
```
DROP DATABASE IF EXISTS mydb;
CREATE DATABASE mydb;
```
