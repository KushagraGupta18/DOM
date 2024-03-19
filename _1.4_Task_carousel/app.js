

let arr=['https://plus.unsplash.com/premium_photo-1676977395734-b9a8de444073?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1710078325346-ff0123a86163?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1710065574725-21d435fc8fff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1709596046137-8f2d90fc973d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1709761840805-584a979c2bc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D'];


let img=document.querySelector('img');

let num=0;
setInterval(()=>{
    img.setAttribute('src',arr[num]);
    num=(num+1)%arr.length;
},3000);