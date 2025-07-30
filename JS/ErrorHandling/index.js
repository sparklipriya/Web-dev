try{
    console.log("Start")
    console.log(x);
    console.log("End")
}
catch(e){
    // retry logic
    // fallback mechanism
    // logging
    // custom error
    console.log("You have not provided the value")
    console.log("Your error is here", e)
}
finally{
    console.log("Finally block runs always")
}

// show/propograte/return  - custom error create
try{
    console.log(x);
}
catch(e){
    throw new Error("Reference error aa rha h");
}

let errorCode = 100;
if(errorCode == 100){
    throw new Error("Invalid JSON");
}