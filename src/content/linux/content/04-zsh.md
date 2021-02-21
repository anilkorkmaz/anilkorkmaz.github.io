# Zsh / Oh My Zsh / Autocomplete from history

### Install Zsh

- On ubuntu
```bash
apt install zsh 
```

- On Manjaro
```bash
pacman -S zsh
```

### Install OhMy Zsh

- Visit [https://ohmyz.sh](https://ohmyz.sh/#install) and download ohmyzsh

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
### Install Autosuggestion

- Install [Autosuggestion plugin](https://github.com/zsh-users/zsh-autosuggestions)

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

- Edit the *~/.zshrc* file and add *zsh-autosuggestions*
  
```
plugins=(zsh-autosuggestions)
```