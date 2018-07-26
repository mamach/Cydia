# GIT

## Logs
* `git log -p -2` to watch the logs with diff 
* `git log --stat` similar to above command.
* `git log --pretty=oneline`  changes log output format to other than default.
    * other options are `short`, `full` and `fuller`.
* `git log --pretty=oneline --graph` shows branch and merge history
    * `git log --pretty=format:"%h %s" --graph` %s is subject and %s is abbreviated hast
    * `git log --pretty=format:"%an %h %s" --graph` %an is for author name.
    * `git log --pretty=format:"%an %h %s" --graph -p` for showing diff of commit 
* `git log -S function_name` shows commits which are pertaining to only those commits
### Limiting
* `git log -2`
* `git log --since=2.weeks`
* `git log --grep=some-search-string`
*  `git log --author=author_name`

## Issues
* SSL_Error
```
git config --global http.sslBackend "openssl"
```
and
```
git config --global http.sslCAInfo "C:\Program Files\Git\mingw64\ssl\cert.pem"
```
Reference:
[SSL Error Windows](https://stackoverflow.com/questions/49345357/fatal-unable-to-access-https-github-com-xxx-openssl-ssl-connect-ssl-error)

## Branches

## References
[1].[Basics of viewing the commit history](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)