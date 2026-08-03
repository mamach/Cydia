# gRPC
- RPC(Remote Procedural Call) is called remote because it enables communications between remote services when services are deployed to different servers under microservice architecture.
- From the user's point of view, it acts like a local function call. 

e.g., 
## Step 1:
- A REST call is made from the client. The request body is usually in JSON format.

## Step 2,3,4:
- The order service (gRPC client) receives the REST call, transforms it, and makes and RPC call to payment service.
- gRPC encodes the client stub into a binary format and sends it to the low-level transport layer.

# Step 5:
- gRPC sends the packets over the network via http2.
- Because of binary encoding and network optimizations, gRPC is said to be 5X faster than JSON.
- 

# Step 6,7,8:
- The payment service(gRPC server) receives the packets from the networ, decodes them, and invokes the server applications.

# Steps 9,10,11:
- The result is returned from the server application, and gets encoded and sent to the transport layer.

# Steps 12,13,14:
- The order service(gRPC client) receives the packets, decodes them and sends the result to the client application.


## Local Call 

## Remote Procedural Call 



## gRPC Overall Flow
