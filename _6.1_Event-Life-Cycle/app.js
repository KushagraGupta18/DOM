

let dadu=document.querySelector('#dadu');
let papa=document.querySelector('#papa');
let beta=document.querySelector('#beta');


//Event Bubbling(when our 3rd parameter is false ) 3 rd parameter is useCapture which is bydefault false---> at this case Event bubbling happens
// dadu.addEventListener('click',function(){
//     console.log("dadu");
// })
// papa.addEventListener('click',function(){
//     console.log("papa");
// })
// beta.addEventListener('click',function(){
//     console.log("beta");
// })//on clicking beta i will get beta papa dadu because of "EVENT PROPAGATION"
//if any element is triggered first it encounters the html element then body element then section1 then section2 then section3 .It is called Event Capturing



//Event Capturing(when our 3rd parameter is true ) at this case Event  Capturing happens
// dadu.addEventListener('click',function(){
//     console.log("dadu");
// },true)
// papa.addEventListener('click',function(){
//     console.log("papa");
// },true)
// beta.addEventListener('click',function(){
//     console.log("beta");
// },true)



// dadu.addEventListener('click',function(){
//     console.log("dadu");
// },true)
// papa.addEventListener('click',function(){
//     console.log("papa");
// })
// beta.addEventListener('click',function(){
//     console.log("beta");
// },true)
// on clicking 3 output is--> dadu beta papa



// dadu.addEventListener('click',function(){
//     console.log("dadu");
// })
// papa.addEventListener('click',function(){
//     console.log("papa");
// })
// beta.addEventListener('click',function(){
//     console.log("beta");
// },true)
//on clicking 3 output is---> beta papa dadu


//Now our problem is that if we click on beta our papa and dadu function are also triggered that is the problem for us.

//for resolving this problem i have e.stopPropagation

// dadu.addEventListener('click',function(e){
//     console.log("dadu");
// })
// papa.addEventListener('click',function(e){
//     console.log("papa");
// })
// beta.addEventListener('click',function(e){
//     e.stopPropagation();
//     console.log("beta");
// },true)
//while clicking on 3  dadu is Event bubbling , papa is Event bubbling and beta isEvent  capturing. beta is printed after that i add e.stopPropagation() by which our journey stops now papa and dadu will not printed.
//output is---> beta



// dadu.addEventListener('click',function(e){
//     e.stopPropagation();
//     console.log("dadu");
// },true);
// papa.addEventListener('click',function(e){
//     e.stopPropagation();
//     console.log("papa");
// },true);
// beta.addEventListener('click',function(e){
//     e.stopPropagation();
//     console.log("beta");
// },true)
//while clicking on 3 only dadu is printed because after that our propagation stops and no other will run.



// dadu.addEventListener('click',function(e){
//     e.stopPropagation();
//     console.log("dadu");
// },false);
// papa.addEventListener('click',function(e){
//     e.stopPropagation();
//     console.log("papa");
// },true);
// beta.addEventListener('click',function(e){
//     e.stopPropagation();
//     console.log("beta");
// },true)
//while clicking on 3 papa is printed because while we reach to section1 our dadu is not printed because it is bubbling event and if our event is bubbling then our function will not run at this time after moving from down to top it will run
//after that our section2 will run and papa is printed and e.stopPropagation() occurs and our propagation stops.



dadu.addEventListener('click',function(e){
    e.stopPropagation();
    console.log("dadu");
},false);
papa.addEventListener('click',function(e){
    e.stopPropagation();
    console.log("papa");
},false);
beta.addEventListener('click',function(e){
    e.stopPropagation();
    console.log("beta");
},false);
//in this case by clicking on any section only same section gets printed.




//-------------------------------------------------------------------------------------------------------------


//basics

// let btn=document.querySelector('button');

// function hello(){
//     console.log("hello");
// }
// function hii(){
//     console.log("hii");
// }

// // btn.onclick=hello;
// // btn.onclick=hii;//hello function gets override by hii

// //i can only run one function at a time. this is a problem of onClick . For resolve this problem we are using add event listener


// btn.addEventListener('click',hello);
// btn.addEventListener('click',hii);

//-----------------------------------------------------------------------------------------------------------------------
