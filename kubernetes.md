# Kubernetes
Kubernetes is developed by google for maintaining containerized applications in a clustered environment. It aims to provide better ways of managing related distributed components and services across varied infrastructure.

## Architecture
Kubernetes base brings together individual physical or virtual machines into a cluster using shared network to communicate between each server. This cluster is physical platform where all kubernetes components, capabilities and workloads are configured.

* Each machine given a role within the Kubernetes ecosystem.
* One server functions as the **master server**. This server act as gateway for the cluster by exposting an API for users and clients, health checking other servers, deciding how best to split up and assign work(scheduling) and orchestrating communication between other components. 
* Other machines in cluster designated as **nodes**. Nodes are responsible for accepting and running workloads using local and external resources. To help with isolation Kubernetes runs services in **containers** like Docker. 
* Node receives work instructions from the master server and creates or destroys containers accordingly, adjusting networking rules to route and forward traffic appropriately.
* To start up an application or service a declarative plan is submitted in JSON or YAML defining what to create and how it should be managed.

## Master Server Components
* master server will
**  accept user requests
**  determine best ways to schedule workload containers
**  authenticate clients and nodes 
**  adjust cluster wide networking
**  manage scaling and health checking responsibilities.

### etcd
Globally available configuration store. It is developed by team of core OS. It is light weight distributed key-value store that can be configured to span across multiple nodes.

#### kube-apiserver
It is one of the most important master service. It acts as bridge between various components to maintain cluster health. 

#### Kube-control-manager

#### Kube-scheduler

#### cloud-control-manager

### Node server components

#### kubelet
main contact point for each node with the cluster group is a small service called kubelet.

#### kube-proxy
To manage individual host subnetting and make services available to other components, this service is running in each node server.

### Kubernetes Objects and Workloads

Containers are the underlying mechanism used to deploy applications. Kubernetes uses additional layers of abstraction over the container interface to provide scaling , resiliency and life cycle management features.

#### Pods
A pod is the most basic unit that Kubernetes deals with. Containers themselves are not assigned to hosts. Instead one or more tightly coupled containers are encapsulated in an object called **pod**.

#### Replication Controller and Replication Sets

### Deployments
### Jobs and Cron Jobs
Jobs are useful when performing one-off or batch processing instead of running a continuous service. 

Cronjobs are useful in executing scripts on schedule.

## Conclusion
Kubernetes allows users to run scalable, highly available containerized workloads on highly abstracted platform. By understanding how the basic building blocks fit together one begin design systems that fully leverage the capabilties of the platform to run and manage workload at scale.

## References
* [Intro to Kubernetes](https://www.digitalocean.com/community/tutorials/an-introduction-to-kubernetes)|