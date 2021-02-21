# DockerFile
 
- Creating JDK based image for Microservice or java applications

## Official Java

```dockerfile
    FROM java:8
    #EXPOSE 8080
    ADD restservice-0.0.1-SNAPSHOT.jar jar/restservice-0.0.1-SNAPSHOT.jar
    ENTRYPOINT ["java","-jar","restservice-0.0.1-SNAPSHOT.jar"]
```

## Openj9

```dockerfile
    FROM adoptopenjdk/adoptopenjdk:8-openj9
    #EXPOSE 8080
    ADD restservice-0.0.1-SNAPSHOT.jar jar/restservice-0.0.1-SNAPSHOT.jar
    ENTRYPOINT ["java","-jar","restservice-0.0.1-SNAPSHOT.jar"]
```
## Docker Image with initial sciprt

```dockerfile
    FROM adoptopenjdk:8-openj9
    ADD initial.sh initial.sh
    RUN ["chmod", "+x", "initial.sh"]
    CMD ["./initial.sh"]
```