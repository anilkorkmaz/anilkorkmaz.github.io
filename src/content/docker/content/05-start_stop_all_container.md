# Start Stop Restart Containers
 
## Docker all containers

```bash
docker start $(docker ps -a -q)
docker stop $(docker ps -a -q)
docker restart $(docker ps -a -q)
```

## Docker stop or restart running containers

```bash
docker stop $(docker ps -q)
docker restart $(docker ps -q)
```