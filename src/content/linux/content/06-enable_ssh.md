# Install and Enable SSH

##  Install Openssh , If not installed

debian
```bash
sudo apt-get install openssh
```

manjaro
```bash
sudo pacman -S openssh
```

## To view or change your settings for example default ssh port
```bash
sudo nano /etc/ssh/sshd_config
```

## To see the service status
```bash
sudo systemctl status sshd.service
```

## To start the service
```bash
sudo systemctl start sshd.service
```

## To be active on reboot
```bash
sudo systemctl enable sshd.service
```