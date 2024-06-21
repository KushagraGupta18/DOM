

//selecting the input
let titleEl=document.getElementById('title');

//selecting the ul
let listEl=document.getElementById('list');

//selecting my btn for the event
let btn=document.getElementById('add-btn');


btn.addEventListener('click',function(){
    
    //creating an element to add in unordered list
    let li=document.createElement('li');
    
    // extracting the value from input and inserting the text iside li from the input value
    li.innerText=titleEl.value;
    //clear krdo apne input ko
    titleEl.value='';
    //append li in list
    listEl.appendChild(li);


    //remove the li after clicking on the li
    li.addEventListener('click',function(){
        li.remove();
    });
})


