# Docker Ecosystem
* Contaiarization is the process of distributing and deploying applications in portable and predictable way.
* Docker is the most common contairization software today.
* ![container overview][containerOverview]

## Docker and Containerization
* How containers relate to the host system.
* Containers isolate individual applications and use operating system resources.
* Containers can be built by layering with multiple containers sharing underlying layers.

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

## References
[1]: [Docker Ecosystem](https://www.digitalocean.com/community/tutorials/the-docker-ecosystem-an-introduction-to-common-components)

[2]: [Intro to Kubernetes](https://www.digitalocean.com/community/tutorials/an-introduction-to-kubernetes)

[3]: [Docker Cheat Sheet] (https://github.com/wsargent/docker-cheat-sheet)

[4]: [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

[containerOverview]: https://assets.digitalocean.com/articles/docker_ecosystem/Container-Overview.png "Logo Title Text 2"
