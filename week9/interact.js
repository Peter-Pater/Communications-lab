var video = document.querySelector('#supercoolvideo');
var catButton = document.querySelector('#cat');

catButton.addEventListener('click', function() {
	video.src = "catgreenscreen.mp4";
});

video.addEventListener('click', function(event) {
	//console.log(event.offsetX, event.offsetY);
	//console.log(this.offsetWidth, this.offsetHeight);
	var sectionWidth = this.offsetWidth / 3;
	if (event.offsetX < sectionWidth) {
		video.src = "bird.mp4";
	} else if (event.offsetX > sectionWidth && event.offsetX < sectionWidth *2) {
		video.src = "lion.mp4";
	} else {
		video.src = "main.mp4";
	}
});