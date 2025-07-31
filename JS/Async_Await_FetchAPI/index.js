// async-await : asynchronous code can be given a synchronous behavious(use to efficiently handle promise statement)
             //  it will always return a promise 
// await - want to wait till the asynchronous should complete and then only execute next code
// better than promise - clean code


// async
// async function getData(){
//     setTimeout(function(){
//         console.log("I am inside asynch timeout block")
//     },3000);
// }
// let output = getData();




// await - can be applied if function is async

// fetch API 
// scenario -
// 1. prepare url/api endpoint => sync
// 2. fetch data =>network call => async  (Await needed)
// 3. process data => sync
// async function getData() {
//     // 1. get request - async
//     let response =await fetch('https://api.placeholderjson.dev/shipments/7EBWXB5');
//     // parse the JSON code
//     let data = await response.json();  //async
//     console.log(response);
// }
// getData()

// fetch API - post
const myHeader = new Headers();
myHeader.append("Content-Type","application/json");
const url = "https://dummyjson.com/posts/add";
const options = {
    method: "POST",
    body: JSON.stringify({title: "Hello World", body: "This is a post", userId: 1}),
    headers: myHeader,
}

// apiKey
async function getData() {
    const response = await fetch("https://dummyjson.com/posts");
    let data = await response.json();
    console.log("Get data response:", data);
}
async function postData(){
    const response = await fetch(url,options);
    let data = await response.json();
    console.log("Post data resoponse:", data);
}

async function processData() {
    await postData();
    await getData();
}
processData();
