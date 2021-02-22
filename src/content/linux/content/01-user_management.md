# Linux User Management

### Create user
- Create new user
  
```bash
sudo useradd anil
```

- Create new user with home directory

```bash
sudo useradd -m anil
```

- Create new user with spesific home directory

```bash
sudo useradd -d /home/anilk/ -m anil
```

### Set pasword

```bash
sudo passwd anil
```

### Delete user

-  Delete user

```bash
sudo userdel anil
```

-  Delete user with home

```bash
sudo userdel -r anil
```

### Add a user to the “sudo” group

```bash
sudo usermod -aG sudo anil
```
