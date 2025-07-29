console.log(Math.PI)
console.log(Math.max(325,23,2346,573,23462,246254,234))
console.log(Math.min(325,23,2346,573,23462,246254,234))
console.log(Math.round(1.6))
console.log(Math.round(1.4))
console.log(Math.floor(1.6))
console.log(Math.ceil(1.6))
console.log(Math.abs(1.6))
console.log(Math.abs(-1.6))
console.log(Math.random())
console.log(Math.sqrt(2))
console.log(Math.pow(2,3))


// Date Object
console.log("Date")
let curr = new Date()
let date = new Date('June 20 1998 07:15')
console.log(curr)
console.log(date)
// month 0 based indexing
let newdate = new Date(1998,5,20,7);
console.log(newdate)
// sunday - 0
console.log(newdate.getDay())
console.log(newdate.getFullYear())
console.log(newdate.setFullYear(2001))
console.log(newdate)