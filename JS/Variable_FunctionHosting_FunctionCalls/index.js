
//    <!-- function hoisting - process - variable/function decleration shift to top of their scope-->
// definition of function is also shifted to top
sayMyName('priya yadav')
function sayMyName(firstName){
    console.log(firstName)
}
// function hosting is not possible in function expression syntax - reference error
// sayHello()
// let sayHello = function(){
//     console.log("Hello One")
// }




// variable hosting
// variable declerartion is shifted but not its definition is shifted
console.log(age)
var age = 25
console.log(age)

// use of let, cons keyword - variable hosting is not possible in let, const
// console.log(a)
// console.log(b)
// let b = 6
// const a = 4
// console.log(a)
// console.log(b)


// class hosting - it is also not possible
// const object2 = new Human()
// class Human {

// }
// const object1 = new Human()


// Function Call Stack
// Stack - Data Structure - container to store data in LIFO order

// function - first call citizen
// 1. assign to variable
// 2. as an argument
// 3. return function
// 4. use function in data structure 
// 5. as a property


let greet = function(){
    console.log("Greetings for the day")
}
greet()


function huu(hu,fullName){
    console.log("hellow", fullName)
    hu();
}
function hu(){
    console.log("Hu")
}
huu(hu,'priya yadav')


function solve(num){
    return function(num){
        return num*num
    }
}
let ans = solve(5)
let fans = ans(10)
console.log(ans)
console.log(fans)


const ar = [
    function(a,b) {
        return a+b
    },
    function(a,b) {
        return a-b
    },
    function(a,b) {
        return a*b
    },
    function(a,b) {
        return a/b
    }

] ;
let first = ar[2]
let an = first(4,2)
console.log(an)


let obj = {
    age:25,
    wight : 26,
    height : 180,
    hello: ()=>{
        console.log("hello")
    }
}
console.log(obj.age)
obj.hello()


console.log(g)
var g = function() {
    console.log('Namaste')
}



