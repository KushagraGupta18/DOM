



//1. inline way
// function doSomething(){
//     console.log("hello inline event")
// }



//2nd way
// let btn=document.querySelector('button');


//onClick event-->
// btn.onclick=function(){
//     console.log("hello duniya dusra tarika");
// }


//onmouseenter event--->
// btn.onmouseenter=function(){
//     btn.style.color='red';
// }

//onmouseleave event--->
// btn.onmouseleave=function(){
//     btn.style.color='black';
// }





//this is to show that only 1 event is possible at a time
// let btn=document.querySelector('button');
// function one(){
//     console.log('one');
// }

// function two(){
//     console.log('two');
// }

// btn.onclick=one;
// btn.onClick=two;
//by this way i can work only in one function .



//For this problem our solution is eventListener
//by eventListener , it allows you to run multiple events on the same element
// let btn=document.querySelector('button');

// function one(){
//     console.log('one');
// }

// function two(){
//     console.log('two');
// }

// btn.addEventListener( 'click' , one);//accepts two arguement
// btn.addEventListener( 'click' , two);



//question:by clicking on button our background color change to palm
// let btn=document.querySelector('button');
// let body=document.querySelector('body');
// function change(){
//     body.style.backgroundColor='cyan';
// }
// btn.addEventListener('click',change);


//onClick--->ek baar click kiya to chala
//ondblClick--->2 baar click kiya to chla

let btn=document.querySelector('button');
function merafun(){
    console.log("2 baar click hai");
}

btn.addEventListener('dblclick',merafun);

