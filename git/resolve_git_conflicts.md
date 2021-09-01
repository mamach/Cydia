# Strategy Options
* theirs for INCOMING changes.
* ours for CURRENT changes.

# Resolving GIT Conflicts
* Use the following command to accept incoming changes.
```
git pull -X theirs
```

* If you are already in conflicted state use the following command.
```
git checkout --theirs path_to_file
```

# Merging incoming changes
* Use the following command to merge incoming changes
```
git merge --strategy-option theirs
```


