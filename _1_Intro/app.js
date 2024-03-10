




// console.log(document);  //it will give object that is our entire html

// 1. document.getElementsByTagName('any_tag');--->this returns an array(html collections)

// console.log(document.getElementsByTagName('h1'));//it will returning an array(collections like an object) that contains all the h1 elements.
// let h1Arr=document.getElementsByTagName('h1');
// console.log(h1Arr[0]);
// console.log(h1Arr[1]);


//loop
// for(let item of h1Arr){
//     console.log(item);
// }




// let para=document.getElementsByTagName('p');
// for(let item of para){
//     console.log(item);
// }


// for(let item of para){
//     item.style.color='red';
//     item.style.border='2px solid purple';
// }




//2. document.getElementById('id');-->return a single element.

// let id= document.getElementById('kush');
// // console.log(id);
// id.style.fontSize='40px';



//3. document.getElementsByClassName('class');--->returns an array(html collections)

// let para=document.getElementsByClassName('dom');
// console.log(para);
// for(let item of para){
//     item.style.color='orange';
// }



//4. querySelector--->  it always return a single element

// let h1=document.querySelector('h1');    
// console.log(h1);    //it return a single element not an array it gives first element with h1 tag that came firstly in our html page


// let dom=document.querySelector('.dom');
// console.log(dom);   //it return a single element not an array it gives first element with dom class that came firstly in our html page


// let kush=document.querySelector('#kush');
// console.log(kush);  //it return a single element not an array it gives first element with kush id that came firstly in our html page



//5. querySelectorAll--->   it returns a NodeList(same as array)

// let h1=document.querySelectorAll('h1');    
// console.log(h1);    //it returns a NodeList(same as array)


// let dom=document.querySelectorAll('.dom');    
// console.log(dom);   //it returns a NodeList(same as array)


// let kush=document.querySelectorAll('#kush');    
// console.log(kush);  //it returns a NodeList(same as array)


