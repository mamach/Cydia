```
find /path/to/the/directory/ -type f -name '*' -mtime +30 -exec rm {} \;
```

# Explanation :
Time to breakdown the find command mentioned above :

- /path/to/the/directory : Edit this portion of the code with the path of your target directory.
- -type f : It signifies that we are targeting all the ‘files’ in the specified directory.
- -name ‘*’ : We have used a general regex “*” to match all the file names. You can make it more specific if you need. For example , to delete only dat files use : -name "*.dat".
- -mtime +30 : This refers to all the files which are older than 30 days. mtime stands for Modification time in Unix.You can change the number based on your requirement.
- -exec rm {} \ : This is actually the execution command which calls for deletion of all the files filtered by all the above criteria. rm stands to remove in Unix.


# Reference
[1]. [How to delete files older than x days](https://www.programmergirl.com/how-to-delete-files-older-than-x-days-in-unix/#:~:text=If%20you%20want%20to%20delete,mmin%20%24((60*24))%20.)
