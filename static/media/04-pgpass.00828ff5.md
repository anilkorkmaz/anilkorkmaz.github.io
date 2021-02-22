#  Pgpass - Run psql command without passoword

- Create .pgpass file on home file and set the permissions
```bash
chown $USER:$USER ~/.pgpass
chmod 600 ~/.pgpass
```

- Insert lines in pgpass

```
$HOST:$PORT:$DB:$USER:$PASS
```

- Example

```
25.54.65.10:5432:*:postgres:p4ssw0rd
24.54.65.10:5432:mydb:postgres:p4ssw0rd
```