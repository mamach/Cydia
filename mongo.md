# Importing data from csv
```
mongoimport -d <db_name> -c <collection_name> --type csv --file file_name.csv --headerline
```


# Restoring Data from BSON Files Database collections
```
mongorestore.exe -d <database_name> <path>
```
for e.g., path will be C:/Users/mamach/Desktop/

# Taking backup of complete database collections
```
mongodumb -d <database_name> -o <output path>
```

# Exporting a collection using command line
```
mongoexport --uri="mongodb://mongodb0.example.com:27017/reporting"  --collection=events  --out=events.json [additional options]
```

# Importing a collection to the database
```
mongoimport --db test --collection inventory --authenticationDatabase admin --username <user> --password <password> --drop --file ~\downloads\inventory.crud.json
```
