// var age = 15;
// if(true){
//     console.log(age);
// }


//var is function scoped , global scoped only - debugging issue , redeclare possible
// not block scoped
// not used too much 
function solve(){
    var a =9;
}
// console.log(a);

solve();


// let - block scoped
// redeclare not possible. manipulate possible

{let b=10;
console.log(b);}
// {let b=10;}
// console.log(b);

// dynamic typed language
let c=7;
c="Priya";
console.log(c);

// constant
// redclare,redefine - not possible
const aj = 25;
// aj=5;
console.log(25);

// datatype

let num = 20.345;
console.log(num);
let name = "Priyaaa";
console.log(name);
let val = true;
console.log(val);
console.log(typeof(val));
let gu;
console.log(gu);
let h=null;
console.log(h);
let bigInt = 965234986958024502623055555555555555555237894023658907877777777777777777729343333333333333333333333333333333333333333333;
console.log(bigInt);
console.log(typeof(bigInt));