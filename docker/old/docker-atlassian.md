# Docker at Atlassian: Automated builds on bitbucket

## What is Docker?
Docker is next big thing in provisioning and deployment automation. Docker image can be reused, updated and shared. A fresh new environment for each CI run is just a Dockerfile away.

## Dockerfile
Dockerfile is where you describe each step needed to get an application into its desired state so one use it either from bare metal or starting from where Dockerfile leaves off. 

Dockerfile can be stored in version control. Others can start from where it left off without reinventing the wheel using Dockerfile.

## Automation Builds.
* **Bamboo automation tool**
* one button cluster deployment.

## Commands
* `docker ps -q` list all running containers with ID.
* pair container IDs with their respective IP addresses.
```shell
sudo docker ps | tail -n +2 | awk {'printf "%s\t%s\n", $1, $2 '}) <(sudo docker ps  -q | xargs sudo docker inspect | tail -n +2 | grep IPAddress | awk '{ print $2 }' | tr -d ',"'
```
* running postgres
```
docker run -d -name postgres -p 5432:5432 zaiste/postgresql
```
* automation of setting up a container can be done using Dockerfile.


## References
[1]: [Docker at Atlassian](https://www.atlassian.com/blog/archives/docker-all-the-things-at-atlassian-automation-and-wiring)