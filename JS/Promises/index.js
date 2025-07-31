// promise - object which is used in a effective way to handle for a returning value/output of asynchronus operation
// state of promise -  1. pending 
//                     2. full Fill / resolve
//                     3. rejected / failure
// promise help the asynchronous to act like synchrononus and return the promise instantly that it will return a value 
// syntax:
// new Promise((resolve,reject) => {
// })

// let firstPromise = new Promise( (resolve,reject) => {
//     // console.log("Priya");
//     // // resolve(1001);
//     // reject(new Error("Internal Server Error"));

//     function sayMyName(){
//         console.log("My name is Priya");
//     }
//     setTimeout(sayMyName,15000);
//     resolve(1);
// });

// promise ke fulfilled hone ke bd - i want to do a task - then()
// let promise1 = new Promise((resolve,reject)=>{
//     let success = true;
//     if(success){
//         resolve("Promise fulfilled");
//     }
//     else{
//         reject("Promise rejected");
//     }
// })
// promise1.then((message)=>{
//     console.log("Its is message : "+ message);
// }).catch((error)=>{
//     console.log("error: " + error);
// })


// promise ke fail/reject hone ke bd - i want to do a task - catch()

// promise-chaining
// promise1.then((message)=>{
//     console.log("first message:"+message);
//     return "Promise full second message";
// }).then((message)=>{
//     console.log("Second message:"+message);
//     return "Promise full third message"
// }).then((message)=>{
//     console.log("Third message:"+message);
//     return " promise full fourth message";
// }).catch((error)=>{
//     console.log("Error: "+ error);
// }).finally((message)=>{
//     console.log("I am finally")
// })



//Promise.all()
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First");
})
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Second");
})
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"Third");
    // setTimeout(reject,3000,"Third");
})
// a new promise is created which will resolve when all 3 promises will be executed
// if any fails this promise will also fail
Promise.all([promise1,promise2,promise3])
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.log(error)
})


