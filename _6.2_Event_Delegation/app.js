


let products=document.querySelectorAll('section figure');
// console.log(products);


//not the optimized way
for(let item of products){
    item.addEventListener('click',function(){
        console.log(this.innerText);
    })
}


//dynamically add kroge to dikkat krega


//for optimisation we have event delegation

//Event Delegation---> parent par event lagao rather than child pr

let section=document.getElementById('container');

section.addEventListener('click',function(e){
    // console.log(e.target.nodeName);
    // console.log(e.target.innerText);//it prints value if we click on outside the figure

    if(e.target.nodeName==='FIGURE'){
        console.log(e.target.innerText);
    }
})
