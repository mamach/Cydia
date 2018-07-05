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

## References
[1]: [Docker Ecosystem](https://www.digitalocean.com/community/tutorials/the-docker-ecosystem-an-introduction-to-common-components)

[2]: [Intro to Kubernetes](https://www.digitalocean.com/community/tutorials/an-introduction-to-kubernetes)

[3]: [Docker Cheat Sheet] (https://github.com/wsargent/docker-cheat-sheet)

[4]: [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

[containerOverview]: https://assets.digitalocean.com/articles/docker_ecosystem/Container-Overview.png "Logo Title Text 2"
