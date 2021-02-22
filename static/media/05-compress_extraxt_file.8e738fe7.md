# Compress and extract a file or a directory

##  Compress with tar command

```bash
tar -czvf name-of-archive.tar.gz /path/to/directory-or-file
```

- -c: Create an archive.
- -z: Compress the archive with gzip.
- -v: Display progress in the terminal while creating the archive, not neccessary.
- -f: Allows you to specify the filename of the archive.
 
##  Exract with tar command

```
tar -xzvf archive.tar.gz
``` 
or

```
tar -xzvf archive.tar.gz -C /tmp
``` 

For example, the following command will extract the contents of the archive.tar.gz file to the /tmp directory.