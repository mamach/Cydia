# Kubernetes

- repo url - https://github.com/redashu/k8s-cloud4c-b4
- delvex.io
- https://learn.springpeople.com/courses/course-v1:ctrls-datacenters+230717-Ctr-Kub-1+2023_Q3/course/
- https://learn.springpeople.com/

```
username: mahesh.maheswaram@cloud4c.com
password: SQQ0FJGU
```

## K8S Cluster Credentials
```
ssh mahesh@43.205.221.152
Username: mahesh
Password: K8sDocker@098
IP address :  43.205.221.152
K8sDocker@098
```

## Problems

- Scaling
- Health
- Security
- Metrics
- Scheduling
- Deployment

## Tools
- Docker swarm
- Kubernetes
- Openshift

## K8S
evolved out of borg
written in golang

# K8S architecture
- control plane/master
- data plane/workers


kubectl
helm
sdk(rest api)
webui

## control plane
	- api server
	- scheduler
	- controllers
		- k8s
		- cloud
	- etcd (key value store)

## kubectl installation
https://kubernetes.io/docs/tasks/tools/


## Kubectl
- kubectl version -o yaml --kubeconfig k8s_conf/admin.conf
- cp ~/Projects/repos/k8s_conf/admin.conf  ~/.kube/config
- Get nodes using kubectl
```
kubectl get nodes
```
- checking connectivity 
```
kubectl cluster-info
kubectl version -o yaml
```

docker = k8s(kubelet+docker)
kubelet - ipc, storage
docker - create,

# Intro to pod
- container is inside pod along with other environment

# creating pod using manifest file

# manifest yaml file contaions following attributes
- apiVersion
- kind
- metadata
- spec

# Sample manifest file
```
apiVersion: v1 
kind: Pod # req is about pod
metadata: 
  name: mahesh-nodeapp-pod1
spec: # everything we need in pod are written here
  containers: 
    - name: maheshc1
      image: docker.io/maheshc4c/nodeapp:v1
```

kubectl create -f mahesh-nodeapp-pod1.yaml

kubectl get pods

# Kubernetes Architecture
- Master Node
  - API Server
  - etcd
  - Controller Manager
  - Scheduler
- Worker Nodes
  - Kubelet : communicates with the master node and ensures that containers such as docker, containerd, or others.
  - Container Runtime
  - Kube Proxy
-  POD
  - pod is smallest deployable unit in kubernetes. It can contain one or more containers.
- Service
  - A service provides network connectivity to pods.
- Controller (Manage the state of resources)
  - Replica Set
  - Deployment
  - StatefulSet
  - DaemonSet (ensure copy of pod runs on each node in the cluster)
- Namespace
- ConfigMap and Secret
- Volume
- Ingress (Manages external access  to services within cluster, allowing for routing and load balancing of incoming traffic)


## Connecting to kubernetes POD

```
kubectl exec -it <pod-name> -- /usr/bin/ssh user@container-ip
```

## Connecting to Kubernetes Container

```
kubectl exec -it <pod-name> -c <container-name> -- /bin/bash
```

## Getting Node Details Of Pod
```
 kubectl get pods mahesh-nodeapp-pod1 -o wide
```

## SCHEDULER
- Scheduler job is to rank the nodes/workers for deploying in pod
- Customer scheduler can also be written
- Kubernetes.io/docs/


## Getting Pod Related Instructions
kubectl get pods
```
kubectl describe pod <pod-name>
```

## Logs Of Pods
kubectl logs <pod-name>

## Delete Pod
kubectl delete pod <pod-name>


## Problems
- auto generate manifest
- pod level isolation 

## Generationg Json/Yaml Pod Manifest
Run command used to create and manage resources such as pods, deployments with in a cluster.
Primarily used to creation of pods and deployments from container image.

```
kubectl run maheshpod1 --image=docker.io/maheshc4c/nodeapp:v1 --port 3000 --dry-run=client -o yaml > auto.yaml
```

kubectl create -f auto.yaml
kubectl replace -f auto.yaml --force

