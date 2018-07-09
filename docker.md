# Docker Ecosystem
* Contaiarization is the process of distributing and deploying applications in portable and predictable way.
* Docker is the most common contairization software today.
* ![container overview][containerOverview]

## Docker and Containerization
* How containers relate to the host system.
* Containers isolate individual applications and use operating system resources.
* Containers can be built by layering with multiple containers sharing underlying layers.

### Container
* A basic isolated process. Containers are to Virtual Machines as threads are to processes or chroots on steroids.

#### Life Cycle
* docker create 
* docker rename
* docker run
* docker rm
* docker update -- update container resource limits.

**Running a container** without options will start and stop automatically. To keep container running following command need to be used `docker run -td docker_image_name`( `-t` pseudo TTY session and `-d` will detach or run container in background ).

**Transient Container** `docker run --rm docker_image_name`

**Mapping Directory** from host to container `docker run -v $HOSTDIR:$DOCKERDIR` (volumes)

**Remove with volumes** `docker rm -v container_id`

**Logging Driver** `docker run --log-driver=syslog`

**Alias Name** `docker run --name name_of_process docker_image`

#### STARTING AND STOPPING
* `docker start`
* `docker stop`
* `docker restart`
* `docker pause`
* `docker unpause`
* `docker wait` 
* `docker kill`
* `docker attach` connect to a running container.

