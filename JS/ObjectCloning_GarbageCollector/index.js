// object - dynamic nature - because its property can change at the runtime
let obj = {
    age:12,
    wt:45,
    ht:231
};
console.log(obj)
obj.color = 'white'
console.log(obj)

// object cloning - 2 clone, 2 reference
let src = {
    age:12,
    wt:45,
    ht:231
};
// 1. spread operator
let des = {...src}
src.age = 100
console.log("..")
console.log(src)
console.log(des)
// 2. assign method
let dess = Object.assign({},src)
src.age = 1
console.log('...')
console.log(src)
console.log(dess)
let src2 = {
    val:101,
    name:'priya yadav'
}
let des2 = Object.assign({},src2)
console.log('...')
console.log(src2)
// 3. iteration method
console.log('...')
let des3 = {}
for(let key in src){
    let newKey = key;
    let newVal = src[key];
    des3[newKey] = newVal
}
console.log(des3)


// Garbage Collector - memory allocated but not used can be free by using garbage collector - memory leak avoid ( always run in background, no control of us )
