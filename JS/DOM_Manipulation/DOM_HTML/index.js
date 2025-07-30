// document.getElementById("fpara");
// document.getElementById("fheading");
// document.getElementsByClassName("textm");
// document.getElementsByTagName('p');
// document.querySelector('#fpara');
// document.querySelector('.textm');  - only 1 element the first class only
// document.querySelector('p'); - only 1 paragraph the first only only
// document.querySelectorAll('.textm');  - will give all
// document.querySelectorAll('p'); - will give all
// $0

// let para = $0
// para


// Update - 1. innerHTML ( get/set)

// $0
// let cont = $0
// cont
// cont.innerHTML  //get
// cont.innerHTML = '<p>Hello</p>'; //set
// cont


//          2. outerHTML


//          3. text-Content - will show the text and all where you pressed enter
//          4.innerTExt - will show the text content(same o/p as you render text on UI)

// add element - createElement()
//               .appendChild()

// let head = document.createElement('h1');
// head
// head.textContent = "My name is Priya Yadav"
// head
// let bodyTag = document.querySelector('body');
// bodyTag
// bodyTag.appendChild(head) - child always add the end only
// bodyTag

// to add the element at you choice  - insertAdjacentElement()

// 1.position ( beforebegin, afterbegin, beforeend, afterend)
// 2.HTML content
// let mydiv = document.querySelector('#mydiv');
// mydiv
// let newElement = document.createElement('span');
// newElement
// newElement.textContent = "This is me priya yadav";
// newElement
// mydiv.insertAdjacentElement('beforebegin',newElement);
// mydiv.insertAdjacentElement('afterbegin',newElement);
// mydiv.insertAdjacentElement('beforeend',newElement);
// mydiv.insertAdjacentElement('afterend',newElement);


// removal - removeChild()    opposite of append 
// let parent = document.querySelector('#mydiv');
// parent
// let child = document.querySelector('#fpara');
// child
// parent.removeChild(child);