Deployment using run command
```
kubectl run nginx-deployment --image=nginx --replicas=3 --dry-run=client -o yaml > deploy.yaml
```

## Assignment
create auto manifest
deploy in node3
access container  create folder /tmp/okhello


nodeName: <node3>


kubectl exec -it <pod-name> -- bash


kubectl delete pods --all

kubectl delete all

## Introduction to Namespaces
Namespaces provides a way to logically partition a single kubernetes cluster into multiple virtual clusters. They help to isolate the resources and naming collisions.
```
kubectl get namespaces
```

### Example NameSpaces
- defualt
- kube-node-lease
- kube-public
- kube-system

### Create A New Namespace Using Manifest File
```
kubectl create namespace mahesh-ns --dry-run=client -o yaml > ns.yaml
kubectl create -f ns.yaml 
kubectl   config  set-context  --current --namespace=mahesh-ns
kubectl create -f ns.yaml 
kubectl get namespaces
```


## Networking 
Master to worker networks
Pod to Pod Networking

Using CNI(Container Network Interface) all the pods are connected to each other


docker run testing -it --image=busybox



# Pod to pod communication is set by default

kubectl config get-contexts
kubectl delete pod mahesh-ui-pod
 
kubectl exec -it mahesh-app --bash

kubectl get ns

kubectl get pods -n <namespace>

Routing traffic through master vs routing traffic directly to POD
- single point of failure
- Security risk like DOS attack to master

- pod ip address is dynamic
- best practice is user -->nodes->pods

# LB by k8s internal will be created by default

# K8S uses Software LB.
- k8s LB is created by manifest file using service

## Types Of Service In K8s
A service provides network connectivity to Pods.
- Cluster IP
- NodePort
- LoadBalancer
- ExternalName


### NodePort Service
- NodePort services in kubernetes is a way to expose a set of pods to the outside world.
- LB will have ip , name, expose 30000 - 32768 port range
- There will be master lb another top of minion LBs
- 
- 
```
kubectl expose pod mahesh-app --type NodePort --port 3000 --name maheshlb1  --dry-run=client -o yaml > lb1.yaml
kubectl create -f lb1.yaml will create LB
kubectl get service
kubectl get svc
```


LB created will not be in same CNI network as pods.
- Delete pod first and then service

kubectl get pods
kubectl delete pod <pod-name>

kubectl get svc
kubectl delete svc <service-name>

image: adminer:latest
port:8080

create pod
expose to create nodeport service


kubectl run mahesh-adminer --image=adminer:latest --port 8080 --dry-run=client -o yaml > adminer_new.yaml

kubectl create -f adminer_new.yaml

kubectl get pods -o wide


kubectl expose pod mahesh-adminer --type NodePort --port 8080 --name mahesh-adminer-lb --dry-run=client -o yaml > ../lb/adminer_lb.yaml

kubectl create -f adminer_lb.yaml 


 kubectl get svc


# Api Server Resources
- POD
- NS
- Service(4 types of services are available)
	

# Revision
- docker build -t docker.io/maheshc4c/mahesh-day7-app:v1 
- docker login
- docker push docker.io/maheshc4c/mahesh-day7-app:v1


kubectl run  mahesh-day7pod --image=docker.io/maheshc4c/mahesh-day7-app:v1 --port 80 --dry-run=client -o yaml > day7pod.yaml

kubectl create -f day7pod.yaml
kubectl get pods

## Creating Service

kubectl create service // will list the services

kubectl expose pod mahesh day7pod --type NodePort --port 80 --name maheshlb2 --dry-run=client -o yaml > lb2.yaml
kubectl create -f lb2.yaml
kubectl get svc

Done application is running in port
http://13.232.137.195:31257/


kubectl delete pod,svc  --all

## Trying To Pull Image From Private Registry Will Show Error Message/Status As ErrImagePull

Describe Pod
```
kubectl describe pod <pod-name>
```


## Secret and  ConfigMap
- Both secret and configmap used to manage configuration data, each is having its own purpose.
- To save confidential information like registry, credentials

