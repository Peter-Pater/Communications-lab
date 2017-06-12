var player = document.querySelector('video');

var mouseX = 0;
var videoDuration = 0;
var width = window.innerWidth;

document.addEventListener('mousemove', function(event) {
	mouseX = event.offsetX;
});

function scrub() {
	player.currentTime = ( mouseX / width ) * videoDuration;
	window.requestAnimationFrame(scrub);
}

player.addEventListener( 'loadeddata', function(){
	videoDuration = player.duration;
	window.requestAnimationFrame(scrub);
});