# Linux files that should be learned

## ETC

- **/etc/bashrc** : Contains system defaults and aliases used by bash shell.
- **/etc/rc.local** : To execute commands at system boot
- **/etc/crontab**: Running process that executes commands at specific dates and times
- **/etc/fstab** : Information of Disk Drive and their mount point.
- **/etc/group** : Information of Security Group.
- **/etc/exports** : Information of the file system available on network.
- **/etc/grub.conf** : grub bootloader configuration file.
- **/etc/init.d** : Service startup Script.
- **/etc/hosts** : Information of Ip addresses and corresponding host names.
- **/etc/hosts.allow** : List of hosts allowed to access services on the local machine.
- **/etc/host.deny** : List of hosts denied to access services on the local machine.
- **/etc/issue** : Allows to edit the pre-login message.
- **/etc/motd** : motd stands for Message Of The Day, The Message users gets upon login.
- **/etc/printcap** : Printer Information
- **/etc/profile** : Bash shell defaults
- **/etc/profile.d** : Application script, executed after login.
- **/etc/securetty** : Terminal List, where root login is possible.
- **/etc/X11** : Configuration files of X-window System.

## Proc

- **/proc/filesystems** : File-system Information being used currently.
- **/proc/meminfo** : Memory Usages Information.
- **/proc/mount** : Mounted File-system Information.
- **/proc/stat** : Detailed Statistics of the current System.

## Home
- **$HOME/.bashrc** : a shell script which is run every time a user opens a new shell.
- **$HOME/.config** : where per-user configuration files go if there is no $XDG_CONFIG_HOME.
- **$HOME/.cache**  : where per-user cache files go if there is no $XDG_CACHE_HOME.
- **$HOME/.local/share** : where per-user data files go if there is no $XDG_DATA_HOME.