### Secret
- secret data is base64 encoded and not encrypted. Anyone has access to kubernetes cluster has access to secretes.
- use cases include database passwords, api keys, tls certificates etc.

### Secret vs ConfigMap
- Secrets used when senisitive information need to be securely managed.
- ConfigMaps are used to manage not sensitive information like environment variables, configuration data etc.

### Benefits of mounting env configurations as Volume
- Dynamic updates(update config without rebuilding)
- Seperation of Concerns
- Avoiding Image rebuilds
- Avoid hardcodings


kubectl create secret 

- creating secret

kubectl create secret docker-registry mahesh-reg-cred --docker-server=cloud4c.azurecr.io  --docker-username="cloud4c" --docker-password="92xPDI5p/PsV3ZQJH6aqp2lr/a5MfUes4umrOnyYWD+ACRCnabdo" --dry-run=client -o yaml> azure_secret.yaml


kubectl create -f azure_secret.yaml

kubectl get secret


update pod yaml file under spec

imagePullSecrets:
  - name: mahesh-reg-cred


kubectl replace -f private.yaml --force



K8S Summary

- kubectl
- kubectl will target cluster running remotely
- create namespace pod, service, secret, 

- webui of k8s also can be used

- kubectl get ns (grep dashboard)

-  kubectl   get  svc  -n  kubernetes-dashboard
kubectl   edit   svc  kubernetes-dashboard   -n  kubernetes-dashboard
kubectl   get  svc  -n  kubernetes-dashboard

copy from git

## Create Token
```
kubectl create token kubernetes-dashboard -n kubernetes-dashboard
```

### example token
```
eyJhbGciOiJSUzI1NiIsImtpZCI6InlYNW5VdTJrc0JESW1pUk9KUnhYUVdtTnNwNXhwQkNFZVl0ZDh4SS16TW8ifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiXSwiZXhwIjoxNjkwMjkzNjIwLCJpYXQiOjE2OTAyOTAwMjAsImlzcyI6Imh0dHBzOi8va3ViZXJuZXRlcy5kZWZhdWx0LnN2Yy5jbHVzdGVyLmxvY2FsIiwia3ViZXJuZXRlcy5pbyI6eyJuYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsInNlcnZpY2VhY2NvdW50Ijp7Im5hbWUiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsInVpZCI6IjI2ZDA2NTg1LTM3ZTktNGIyYS05YzJlLTMxYTUzNzBjYmI2MyJ9fSwibmJmIjoxNjkwMjkwMDIwLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZXJuZXRlcy1kYXNoYm9hcmQ6a3ViZXJuZXRlcy1kYXNoYm9hcmQifQ.K7LGU5QDnCzd9iCaLpF6XAO79yV6eRfmFh9kr6SwOsvKvmKkRF7Uy2vv-fmcugbTEpc44RImFvnFsBseQSDRhuY6zSZxkt_tmma8bJEtB5qpOCi3XK7CUurcyuJ03InzgOzQCn1iOyAzAdJS80jGhYBsGVEs7NLFYDDwXmyzN0PVk8iGdN8FDTUtwvJHLXinHj98evHndhU1ugPmFJKm9h8ncQXTcdihu7m-5hynto3n7R9d7iuZ1nmVw_Mph4kFXitG8jbddFMMBpDQkaJSWS0HNKy-K99ruFX07UlQ27iXSx1v-cGPT9HVRAkEodUHQthsNUFjXItGWSVghsxvww
```



kubectl config get-contexts

kubectl delete all --all 


kubectl cluster-info

# Controller in Kubernetes
- kubernetes architecture
- Horizontal scaling(Adding more pods), Vertical scaling(Increasing resources of same pod)
- scaling is not mentioned in manifest file and handled by controllers

# Control Plane
api server
scheduler
controllers
	k8s
		replication controller
	cloud
etcd

# Introduction Replication Controller(RC)
- better version of replication controller is called replica set (RS)
- deployment controller is latest version
# Deployment Controller

pod, ns, svc, secret and deployment controller also will have manifest file

# Creating deployment controller manifest file

