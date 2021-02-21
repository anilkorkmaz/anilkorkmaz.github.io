# Scp Command

```bash
Scp command is used to connect data to a server with ssh
```

### To copy local data from server

```bash
scp USER_NAME@IP:/FILE_PATH LOCAL_PATH
```    

### To copy data from local to server

```bash
scp LOCAL_PATH USER_NAME@IP:/FILE_PATH
```

### To specify the port and copy it recursively

```bash
scp -P PORT_NUMBER -r USER_NAME@IP:/FILE_PATH LOCAL_PATH
```

### Example

```bash
sudo scp -P 3981 -r dev@31.120.146.34:/home/octosrv/octoserver_runnable/ /home/kpc/Desktop/fas/octoserver_runnable/
```