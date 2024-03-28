#
```
git log --since=<start-date> --until=<end-date> --pretty=tformat: --numstat <branch-name> | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }'
```

# with author details
```
git log --since=<start-date> --until=<end-date> --pretty=tformat: --numstat --author=<author-name> <branch-name> | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "Author: %s\nAdded lines: %s\nRemoved lines: %s\nTotal lines: %s\n", "<author-name>", add, subs, loc }'
```