kubectl create deployment mahesh-java-app --image=dockerashu/ashu-javaweb:version5 --port 8080 --dry-run=client -o yaml > deployment.yaml

kubectl create -f deployment.yaml

kubectl get deployment

kubectl get pods

kubectl describe pod <pod-name>

change image name
kubectl replace -f deployment.yaml  --force

change replicas
kubectl apply -f deployment.yaml

kubectl delete -f deployment.yaml


expose
- creating a service from running pod

kubectl expose pod mahesh-app --type NodePort --port 3000 --name maheshlb1  --dry-run=client -o yaml > lb1.yaml

kubectl get deploy
kubectl expose deployment mahesh-assignment-day8 --type NodePort --port 3000 --name maheshlb --dry-run=client -o yaml > maheshlb.yaml


Kubernetes K8S dashboard
https://13.233.64.164:32668/#/login
http://13.233.64.164:30208/ after creating service from running pod


# day 9
kubectl delete all --all


kubectl create deployment mahesh-react-app --image cloud4c.azurecr.io/reactjs:v1.1 --port 3000--dry-run=client -o yaml > day9_deployment.yaml

kubectl create -f day9_deployment.yaml

kubectl get deployments

# Manual scaling without manifest file
kubectl scale deployment <name> --replicas 4

# create yaml from running deployment
kubectl expose deployment mahesh-react-app --type NodePort --port 3000 --name maheshlb1 --dry-run=client -o yaml > lb1.yaml

kubectl create of lb1.yaml

kubectl get svc

http://3.109.153.126:30223/

# creating database pod
kubectl   run  ashu-db --image=mysql  --port 3306 --dry-run=client -o yaml  >mysqldbpod.yaml


kubectl delete secret --all


kubectl config get-contexts

kubectl config set-context --current --namespace=<ns_name>


# k8s Must know things

## Conceptual
- default is the namespace all pods are created for the first time
- kubectl get pods
- kubectl get namespaces
- kubernetes-dashboard is the namespace where dashboard is deployed
- kubectl get deployments -n kubernetes-dashboard
- kubectl get services -n kubernetes-dashboard

- Merging Manifest file
# Deployment Manifest
kubectl   create  deployment mahesh-app --image=cloud4c.azurecr.io/day10-web:uiv1 --port 80 --dry-run=client -o yaml
--- has to be used as seperator for manifest files
kubectl create service nodeport mahesh-lb0 --tcp 80:80 --dry-run=client -o yaml
---
kubectl create secret docker-registry mahesh-img-secret --docker-server cloud4c.azurecr.io --docker-username  cloud4c  --docker-password="92xPDI5p/PsV3ZQJH6aqp2lr/a5MfUes4umrOnyYWD+ACRCnabdo"  --dry-run=client -o yaml


update pod container spec
 spec:
      imagePullSecrets:
      - name: mahesh-img-secret

-> update app name in service  spec
 selector: # pod finder using pod label
    app: mahesh-app

# delete services, pods, deployments, secrets using merge manifest file
kubectl delete -f merge_manifest.yaml 

## Hands-on




# Day 11

- kubectl create ns <namespace-name>
- kubectl delete all,secret --all

kubectl create deployment  mahesh-db --image=mysql:8.0 --port 3306 --dry-run=client -o yaml > db_manifest.yaml


kubectl create secret generic maheshdb-root-cred --from-literal maheshkey1="Db9@123" --dry-run=client -o yaml > root_cred_secret.yaml
kubectl create -f root_cred_secret.yaml
kubectl get secret

```
apiVersion: apps/v1
kind: Deployment
metadata:
  creationTimestamp: null
  labels:
    app: mahesh-db
  name: mahesh-db
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mahesh-db
  strategy: {}
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: mahesh-db
    spec:
      containers:
      - image: mysql:8.0
        name: mysql
        ports:
        - containerPort: 3306
        resources: {}
        env:
        - name: MYSQL_ROOT_PASSWORD
          # value: "Db9@123"
          valueFrom: 
            secretKeyRef:
              name: maheshdb-root-cred
              key: maheshkey1
        envFrom:
        - secretRef:
            name: mahesh-user-cred
status: {}
```


