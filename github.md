# How to add SSH Key in Ubuntu
* Use the following command to check whether SSH Keys are already generated
```
$ ls -al ~/.ssh
```
* Use the following command to generate the keys if no ssh keys found
```
$ ssh-keygen -t ed25519 -C "your_email@example.com"
```
* Enter the password when prompted and re-enter the same password again for confirmation.
* Check whether ssh keys generated using following command, this command will print the ssh process id
```
eval "$(ssh-agent -s)"
```
* add ssh private key to the ssh-agent using following command
```
ssh-add ~/.ssh/id_ed25519
```
* add the the public key of the ssh agent to github account

* To copy the contents of ssh public key into clipboard install xclip using following command
```
sudo apt-get install xclip
```
and copy using the command

```
xclip -selection clipboard ~/.ssh/id_ed25519.pub
```


