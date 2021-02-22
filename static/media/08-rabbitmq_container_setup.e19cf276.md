# Docker RabbitMq container 

## Setup Container

```bash
docker run -d --hostname rabbitmq --name rabbitmq -p 5672:5672 -p 15672:15672 -d rabbitmq:3.8.2
```

## Enable management plugin

- Sh connection to container 

```bash
docker exec -it rabbitmq sh 
```

- Sh connection to container 

```bash
rabbitmq-plugins enable rabbitmq_management
```