kubectl create -f db_manifest.yaml

kubectl get deployment

kubectl get po (or) kubectl get pods



kubectl create secret generic mahesh-user-cred --from-literal MYSQL_USER=mahesh --from-literal MYSQL_PASSWORD="Hello@123" --dry-run=client -o yaml > user_cred_secred.yaml


kubectl create -f user_cred_secred.yaml


kubectl get secret

- update yaml to include second secret

kubectl apply -f db_manifest.yaml

# Confirming user access
kubectl exec -it mahesh-db-6c55b59f95-jc7t2 -- bash


mysql -u root -p 

show databases;

confirm the access

repeat for the user cred as well


to create LB we need to create a service of type NodePort

kubectl get deploy

kubectl expose deployment mahesh-db --type ClusterIP --port 3306 --name mahesh-db-lb --dry-run=client -o yaml > dbsvc.yaml

kubectl create -f dbsvc.yaml

kubectl get svc -o wide



deployment, secret, service(clusterIP)


# create deployment for postgres



# day12

kubectl config 
wordpress

kubectl create deployment mahesh-webapp --image=wordpress:6.2.1-apache --port 80 --dry-run=client -o yaml > web_app_deployment.yaml


# Core DNS

pod
pod.cluster.local
svc
svc.cluster.local



kubectl expose deployment mahesh-webapp --type NodePort --port 80 --name maheshlb1 --dry-run=client -o yaml > lb1.yaml

kubectl create -f lb1.yaml



minikube
pc/cloud
cloud services
	- aws(EKS), azure(AKS), gcp(GKE), OCI(OKE)


NodePort vs LoadBalancer
each deployment will have its own external LB in cloud


# day 13
 Config Map Resource

- can be used to save secret, config in deployment manifest


kubectl create configmap mahesh-db-name --from-literal maheshdbn="wordpress" --dry-run=client -o yaml > db-info.yaml
kubectl create -f db-info.yaml

kubectl get configmaps | kubectl get cm

kubectl describe configmap mahesh-db-name


adding key in manifest file 

        env:
        - name: MYSQL_DATABASE
          # value: "Db9@123"
          valueFrom: 
            configMapKeyRef:
              name: mahesh-db-name
              key: maheshdbn


kubectl apply -f db-info.yaml  -f root_cred_secret.yaml -f user_cred_secred.yaml  -f db_manifest.yaml



ConfigMap
secret
services
deployment


kubectl create configmap mahesh-web-config --from-literal WORDPRESS_DB_HOST="mahesh-db-lb" --from-literal WORDPRESS_DB_NAME="wordpress" --dry-run=client -o yaml > webcm.yaml
kubectl apply -f webcm.yaml 
kubectl apply -f web_app_deployment.yaml 
kubectl create -f lb1.yaml 
kubectl get svc
kubectl apply -f web_app_deployment.yaml 
kubectl create -f web_user_cred_secred.yaml 

kubctl describe pod <pod_name>


# Ingress Controller will solve having lb per app problem
- LB per ingress controller
- 

# third party ingress controllers
- trafeik
- kong
- nginx
- istio


kubectl get all -n ingress-nginx

http://43.204.216.210:31510/wp-admin/install.php?step=2

# Helm Files

k8s server
Registry Server
Artifact Server
Engineers


helm version

helm reps ls

// helm repo manager
artifacthub.io


helm add repo <repo_name> <url>

helm repo add mahesh-repo https://charts.bitnami.com/bitnami

helm repos ls


helm repo add new-repo https://charts.helm.sh/stable


helm search repo <repo_name>

helm install mahesh-web mahesh-repo/nginx

# List of deployed packages
helm list

kubectl get svc


helm uninstall nginx

kubectl get svc


Autoscale and storage
- HPA - horizontal pod scaling

TSDB(Time series database)

datadoghq.com


creating sample app for auto scaling
kubectl create deployment mahesh-webapp --image=dockerashu/reactapp:version1 --port 3000 --dry-run=client -o yaml > app.yaml


