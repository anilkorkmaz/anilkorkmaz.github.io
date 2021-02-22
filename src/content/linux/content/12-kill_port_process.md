# Kill the active port's process

- sudo gedit `~/.bashrc` and add the function

```bash
portKill(){

if [ "$1" != "" ]; then
        echo "Killing the port : $1";
        sudo lsof -t -i tcp:$1 | xargs kill -9
else
    echo "Please Specify a Port !"
fi

}
```
- Usage on terminal

`source ~/.bashrc`

`portKill 8080`