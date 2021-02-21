# Hide the grub 

###  Edit grub config file with your favoriote text editor

`sudo nano /etc/default/grub`

### Showing something like:

```properties
GRUB_DEFAULT=0
GRUB_DEFAULT=0
#GRUB_HIDDEN_TIMEOUT=0
#GRUB_HIDDEN_TIMEOUT_QUIET=true
GRUB_TIMEOUT=10
GRUB_DISTRIBUTOR=”`lsb_release -i -s 2> /dev/null || echo Debian`”
GRUB_CMDLINE_LINUX_DEFAULT=”quiet splash”
GRUB_CMDLINE_LINUX=”"
```

### Remove the two #s before GRUB_HIDDEN_TIMEOUT and GRUB_HIDDEN_TIMEOUT_QUIET.

```properties
GRUB_DEFAULT=0
GRUB_DEFAULT=0
GRUB_HIDDEN_TIMEOUT=0
GRUB_HIDDEN_TIMEOUT_QUIET=true
GRUB_TIMEOUT=10
GRUB_DISTRIBUTOR=”`lsb_release -i -s 2> /dev/null || echo Debian`”
GRUB_CMDLINE_LINUX_DEFAULT=”quiet splash”
GRUB_CMDLINE_LINUX=”"
```

### To start the service
`sudo update-grub`
    
### Reboot
Reboot and you should have no GRUB window show up.