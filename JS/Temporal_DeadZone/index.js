// global scope - access anywhere in whole file
var age = 15;

console.log(age)
{
    console.log(age)
}
if(true){
console.log(age)
    
}
for(let i=0;i<2;i++){
console.log(age)

}
function sayHello(){
console.log("Hi" + age)

}
sayHello()


// function scoping
// console.log(namee)   out of scope
function sayH(){
    var namee = 'earth'
    console.log("Hello duniya", namee)
}
sayH();
// console.log(namee)   out of scope


// block scope
// var is not a block scope
// let,const is block scope
console.log(a)
{
    var a = 3;
    let b = 2;
    const c = 2;

}
console.log(a)
// console.log(b)
// console.log(c)


// temporal dead zone  - let, const if acess prior decleration

// temporal dead zone begin
//  console.log(h) - error 
// console.log("priya")
// console.log('ugug')
// temporal dead zone end
//  cant access value of h till now 

let h = 100;
console.log(h)
