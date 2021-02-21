# Docker Postgresql container setup

```bash
docker run -d \
    --name {NAME} \
    -p 5432:5432 \
    -e POSTGRES_PASSWORD={POSTGRES-USER-PASS} \
    -e PGDATA=/var/lib/postgresql/data/pgdata \
    -v {HOST_PATH_FOR_MOUNT}:/var/lib/postgresql/data \
    postgres:13
```