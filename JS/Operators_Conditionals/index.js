// arithmetic operator
let a=10;
let b=5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// unary operators
var c=5;
console.log(++c);
console.log(c++);
console.log(c);
console.log(c--);
console.log(c);
console.log(--c);
console.log(c);

// assigment operators
let d=8;
d+=10;
console.log(d);
d-=5;
console.log(d);
d*=2;
console.log(d);
d/=2;
console.log(d);
d%=3;
console.log(d);

// comparison operators
var e=5;
var f=7;
console.log(e>f);
console.log(e<f);
console.log(e>=f);
console.log(e<=f);
// strict equality ===  (value and data type both same)
var g=7;
var h=7;
var i="7";

console.log(g===h);
console.log(g===i);
// loose equality == (value comparison only)
console.log(g===h);
console.log(5 == '5');

// ternary operator
let age=5;
let status = (age>18 ? console.log("I can vote") : console.log("I can't vote"));

// logical operator
let ans = true && false && true;
console.log(ans);
let ans1 = false || false || false;
console.log(ans1);
let ans2=false;
console.log(!ans2);
//working with non-boolean ( falsy and truthy)
// falsy - undefined, null, 0 , false, NaN , ' '
// truthy - anything which is not falsy
console.log('...');
console.log(false && 'Priya');
console.log(false || 'Priya');
console.log(false || 3);
console.log(true || "Hi morning");

// short circuting - check till first true
console.log(false || true || false || true || false);

// bitwise operator
console.log("........");
console.log(2&5);
console.log(2|5);
// bit level pe flip ( 1's complement)
console.log(~0);
console.log(5^2);
console.log(2^2);
// left shift - multiply by 2
console.log(5<<1);
// multiply by 2 times
console.log(5<<2);
// (num>>a) divide by 2^a
console.log(10>>2);

// conditionals
console.log("..........");
let agee=45;
// if-else
if(agee>18){
    console.log("Vote");
}
else{
    console.log("Can't");
}
// if-else-if
let p=5;
if(p==6){
    console.log("Its 6");
}
else if(p==5){
    console.log("Its 5");
}
else{
    console.log("Can't say")
}

//
let p1=5;
if(p1==6){
    console.log("Its 6");
}
else if(p1==5){
    if (age>18){
        console.log("Its 5 and less than 18");
    }
    else{
        console.log("Its 5 and greater than 18");
    }
}
else{
    console.log("Can't say")
}

// switch case
let num=13;
switch(num){
    case 1:
        console.log("A");
        break;
    case 2:
        console.log("B");
        break;
    case 3:
        console.log("C");
        break;
    case 4:
        console.log("D");
        break;
    default:
        console.log("E");            

}