restrict resource utilization HPA


limits in manifest is trigger for HPA

kubectl create -f app.yaml

kubectl get deploy

kubectl get po


kubectl expose deployment mahesh-webapp  --type NodePort --port 3000 --dry-run=client -o yaml > lb.yaml

kubctl create -f lb.yaml

kubectl get svc

kubectl get ep // end point

# Creating hpa rule in manifest
kubectl autoscale deployment  mahesh-webapp --min 2 --max 20 --cpu-percent 80 --dry-run=client  -o yaml > autoscale.yaml


kubectl explain <>

# deploy hpa manifest
kubectl apply -f autoscale.yaml

kubectl get hpa


kubeflow .org



# Day 16

## Persistent Volume

- K8S Storage Engineering
CKA - certified kubernetes administrator
CKAD - certified application developer
CKS - Certified kubernetes security specialist
storage engineer


- another view of volume using cm, and secret
kubectl create deployment mahesh-secure-app --image=nginx --port 81 --dry-run=client -o yaml> deploy.yaml

kubectl create -f deploy.yaml

kubectl get deploy

## creating service
kubectl expose deployment mahesh-secure-app --type NodePort --port 81 --name s1 --dry-run=client -o yaml > s1.yaml

kubectl create -f s1.yaml

kubectl get svc


65.2.5.251:31036

kubectl create configmap mahesh-nginx-conf --from-file default.conf --dry-run=client -o yaml> cm1.yaml

kubectl get cm

kubectl create -f cm1.yaml

kubectl get cm

updated deployment manifest
```
 spec:
      volumes: 
      - name: mahesh-ng-vol
        configMap:
          name: mahesh-nginx-conf
      containers:
      - image: nginx
        name: nginx
        ports:
        - containerPort: 81
        resources: {}
        volumeMounts:
        - name: mahesh-ng-vol
          mountPat: /etc/nginx/conf.d/
```


## Project 2

### creating details about cred file
```
kubectl create secret generic mahesh-mongo-cred --from-env-file  mongo-cred.env --dry-run=client -o yaml > secret.yaml
```

kubectl create -f secret.yaml

kubectl get secrets

kubectl edit secret mahesh-mongo-cred

!wq 


### create deployment manifest

kubectl create deployment  mahesh-mongo --image=mongo --port 27017 --dry-run=client -o yaml > mongo_deploy.yaml

updating resources of maninfest file created
```
resources: 
          requests:
            memory: 400M
            cpu: 200m
          limits: 
            memory: 2G
            cpu: 700m
        envFrom:
        - secretRef:
            name: mahesh-mongo-cred
```


kubectl  create -f mongo_deploy.yaml

kubectl get deploy

kubectl get po

kubectl logs <pod_name>



mount hostpath volume
storage /node1/mongo/mahesh



kubectl replace -f mongo_deploy.yaml --force


# CSI
- Container Storage Inteface


```
apiVersion: v1
kind: PersistentVolume
metadata:
  name: mahesh-pv
spec:
  capacity:
    storage: 6Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteMany
  persistentVolumeReclaimPolicy: Recycle
  storageClassName: manual
  mountOptions:
    - hard
    - nfsvers=4.1
  nfs:
    path: /data/db-store/mahesh/
    server: 172.31.9.111
```


kubectl create -f mahesh-pv.yaml
kubectl get pv


pvc is all about sending request to pv and finding the best match.


```
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mahesh-cliam-new2
spec:
  accessModes:
    - ReadWriteMany
  volumeMode: Filesystem
  resources:
    requests:
      storage: 5Gi
  storageClassName: manual 
```

kubectl get pv
kubectl get pvc

kubectl create -f mahesh-pvc.yaml