#### CPU and Memory Constraints
* `docker run -ti --c 512 agileek/cpuset-test` (50% of all CPU's)
* `docker run -ti --c cpuset-cpus=0,4,6 agileek/cpuset-test`
* `docker run -it -m 300M ubuntu:14.04 /bin/bash`

#### Info
* `docker ps` show running containers
* `docker logs` logs from container
* `docker inspect` looks at all the info on a container(including IP addresses)
* `docker events` get events from container
* `docker port` shows public facing port of container
* `docker top` shows running processes in container
* `docker stats` shows container resource usage statistics.
* `docker diff` shows changed files in container FS.

`docker ps -a` shows runnign and stopped containers.

`docker stats --all` shows running list of containers.

#### Import / Export
* `docker cp` copies files and folders between container and host file system
* `docker export` turns container filesystem into tarball.

#### Executing commands
* `docker exec` to execute a command in a container.

### Images
Images or just templates for docker containers.

#### Lifecycle
* `docker images` show all images
* `docker import` creates an image from tarball.
* `docker build` create image from Dockerfile
* `docker commit` create image from container.
* `docker rmi` remove docker image
* `docker load` load an image from tar archive as STDIN
* `docker save` saves an image to tar archive stream to STDOUT

#### Info
* `docker history` shows history of image
* `docker tag` tags an image to a name

### Checking Docker version
* `docker version`
#### Load/save an Image
* `docker load < image_name.tar.gz`
* `docker save image_name:tag_name | gzip > image_name.tar.gz` save an existing image

#### Import/Export a container
* `cat container_name.tar.gz | docker import - image_name:tag_name` import a container as image from a file.
* `docker export container_name | gzip > container_name.tar.gz` Export existing container

### Network
It is good way to configure docker containers to talk to each other without using **ports**.

#### Lifecycle
* `docker network create`
* `docker network rm`

#### Info
* `docker network ls`
* `docker network inspect`

#### Connection
* `docker network connect`
* `docker network disconnect`

```shell
# create a new bridge network with your subnet and gateway for your ip block
docker network create --subnet 203.0.113.0/24 --gateway 203.0.113.254 iptastic

# run a nginx container with a specific ip in that block
$ docker run --rm -it --net iptastic --ip 203.0.113.2 nginx

# curl the ip from any other place (assuming this is a public ip block duh)
$ curl 203.0.113.2
```

### Registry and Repository
A repo is hosted collection of tagged images that together create the file system for a container.
A registry is  a host -- a server that stores repositories and provides an HTTP API managing the uploading and downloading repositories.
* ` docker login` to login to registry.
* `docker logout`
* `docker search`
* `docker pull`
* `docker push`

### Dockerfile
The configuration file.

#### Instructions
* .dockerignore
* **FROM** sets the base image for subsequent restrictions.
* **RUN** execute any commands in new layer on top of the current image and commit the results.
* **CMD**  provide defaults for an executing container.
* **EXPOSE** informs Docker that the container listen on the specified network ports at runtime.
* **ENV** sets environment variable.
* **COPY** copies new files or directories to container.
* **ENTRYPOINT** configures a container that will run as executable.
* **VOLUME** Creates a mount point for externally mounted volumes or other containers.
* **USER** set username for `RUN`, `CMD`, `ENTRYPOINT` commands.
* **WORKDIR** sets the working directory.
* **ARG** defines build time variable.
* **ONBUILD** adds a trigger instruction when the image is used as base for another build.
* **STOPSIGNAL**   sets the system call signal that will be sent to the containers to exit.
* **LABEL** sets the key value metadata to images, containers and daemons.

### LINKS
Links are how dockers communicate each other through TCP/IP ports.
* `docker rm --link` to delete links.

### VOLUMES
* Docker volumes are free floating file systems. They don't have to be connected to a particular container. 

#### Lifecycle
* `docker volume create` 
* `docker volume rm`

#### Info
* `docker volume ls`
* `docker volume inspect`

Volumes are useful where Links are not used.    
* `docker run --volumes-from`

### Exposing ports
* `-p` is used to map container port to host port.

```shell
docker run -p 127.0.0.1:$HOSTPORT:$CONTAINERPORT --name CONTAINER -t image_name
```

using EXPOSE in Dockerfile one can tell docker that container to listen on specified network ports.
```shell
EXPOSE <container_port>
```

### Get IP Address
* `docker inspect $(d1) | grep -wm1 IPAddress | cut -d '"' -f 4`

### Delete all containers
* `docker rm -f $(docker ps -qa)`

### Delete all images
* `docker rmi $(docker images -q)`

### Monitor system resource utilization
* `docker stats container_id`

### Volumes can be files
* It is possible to mount files as Volumes.
* `docker run --rm httpd cat /usr/local/apache2/conf/httpd.conf > httpd.conf` copy file from container.
* edit file `vim httpd.conf`
* start container with modified configuration. `docker run --rm -it -v "$PWD/httpd.conf:/usr/local/apache2/conf/httpd.conf:ro" -p "80:80" httpd`


### Advantages
* Lightweight resource utilization
* Portable
* Predictabilty

## Service Discovery and Global Configuration Stores
* ![Discovery Service](https://assets.digitalocean.com/articles/docker_ecosystem/Discover-Flow.png)
### Responsibilities
* Allowing applications to obtain the data needed to connect with to the services they depend on.
* Allowing services to register their connection information for the above purpose.
* Providing a globally accessible location to store arbitrary configuration data.
* Storing information about cluster members as needed by any cluster management software.
### Popular Service Discovery Tools
* etcd: service discovery / globally distributed key-value store
* consul: service discovery / globally distributed key-value store
* zookeeper: service discovery / globally distributed key-value store
* crypt: project to encrypt etcd entries
* confd: watches key-value store for changes and triggers reconfiguration of services with new values

## Networking Tools
* Docker itself will provide basic networking structures necessary for container to container to host communications.
* Docker provides two mechanisms for hooking containers together.
** one can select host port to map to or allow Docker to choose high, unused port.
** Otherway is using docker links. A linked container will get connection information about its counterpart.

## Scheduling Cluster Management and Orchestration
* Schedulers are responsible for starting containers on the available hosts.
* ![ Schedule App F](https://assets.digitalocean.com/articles/docker_ecosystem/Example-Schedule-App-F.png)
* Application that can be used as schedulers are 
** Kubernetes
** compose
** Swarm
** etc.

## Installation of Docker
* Latest version of docker will be installed from [get.docker.com](https://get.docker.com).
* or use the following commands
```shell
curl -fsSL get.docker.com -o get-docker.sh
sh get-docker.sh
```

## Examples
* Command for running **nginx** server from docker, following command will fetch nginx image to local machine and forward requests from host port 80 to container port 80 and vice versa.
```
docker container run --publish 80:80 --detach nginx
```
* Command for running **httpd** server from docker, following command will fetch nginx image to local machine and forward requests from host port 8080 to container port 80 and vice versa.
```
docker run --publish 8080:80 --detach httpd
```
* Command for running **mysql** server from docker, following command will fetch nginx image to local machine and forward request from host port 3306 to container port 3306 and vice versa.
```
docker run --publish 3306:3306 --detach -e MYSQL_RANDOM_ROOT_PASSWORD=yes mysql

or

docker run --publish 3306:3306 --detach -env MYSQL_RANDOM_ROOT_PASSWORD=yes mysql
```
## What's going on in containers
* `docker container top` process list in one container
* `docker container inspect` details of one container 
* `docker container stats` performance statistics of all containers

## Getting a shell inside conatainer
* `docker container run -it` start new container interactively.
* `docker container exec -it` run additional command in existing container.
* `docker container start -ai container_id` start an existing container.
* `docker container exec -it container_id`

## Docker Network Concepts
* `docker container run -p`
* Each container connected to a private virtual network "bridge".
* Each virtual network routes through NAT firewall on host IP.
* All containers on a **virtual network**  can talk each other without `-p`.
* Best practice is to create a new virtual network for each app.
* `docker container port container_id`
* `docker container inspect --format '{{.NetworkSettings.IPAddress}}' container_id`
### CLI Management
* `docker network ls`
* `docker network inspect`
* `docker network create --driver`
* `docker network connect`
* `docker network disconnect`

### How containers find each other
* Docker DNS
* relying on IP is unstable. 
* use `--link` to establish connection between containers.

## References
[1]: [Docker Ecosystem](https://www.digitalocean.com/community/tutorials/the-docker-ecosystem-an-introduction-to-common-components)

[2]: [Intro to Kubernetes](https://www.digitalocean.com/community/tutorials/an-introduction-to-kubernetes)

[3]: [Docker Cheat Sheet] (https://github.com/wsargent/docker-cheat-sheet)

[4]: [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

[5]: [Dockers in Atlassian](https://www.atlassian.com/blog/archives/docker-all-the-things-at-atlassian-automation-and-wiring)

[containerOverview]: https://assets.digitalocean.com/articles/docker_ecosystem/Container-Overview.png "Logo Title Text 2"
