# DockerFile
 
- Docker build provides build a new docker images from an Dockerfile

## DockerFile

- Docker can build images automatically by reading the instructions from a Dockerfile "Dockerfile" file is case sensitive and should be without extensions
- If your Dockerfile is different name, you should indicate the path and name by "f" tag

## Sample DockerFile

```dockerfile
# Base image
FROM ubuntu:16.04

# Createor
MAINTAINER Anil Korkmaz <anil.korkmaz@mail.com>

# Run, execute the commands after ubuntu container is up
# Download ubuntu package list
RUN apt-get update

# Setup Nginx
RUN apt-get install -y nginx

# Add files from host to container
ADD [ "index.html", "/var/www/html/" ]

# A Command after running container 
# ENTRYPOINT COMMAND PARAMETERS..
ENTRYPOINT nginx -g 'daemon off;'
```

## Build Command Usage

```bash
docker build -t DOCKERHUB_NAME/IMAGE_NAME:TAG .
```

- You should be in Dockerhub directory
- If Dockerfile name is different "Dockerfile", you have to use -f parameter 
```bash
docker -f OUR_DOCKERFILE build -t DOCKERHUB_NAME/IMAGE_NAME:TAG .
```
- DOCKERHUB_NAME is not required but if you want to push your image to dockerhub, you can login dockerhub and push your images.
```bash
docker login
docker push DOCKERHUB_NAME/IMAGE_NAME:TAG
```
- Official images are not contains namespaces(namespace/image:tag). 

## See your image with docker images and Run the container from image

```bash
docker images
docker run --name CONTAINER_NAME -p HOST_PORT:CONTAINER_PORT --detach DOCKERHUB_NAME/IMAGE_NAME:TAG
```