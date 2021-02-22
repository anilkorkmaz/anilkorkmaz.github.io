# Display logs during last boot 

- Display logs during last boot with journalctl 

```bash
sudo journalctl -b0 -p3
```

- -b means last boot order (0 -> last , 1-> penultimate)

- -p means priority

```
emerg (0)
alert (1)
crit (2)
err (3)
warning (4)
notice (5)
info (6)
debug (7)
```