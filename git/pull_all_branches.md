# Pull All The Branches from Remote to Local
* Following command will pull all the remote branches to local
```
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote" || true; done 2>/dev/null
```
