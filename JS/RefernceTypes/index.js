let obj = {
    name : 'Priya',
    "full name" : 'Priya Yadav',
    age : 23,
    weight : 47,
    height : "5ft 1inch",
    greet : function() {
        console.log("Hello everyone")
    }

};
console.log(obj)
obj.greet();
console.log(typeof(obj))

// shallow copy 
let obj2 = obj
console.log(obj2)


// array
let arr = [1,2,3,4,5]
console.log(arr)
// array constructor
let brr = new Array('priya',1,true)
console.log(brr)
// array element access
console.log(brr[1])
console.log(typeof(brr))
console.log(typeof(arr))


// array built-in methods
brr.push('yadav')
console.log(brr)
brr.pop()
console.log(brr)
brr.shift()
console.log(brr)
brr.unshift('priya yadav')
console.log(brr)
brr.push(20,4,234,78)
console.log(brr)
console.log(brr.slice(2,4))
console.log(brr)
brr.splice(1,2,'random')
console.log(brr)
brr.splice(1,0,'random2')
console.log(brr)

let arrr = [10,20,30]
let ans = arrr.map((num) => {
    return num*num;
})
console.log(ans)

arrr.map((num) => {
    console.log(num+1)
})

arrr.map((num,index)=>{
    console.log(num,index)
})


let ar = [1,2,3453,34563,123,2112,35342,32543]
let even = ar.filter((num)=>{
    if(num%2 == 0){
        return true;
    }
    else{
        return false;
    }
})
console.log(even)

let odd = ar.filter((num)=>{
    return (num%2 != 0)
})
console.log(odd)

let as = [1,2,'priya','yadav',null];
let av = as.filter((val)=>{
    if(typeof(val) == 'string'){
        return true;
    }
    else{
        return false;
    }
})
console.log(av)

// acc initialized to 0
// curr = first element 10 
// acc = 0+10 = 10
// curr = 20... so on 
// return acc value
let a = [10,20,30,40]
let b = a.reduce((acc,curr)=>{
    return acc+curr
}, 0)
console.log(b)

let bb=[9,1,7,4,2,8]
bb.sort()
console.log(bb)
console.log(bb.indexOf(9))


// Arrays with function
let aw = [10,20,30,40]
function getSum(arr){
    let sum=0;
    let len = arr.length;
    for(let i=0;i<len;i++){
        sum+=aw[i];
    }
    return sum;
}
let total = getSum(aw)
console.log(total)

let aq = [10,20,30,40,50]
function getS(aq){
    let s=0;
    aq.forEach(val => {
        s+=val;
    });
    return s;
}
console.log(getS(aq))