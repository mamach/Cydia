# Cache Synchronization

## Intro

## Cache-Aside
- Manually manage both database and cache information.
- Application logic inspects the cache before hitting database.
- Update cache after database modification.


## Read-Through
- Instead of managing both the database and cache, we can simply delegate the database sync to cache provider. 
- All the interaction is done through the cache abstraction layer.
- Upon fetching a cache entry, the cache verifies the cached element availability and loads the resource on our behalf.

# Write-Through
- Analogus to the read-through data fetching strategy. 
- The cache can update the underlying database everytime a cache entry is changed.
- 

# Write-behind Caching
- To speed up the write operations, we can simply enqueue the cache changes and periodically flush them to the database.
- To guarantee strong consistency, the buffer must be flushed prior to executing any query or read operation.
- The advantage of the write-behind caching strategy is that we can batch database DML statements, therefore improving txn time.
 


