// Function Structure :
// function functionName(parameter){
// }

// function Call :
// functionName()


function sayMyName(){
    console.log("My name is Priya")
}
sayMyName()

function printCounting(){
    for(let i=1;i<10;i++){
        console.log(i);
    }
}
printCounting()

function printNumber(num){
    console.log("Printing number:", num);
}
// num - parameter 
// 6 - argument
printNumber(6)

function getAvg(num1,num2){
    let avg = (num1+num2)/2;
    console.log("Average:"+avg)
}
getAvg(5,3)

// return functions
function getSum(a,b,c){
    let sum=a+b+c;
    return sum;
}
console.log("Sum:" + getSum(2,3,4))

function getMyName(firstname,lastname){
    let name = firstname + " " +lastname
    return name
    // unreachable statements below return 
}
console.log("Name: " + getMyName('priya','yadav'))


// function expression
const solve = function(a,b){
    return a*b
}
console.log("Multiply:"+ solve(3,3))

var squ = function(num){
    return num*num
}
console.log("Square: "+ squ(6))

// arrow function
function getExp(x,y){
    let ans = x**y
    return ans
}
var getExpp = function(x,y){
    return x**y
}
var getExppp = (x,y) =>{
    return x**y
}
console.log(getExp(2,10))
console.log(getExpp(2,10))
console.log(getExppp(2,10))



