var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

// for ( var i = 0; i<256; i++) {
// 	var x = Math.random() * window.innerWidth;
// 	var y = Math.random() * window.innerHeight;
// 	  var red = Math.random() * i * 10;
// 	  var green = Math.random() * i * 10;
// 	  var blue = Math.random() * i * 10;
// 	context.beginPath();
// 	context.arc(x, y, 30, 0, Math.PI * 2, false);
// 	context.strokeStyle = 'rgba(0, '+ green +', 0, ' + Math.random() + ')';
// 	context.stroke();
// }

var x = Math.random()*1000;
var y = Math.random()*1000;
var dx = Math.random()*10;
var dy = Math.random()*10;
 function animate() {
	requestAnimationFrame(animate);
	context.clearRect(0, 0, innerWidth, innerHeight);
	context.beginPath();
    context.arc(x, y, 30, 0, Math.PI * 2, false); 
    context.strokeStyle = 'blue';
    context.stroke();

    // context.moveTo(0, 0);
    // context.lineTo(x, y);
    // context.strokeStyle = 'green';
    // context.stroke();

    // context.moveTo(innerWidth, 0);
    // context.lineTo(x, y);
    // context.stroke();

    // context.moveTo(innerWidth, innerHeight);
    // context.lineTo(x, y);
    // context.stroke();

    // context.moveTo(0, innerHeight);
    // context.lineTo(x, y);
    // context.stroke();

    if (x + 30 > innerWidth || x - 30 < 0) {
        dx= -dx;
    }
    if (y + 30 > innerHeight || y - 30 < 0) {
     	dy = - dy;
    }
    x = x + dx;
    y = y + dy;
}
animate();