mysql with pvc 
```
apiVersion: apps/v1
kind: Deployment
metadata:
  creationTimestamp: null
  labels:
    app: mahesh-dep
  name: mahesh-dep
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mahesh-dep
  strategy: {}
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: mahesh-dep
    spec:
      volumes:
      - name: mahesh-db-volx1
        persistentVolumeClaim:
          claimName: mahesh-cliam-new2
      containers:
      - image: mysql:8.0
        name: mysql
        ports:
        - containerPort: 3306
        resources: {}
        env:
        - name: MYSQL_ROOT_PASSWORD
          value: RootPass@123
        volumeMounts:
        - name: mahesh-db-volx1
          mountPath: /var/lib/mysql/
status: {}
```


pod manifest
volume - hostpath type
mysql  container - /var/lib/mysql - rw mode

another container alpine - mount in readonly mode

multi container pod

kubectl run maheshdb --image=mysql --port 3306 --dry-run=client -o yaml > task.yaml


# Daemonsets
deploys and runs in each node



```
apiVersion: apps/v1
kind: DaemonSet
metadata:
  creationTimestamp: null
  labels:
    app: mahesh-d1
  name: mahesh-d1
spec:
  selector:
    matchLabels:
      app: mahesh-d1
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: mahesh-d1
    spec:
      containers:
      - image: nginx
        name: nginx
        ports:
        - containerPort: 80
        resources: {}
status: {}

```

kubectl create -f ds.yaml

the above command will create nginx in 3 nodes


## Day 18

- CNI is third party
- Calico is used in kubernetes

Get daemonset
kubectl get ds -A

Monitoring is done for the following
- k8s object
- containers

## Portainer, Rancher(enterprise kubernetes management)
docker and kubernetes  management platform.

## Deploying portainers in k8s as deployment controller

## Creating svc
kubectl expose deployment mahesh-mon --type NodePort --port 9443 --name lb1 --dry-run=client -o yaml > svc.yaml

kubectl create -f  svc.yaml

kubectl get svc

# Security Section Of Kubernetes

## CAdvisor in Nodes

## Health check kubernetes pod application


## How to extend kubernetes api server
## Helm
## Monitoring of the applications
- https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/

## Time based scaling

## CRD (Custom Resource Defination)
- Extends kubernetes apis using CRD

## Helm Package | Chart
- Helm package also called charts

### Common Helm Commands
- helm version
- helm repo add <repo-name> <repo-url>
- adding of repo is optional
- helm ls
- helm uninstall <package-name>
- helm create <chart-name> -- creating custom helm charts
- helm install cloud4c-ui ./mahesh-ui-app -- deploy chart
- helm upgrade cloud4c-ui ./mahesh-ui-app -- after updating values.yaml
- helm install cc-app <helm-repo> --values values.yaml -- custom values.yaml
- helm search repo <repo-name> -- searching repo

- helm pull <repo-name>

- helm package <package-name> -- creating a package

### Assignment
- create helm chart
- deploy mysql:8.0 
- cm, secret
- service should be of ClusterIP Type


## Chart can not published directly
- 



#### importance of values.yaml


## SetUp
- Docker Desktop
- MiniKube

- Rancher Desktop
- Ashutoshh@linux.com

deploy
secret to pull from container registry
secret 


Registry URL: cloud4c.azurecr.io
Username: cloud4c
Password: 92xPDI5p/PsV3ZQJH6aqp2lr/a5MfUes4umrOnyYWD+ACRCnabdo

Images
- mongodb:  cloud4c.azurecr.io/mongo:dbv1 
- node-express: cloud4c.azurecr.io/mongo-express:v1


# Training
- https://training.linuxfoundation.org/training/kubernetes-fundamentals/


## Docker vs Kubernetes
- docker allows you package, distribute, and run applications in isolated containers.
- kubernetes is container orchestration platform, provides scaling,deployment, management of containerized applications across cluster of nodes.


# References
[1]. [Artifact hub - helm package manager](https://artifacthub.io/)
[2]. [infra monitoring tool - datadoghq](https://www.datadoghq.com/product/infrastructure-monitoring/)
[3]. [kubeflow - deploying ML Apps](https://www.kubeflow.org/)
[4]. [Volumes](https://kubernetes.io/docs/concepts/storage/volumes/#configmap)
[5]. [Persistent Volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)
