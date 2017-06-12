var player = document.querySelector('video');
var playButton = document.querySelector('#play');
var pauseButton = document.querySelector('#pause');

playButton.addEventListener('click', function() {
	if (player.paused) player.play();
});

pauseButton.addEventListener('click', function() {
	if (!player.paused) player.pause();
});