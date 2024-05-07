

let arti=document.querySelector('article');


//1. add()
arti.classList.add('sam');
// arti.classList.add('sam sam1');//wrong way

arti.classList.add('sam','sam1');
//Now in case of classList I can add classes alone . this is the good way to add class
arti.classList.add('changu-mangu');



//2. remove()

arti.classList.remove('sam','changu-mangu');


//3.toggle()
// arti.classList.toggle('toggle')//true

// arti.classList.toggle('toggle')//false


//4. contains()  //it returns a boolean value either it is present or not
// console.log(arti.classList.contains('juggu'));//false;
// console.log(arti.classList.contains('sam1'));//true


