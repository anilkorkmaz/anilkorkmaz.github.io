# Bash Script with parameter names

### Script

```bash
#!/bin/bash

## default value for -db -> POSTGRES
db=${db:-POSTGRES}

while [ $# -gt 0 ]; do

   if [[ $1 == *"-"* ]]; then
        param="${1/-/}"
        declare $param="$2"
        # echo $1 $2 // Optional to see the parameter:value result
   fi

  shift
done

echo $db 

echo $type
```

### Saple input and output


```bash
-> sh parameter.sh -db mysql -type goodDB
output -> 
mysql
goodDB
```

```bash
-> sh parameter.sh
output -> 
postgres

```
