#  Postgresql psql basics (Cheat Sheet)
- Access the PostgreSQL server from psql
```
psql -h 192.168.2.251 -p 5432 -U postgres
```

- To quit the psql:
```
\q
```

- Connect to a specific database:
```
\c database_name;
```

- List all databases in the PostgreSQL database server
```
\l
```

- List all schemas:
```
\dn
```

- List all views:
```
\df
```

- Lists all tables in a current database.
```
\dv
```

- Access the PostgreSQL server from psql
```
\dt
```

- to get more information on tables in the current database
```
\dt+
```

- Get detailed information on a table.
```
\d+ table_name
```

- Show a stored procedure or function code:
```
\df+ function_name
```

- Show query output in the pretty-format:
```
\x
```

- List all users:
```
\du
```

