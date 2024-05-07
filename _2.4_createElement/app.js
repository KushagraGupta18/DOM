
let paapilaal=document.createElement('div');
let foolandevi=document.createElement('div');


let arti=document.getElementById('arti');


paapilaal.innerText='paapi chulo';
foolandevi.innerText='foolan devi';

// arti.appendChild(paapilaal);
// arti.appendChild(paapilaal , foolandevi);//wrong way
//appendChild() ---> only accepts one element.


//for multiple element accepts we use append() -->bydefault this add element is last 
// arti.append(paapilaal, foolandevi);

//if we want to add elements in starting
// arti.prepend(paapilaal,foolandevi);




// arti.appendChild("mai ziddi hu");//failed(appendChild takes only html element)

// arti.append(paapilaal,foolandevi, 'mai ziddi hu');//it accepts   (append and prepend takes both html element + text)

// arti.prepend(paapilaal,foolandevi, 'mai ziddi hu');//it accepts
