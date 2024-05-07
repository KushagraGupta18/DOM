

// let inpEl=document.querySelector('input');

// function fun(event){//anyname will work generally e/event is written
//     // console.log('input elemnt chl gya bhai logo');
//     // console.log(event)//gives an object
//     console.log(event.target.value);
// }

// inpEl.addEventListener('input',fun);




//que--->i want to show my text in h2 tag

let inpEl=document.querySelector('input');
let h2=document.querySelector('h2');

function fun(e){
    h2.innerText=e.target.value;
}

inpEl.addEventListener('input',fun);



