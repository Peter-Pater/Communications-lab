var webcam = document.querySelector('#webcam');

var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

var capture = document.querySelector('#capture');

canvas.width = webcam.offsetWidth;
canvas.height = webcam.offsetHeight;

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

if (navigator.getUserMedia) {
	console.log(navigator);
	navigator.getUserMedia( {video:true}, videoHandler, videoError);
}

function videoHandler(stream) {
	webcam.src = window.URL.createObjectURL(stream);
}

function videoError(error) {
	console.log(error);
}

capture.addEventListener('click', function() {
	
	window.requestAnimationFrame(captureWebcam);
});

function captureWebcam() {
	context.save();
	context.translate(canvas.width, 0);
	context.scale(-1,1);
	context.drawImage(webcam, 0, 0, canvas.width/2, canvas.height);
	context.drawImage(webcam, canvas.width/2, 0, canvas.width/2, canvas.height);
	context.restore();
	setTimeout( function() {
		window.requestAnimationFrame(captureWebcam);

	}, 500);
}









