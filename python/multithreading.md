# Intro
- Python handles concurrency through two primary approaches:
    - Multi threading and
    - Asynchronous Programming (asyncio)
- which one to use depends on workload is IO bound or CPU bound.
-  

# Global Interpreter Lock (GIL)
- Standard Python has GIL. 
- GIL ensures that only one native thread executes python bytecode at a time, even on multi core processors. 
    - Because of this Multi threading cannot speedup cpu-bound tasks in python
    - multithreading and Asyncio are effective io bound tasks because threads or event loops the lock while waiting for external responses.

---
# MultiThreading in python
- Multi threading uses the threading module to run multiple threads.
- 
```
import threading
import time

def download_file(file_name):
    time.sleep(2)

t1 = threading.Thread(target=download_file, args=("file1.zip",))
t2 = threading.Thread(target-download_file, args=("file2.zip", ))

t1.start()
t2.start()

t1.join()
```

---
# Asychronous Programming
- Asynchronous programming uses a single threaded event loop and cooperative multitasking.
- Instead of the OS interrupting threads arbitrarily, functions explicitly yield control back to the event loop using await when they encoutner a wiating period.
- A single thread handles thousands of connections concurrently by switching tasks only when an await statement is reached.
- best used for high concurrency  IO bound applications like chat servers, real time web scrappers, or asychronous frameworks.

```
import asycio

async def download_file(file_name):
    await asyncio.sleep(2)

async def main()
    await asyncio.gather(
        download_file("file1.zip")
        download_file("file2.zip")
    )

asyncio.run(main())

```

# Deep Dive

# Daemon Thread and Synchronization(Lock)

# Synchronization(Rlock, Semaphore), 

# Inter Thread Communication

## Condition

## Queue 






























