// code 1
// 1. para , text , append(reflow,repaint)->100 times
const t1 = performance.now();
for(let i=1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent = "This is para " + i;
    document.body.appendChild(para);
}
const t2=performance.now();
console.log("Time by code 1: " + (t2-t1));

// code 2
// 1. div, para, text , append in div(nothing to show on UI), document append div(reflow, repaint)->1 time
// performance better 
const t22=performance.now();
let mydiv = document.createElement('div');
for(let i=1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent = "This is para " + i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
const t23=performance.now();
console.log("Time by code 2: " + (t23-t22));

// reflow - process of calculating a position/dimension of element to render on UI (computational intensive task )
// repaint - process of displaying content/element pixel by pixel - faster than reflow


// Good practice - Document fragment  - this will take 1 reflow,1repaint
// light weight document object - append of element(no reflow,no repaint needed)
const t42 = performance.now();
let fragment = document.createDocumentFragment();
for(let i=1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent = "This is para: "+ i;
    fragment.appendChild(para);  //no reflow and no repaint for this
}
document.body.appendChild(fragment); //take 1 reflow and 1 repaint
const tt=performance.now();
console.log("Time by optimal code: " + (t23-t42));
