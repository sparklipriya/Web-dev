// synchronous code - piece of code which execute at same piece of time (handled normally)
// asynchronous code - piece of code which doesn't execute at same piece of time ( no gurantee of execution time)
// blocking 
// event loop -  used to handle asynchronous code
//               1. callStack
//               2. browser - handover here to avoid blocking
//               3. callBackQueue/taskQueue - after browser it go here in callBackQueue(event loop - to make sure that if callStack is empty then execute the front of callBackQueue)

