#  Postgresql Restore

- Restore

```bash
pg_restore -h $Host -p $port -U $PgUser -d $Database "$backup_file"
```

- (-x) Prevent restoration of access privileges

```bash
pg_restore -h $Host -p $port -U $PgUser -d $Database -x "$backup_file"
```

- no-owner
```bash
pg_restore --no-owner -h $host -p $port -U $user -W -d $database $backup_file
```