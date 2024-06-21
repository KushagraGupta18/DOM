


let canvas=document.querySelector('canvas');
//brush=context

let ctx=canvas.getContext('2d');


// ctx.fillStyle='red';//first i have to dip my brush in paint after that make a rectangle
// ctx.fillRect(100,200,150,50);//x,y,width,height


// ctx.strokeStyle='green';//this brush is for rstroke brush
// ctx.strokeRect(100,200,100,100);





//path
// ctx.beginPath();
// ctx.moveTo(40,40);
// ctx.lineTo(100,120);
// ctx.lineTo(200,220);
// ctx.lineTo(10,10);
// ctx.lineTo(50,50);
// ctx.stroke();


//triangle

// ctx.beginPath();
// ctx.moveTo(100,100);
// ctx.lineTo(150,150);
// ctx.lineTo(50,150);
// ctx.lineTo(100,100);
// ctx.stroke();
// ctx.fill();
// ctx.closePath();



//drawing text


ctx.font='28px sans-serif';
ctx.fillStyle='cyan';
ctx.fillText('SACHIN',140,100);
