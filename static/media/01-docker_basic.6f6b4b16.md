# Docker Basics

## New Container
- Start new container
```bash
docker run --name CONTAINER_NAME IMAGE
docker run --name postgres_local postgres
```

- Map a port
```bash
docker run -p HOST_PORT:CONTAINER_PORT IMAGE
docker run -p 5432:5432 postgres
```

- Map all ports
```bash
docker run -P IMAGE
```

- Assign Hostname
```bash
docker run --hostname HOSTNAME IMAGE
```

- Volume (map a local directory into the container)
```bash
docker run -v HOST_DIRECTORY:TARGET_DIRECTORY IMAGE
docker run -v /var/lib/postgresql/data:/var/lib/postgresql/data postgres
```

## Containers

- List running containers
```bash
docker ps
```

- List all containers
```bash
docker ps -a
```

- Start/Stop/Restart  containers
```bash
docker start CONTAINER_NAME
docker stop CONTAINER_NAME
docker restart CONTAINER_NAME
```

- Remove containers
```bash
docker rm CONTAINER_NAME
```

- Remove running containers
```bash
docker rm -f CONTAINER_NAME
```

- Remove running containers with volume
```bash
docker rm -vf CONTAINER_NAME
```

- Remove stopped containers
```bash
docker container prune
```

- Copy a file from container to host or host to container
```bash
docker cp CONTAINER_NAME:PATH DESTINATION_PATH
docker cp postgres:etc/postgresql/11/main/postgresql.conf postgresql.conf 
```

- Copy a file from host to container
```bash
docker cp SOURCE_PATH CONTAINER_NAME:PATH
docker cp postgresql.conf postgres:etc/postgresql/11/
```

- Start a shell inside a running container
```bash
docker exec -it CONTAINER_NAME COMMAND
docker exec -it postgres bash
```

- Rename a container
```bash
docker rename OLD_CONTAINER_NAME NEW_CONTAINER_NAME 
```

- Create an image out of container
```bash
docker commit CONTAINER_NAME
```

## Images

- Show images
```bash
docker images
```

- Download an image
```bash
docker pull IMAGE_NAME:TAG
```

- Upload a repository
```bash
docker push IMAGE_NAME:TAG
```

- Delete an images
```bash
docker rmi IMAGE_NAME
```

- Delete all unused images
```bash
docker image prune -a
```

- Build an images from a dockerfile
```bash
docker build DIRECTORY
docker build .
```

- Tag an image
```bash
docker tag IMAGE NEW_IMAGE
```

- Build and tag an image from a DockerFile
```bash
docker build -t IMAGE DIRECTORY
```

- Save an image to .tar file
```bash
docker save IMAGE > FILE
docker save postgres > postgres.tar
```

- Save an image to .tar file
```bash
docker load -i FILE
docker load -i postgres.tar
```

## Logs

- Show the logs
```bash
docker logs CONTAINER_NAME
```

- Show the logs with follow 
```bash
docker logs -f CONTAINER_NAME 
```

- Show the last logs with follow and tail
```bash
docker logs -f --tail VALUE CONTAINER_NAME
docker logs -f --tail 50 postgres 

```

- Show stats of running container
```bash
docker stats
```

- Show processes
```bash
docker top CONTAINER_NAME
```

- Get detailed info about container
```bash
docker inspect CONTAINER_NAME
```

- Show modified files in container
```bash
docker diff CONTAINER_NAME
```

- Show mapped port of a container
```bash
docker port CONTAINER_NAME
```