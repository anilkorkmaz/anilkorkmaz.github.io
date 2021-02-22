# Docker Container Auto Restart
 

## With Docker Update
- Always
```bash
docker update --restart=always CONTAINER_NAME
```

- Unless Stopped
```bash
docker update --restart=unless-stopped CONTAINER_NAME
```

- On-failure (retries 10 times in case of an error)
```bash
docker update --restart=on-failure:VALUE CONTAINER_NAME
docker update --restart=on-failure:10 redis
```

## During container creating

- Always
```bash
docker run -d --restart always redis
```

- Unless Stopped
```bash
docker run -d --restart unless-stopped redis
```

