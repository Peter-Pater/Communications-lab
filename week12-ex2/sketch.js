var x = 10;
var y = 5;
var xspeed = 5;
var yspeed = 5;
var names = ['Owen'];

function setup(){
	createCanvas(640, 480);
	inputName = createInput("");
	inputName.style('display', 'block');
	inputName.attribute('placeholder', 'Add your name');
	inputButton = createButton('Add a ball!');
	inputButton.mousePressed(nameHandler);
	textAlign('CENTER');
}

function draw(){
	background(0);
	fill('yellow')
	stroke(0);
	ellipse(x,y,60,60);
	text(names[0],x,y)
	x = x + xspeed;
	y = y + yspeed;
	if (x > 620 || x < 0){
		xspeed = -xspeed;
	}
	if (y > height || y < 0){
		yspeed = - yspeed
	}
}


function nameHandler(){
  
}