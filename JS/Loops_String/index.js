// for logic
for(let i=0;i<=9;i++){
    console.log("Priya", i);
}
for(let i=1;i<=5;i++){
    console.log("Counting", i);
}
for(let i=5;i>=1;i--){
    console.log(i);
}
console.log("Break");
for(let i=1;i<=6;i++){
    if(i==4){
        break;
    }
    else{
        console.log(i);
    }
}
console.log("Continue");
for(let i=1;i<=6;i++){
    if(i==4){
        continue;
    }
    else{
        console.log(i);
    }
}

// while loop
console.log("while loop");
let i=0;
while(i<9){
    console.log(i);
    i++;
}
console.log("while loop-continue");
let i1=0;
while(i1<9){
    if(i1==3){
        i1++;
        continue;
    }
    else {
        console.log(i1)
    };
    i1++;
}
console.log("while loop-break");
let i2=0;
while(i2<9){
    if(i2==3){
        
        break;
        
    }
    else {console.log(i2)};
    i2++;
}

// do-while loop
// execute atleast once without any condition check
console.log("do-while");
let j=0;
do{
    console.log(j+1);
    j++;
}
while(j<10);



// STRINGS - sequence of characters
console.log("Strings")
 let name = 'Priya'
 let lastname = "Yadav"
 console.log(typeof(name))
 console.log(name,lastname);
//  template string - print as it is
let s = `hello
huihfero this Is
my NaME`
 console.log(s);
 let n = new String("hello duniya")
 console.log(n)
let op1 = "English";
let op2 = "Hindi";

let ans = op1 + ' ' + op2;
console.log(ans);

let f = `${op1} ${op2}`
console.log(f);

console.log(op1.length);

console.log(op1.toUpperCase())

console.log(op2.toLowerCase())

let str = "HelloPerson"
console.log(str.substring(5));
// last index is not included
console.log(str.substring(2,6));
let sh = "Hello let it enjoy"
console.log(str.split('e'));
console.log(sh.split(' '));

// use of \ - mere bd jo bhi next character ushko special mt conside kro normal character ki tarah lo
let shy = "Hello \"let\" it enjoy"
console.log(shy);
let shyu = "Hello \\let\\ it enjoy"
console.log(shyu);
let word = shyu.split('\\');
console.log(word);
console.log(word.join('-'));



