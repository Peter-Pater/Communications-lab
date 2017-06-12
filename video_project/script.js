var playButton = document.querySelector('#playButton');
var pauseButton = document.querySelector('#pauseButton');
var video = document.querySelector('video');
var progressBar = document.querySelector('#progress-bar');
var progress = document.querySelector('#progress');

playButton.addEventListener('click', function() {
	if (video.paused) {
		video.play();
	}
});

pauseButton.addEventListener('click', function() {
	if (!video.paused) {
		video.pause();
	}
});

video.addEventListener('timeupdate', function() {
	var ratio = video.currentTime / video.duration;
	progress.style.right = 100 - 100*ratio + "%";
});

progressBar.addEventListener('click', function(ev) {
	var ratio = ev.offsetX / progressBar.offsetWidth;
	video.currentTime = ratio * video.duration;
});
