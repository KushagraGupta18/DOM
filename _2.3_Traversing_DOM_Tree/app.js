


// let para1=document.querySelector('#para1');

//1. parentElement
// console.log(para1.parentElement()) //wrong
// console.log(para1.parentElement)//parentElement is a property thats why we dont want to run this

// console.log(para1.parentElement.parentElement.parentElement.parentElement.parentElement);


//2. childElement
// let arti1=document.querySelector('#arti1');
// console.log(arti1.children);//it gives collection of all child.
// let coll=arti1.children;
// for(let item of coll){
//     item.style.color='green'
//     item.style.fontSize='24px'    
// }



//3. nextElementSibiling
// let div3=document.querySelector('#div3');
// console.log(div3.nextElementSibling)


//4. previousElementSibiling
let div=document.querySelector('#div3');
console.log(div.previousElementSibling);


