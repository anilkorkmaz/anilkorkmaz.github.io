# Create Bootable Disk from IMG

- Display disk positions
```bash
sudo fdisk -l
```

- Burn iso with dd

```bash
sudo dd bs=4M if=THE_ISO_FILE of=/dev/sdX status=progress oflag=sync
```
