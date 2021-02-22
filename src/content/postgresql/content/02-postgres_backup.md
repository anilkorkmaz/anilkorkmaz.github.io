#  Postgresql Backup

- Backup with custom format (Compressed)

```
pg_dump -h $host -p $port -U $user -W -Fc $database > ${database}.backup
```

- Data Only Backup
  
```
pg_dump -h $host -p $port -U $user -W -Fc --data-only $database > ${database}.backup
```

- Table Backup

```
pg_dump -h $remoteHost -p $remotePort -U $remoteUser -Fc --data-only -d $remoteDatabase -t $tablename > "backup_file"
```

- More than ona Table Backup

```
pg_dump -h $remoteHost -p $remotePort -U $remoteUser -Fc --data-only -d $remoteDatabase -t $tablename -t $tablename2 > "backup_file"
```

- SQL Format Backup

```
pg_dump -h $remoteHost -p $remotePort -U $remoteUser  -d $remoteDatabase > dump.sql
```
- SQL format with --column-inserts

```
pg_dump -h $remoteHost -p $remotePort -U $remoteUser --column-inserts -d $remoteDatabase > dump.sql
```

- SQL format with --column-inserts and only data
  
```
pg_dump -h $remoteHost -p $remotePort -U $remoteUser --column-inserts -a -d $remoteDatabase > dump.sql
```

- 
