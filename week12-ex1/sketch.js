var x = 10;
var y = 5;
var xspeed = 5;
var yspeed = 5;

function setup(){
	createCanvas(640, 480);
}

function draw(){
	background(0);
	fill('yellow')
	stroke(0);
	ellipse(x,y,60,60);
	x = x + xspeed;
	y = y + yspeed;
	if (x > 620 || x < 0){
		xspeed = -xspeed;
	}
	if (y > height || y < 0){
		yspeed = - yspeed
	}
}
