#  Run remote psql command with any user

- Command
```bash
psql -h $localVmHost -p $localVmport -U $localVmHostUser -d $localVmHostDatabase -c "$COMMAND"
```
- Example

```bash
psql -h localhost -p 5432 -U anil -d mydb -c "TRUNCATE TABLE public.i18n_label CASCADE"
```