var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var R = 200;
var r = 140;
var d = 70;
var teta = 0;
var timer;

function spiro() {
	x = (R - r) * Math.cos(teta) + d * Math.cos( (R-r) * teta / r );
	y = (R - r) * Math.sin(teta) - d * Math.sin( (R-r) * teta / r );

	teta = teta + 0.1;
	
	ctx.fillStyle = "white";
	ctx.fillRect(300 + x, 300 + y, 2, 2);

    timer = setTimeout(spiro, 50);
}
spiro();



