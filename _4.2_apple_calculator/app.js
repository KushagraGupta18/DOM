



let buttons=document.querySelectorAll('button');//it returns a nodelist like a array

let input=document.querySelector('input');//it returns an element


for(let button of buttons){
    button.addEventListener('click',function(e){
        e.preventDefault();
        let btntxt=e.target.innerText;
        if(btntxt==='C'){
            input.value='';
        }
        else if(btntxt==='='){
            try{
                input.value=eval(input.value);
            }
            catch(err){
                
                input.value='Error' //invalid
            }
            setTimeout(()=>{
                input.value='';
            },10000)
        }
        else{
            input.value+=btntxt;
        }
    })
}