// monitorEvents(document);
// unmonitorEvents(document);

// function changeText(){
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Priya"
// }
// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click',changeText);
// // fpara.removeEventListener('click',changeText);


// event object
// function changeText(event){
//     console.log(event);
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Priya"
// }
// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click',changeText);

// default action remove
// let anchorElement = document.getElementById('fanchor')
// anchorElement.addEventListener('click',function(event){
//     event.preventDefault();
//     anchorElement.textContent = "Click done by"
// })


// avoiding too many listeners     
// target property
// function alertPara(event){
//         alert('You have clicked on para: '+event.target.textContent);
//     }
// let paras = document.querySelectorAll('p');
// for(let i=0;i<paras.length;i++){
//     let para = paras[i];
//     para.addEventListener('click',alertPara)
// }
// 2 way : optimal 
// function alertPara(event){
//         alert('You have clicked on para: '+event.target.textContent);
//     }
// let mydiv = document.getElementById('wrapper');
// document.addEventListener('click',alertPara);
// nodeName property ( conditional behaviour)
function alertPara(event){
    if(event.target.nodeName === 'SPAN'){
        alert('You have clicked on para: '+event.target.textContent);
    }
        
    }
let mydiv = document.getElementById('wrapper');
document.addEventListener('click',alertPara);

