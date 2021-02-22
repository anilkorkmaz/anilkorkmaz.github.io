# Docker Keycloak container setup with Postgresql

```bash
sudo docker run --name keycloak -d \
-p 7002:8080 \
-e DB_VENDOR=postgres \
-e KEYCLOAK_USER={KEYCLOAK-ADMIN-USER} \
-e KEYCLOAK_PASSWORD={PASS} \
-e DB_ADDR={DB-ADDRESS} \
-e DB_PORT={DB-PORT} \
-e DB_DATABASE={DB-NAME-FOR-KEYCLOAK} \
-e DB_SCHEMA=public \
-e DB_USER={DB-USER} \
-e DB_PASSWORD={DB-PASS} \
jboss/keycloak:latest
```