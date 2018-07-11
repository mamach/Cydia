# es7

## Async Await
Async function declarations return an `AsyncFunction` object. These are similar to `Generators` in sense of exectution.
Promise Example
```javascript
function handler (req, res){
    return request('https://user-handler-service')
        .catch((err)=>{
            logger.error('Http error', err);
            error.logged =true;
            throw err;
        })
        .then((response)=> Mongo.findOne({user:response.body.user}))
        .catch((err) => {
            !error.logged && logger.error('Mongo error', err)
            error.logged = true;
            throw err;
        })
        .then((document) => executeLogic(req, res, document))
        .catch((err) => {
            !error.logged && console.error(err)
            res.status(500).send();
        })
}
```
 using async await
 ```javascript
 async function handler(req, res){
     let response;
     
 }
 ```

## References
[1]: [Mastering Async Await in Node.js](https://blog.risingstack.com/mastering-async-await-in-nodejs/)