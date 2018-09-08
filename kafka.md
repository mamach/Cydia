# Intro

* urgent --- real time ~sub milli seconds
* not-so-urgent near ---- real time ~seconds
* flexible --- batch ~ minutes, hours, days, weeks


# Objective
* Receive data from a variety of sources
* perform specific computation and analysis on data on the fly.
* perform an action as a result.

## Architecture
* Data Ingestion.
* Data Processing and action.

## Challenges
* How to handle large number of producers and consumers ?
* Need for scale based on changes in rates of events coming in ?
* How to ensure data is durable and never to lose important messages ?

## Data Ingestion: Producers and Consumers
*

# Kafka
* Open-source streaming system.
* Used to build real-time streaming data pipelines relibly get data between many systems.
* It allows 
	* Publishing and Subscribing to streams of records.
	* Storing streams of records in a fault tolerant durable way.
* It provides a unified, high-throughput, low-latency, horizontally scalable platform.

## Kafka Brokers
* Kafka  is run as a cluster on one or more servers that can span multiple datacenters. Those servers are usually called brokers.

## Zookeeper Servers
* Kafka uses Zookeeper to store metadata about brokers, topics and partitions.

## Kafka Topics
* The core abstraction Kafka provides for a stream of records -- is the topic.
* Topic is a distributed, immutable, append-only, partitioned commit log where producers can write data, and consumers can read data from.
* Each record in a topic consists of a key, a value, and a timestamp. A topic can have more than or equal to zero consumers that that subscribe to the 
data written to it.
* The Kafka cluster durably persists all published records using a configurable retentions period.

## Partitions
* Each partition in a topic is an ordered, immutable sequence of records that is continually appended to a structured commit log.
* The records in the partition each have an offset  -- number that uniquly identifies each record within the partition.
* Each partion has one broker which act as the leader that handles all read and write requests for the partition, and zero or more brokers which act as 
followers that passively replicate the leader.  Each broker acts as a leader for some of its partitions and follwer for others so load is balanced 
within the cluster.

## Producers and Consumers
* Producers publish data to the topics of their choice.
* Consumers can subscribe to topics and receive message. Consumers can be a independed consumer or part of a consumer group.
* Kafka helps in ingesting big amounts of data, also works really well for small data in the environment.

# Stream Processing Systems
## Storm
* Message is processed as soon as it arrives.
* Low latency.
* Bigger community.

## Kafka Streams
* fast
* light weight.

## FLink
*less community support.

## Spark
* based on micro-batch.
* can switch between micro-batching and continuous streaming.

# Apache Spark
* can do large scale distributed computations.
* Open source
* similar to map reduce.
* Directed acyclic graph executioln model.
* operates primarly in memory.
* supports both micro batch and continuous processing execution modes.
* Can be used with variety of schedulers like
	* Hadoop Yarn
	* Apach Mesos
	* Kubernetes
* We can use spark SQL and do 
	* batch processing
	* stream processing with spark streaming and Structured streaming.
	* Machine learning with Mllib
	* Graph computations with GraphX
## How Spark works?
*

# Kafka + Spark
* Kafka is great for durable and scalable ingestion of streams of events coming from many producers to many consumers.
* Spark is great for processing large amounts of data including real time and near real time streams of events.

# How to create Kafka and Spark clusters?
* 

# Example
*

# References
[1]. [Distributed Data Streaming](https://lenadroid.github.io/posts/distributed-data-streaming-action.html)













