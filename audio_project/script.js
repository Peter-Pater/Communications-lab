var play = document.querySelector('#play');
var playButton = document.querySelector('#playButton');

var pause = document.querySelector('#pause')
var audio = document.querySelector('#audio')

var progressBar = document.querySelector('#progress-bar');
var progress = document.querySelector('#progress');

play.addEventListener('click', function() {
	if (audio.paused) {
		audio.play();
	}
});

pause.addEventListener('click', function() {
	if (audio.paused == false) {
		audio.pause();
	}
});

audio.addEventListener('timeupdate', function() {
	var ratio = audio.currentTime / audio.duration;
	progress.style.right = progressBar.offsetWidth - ( ratio*progressBar.offsetWidth ) + "px";
});

progressBar.addEventListener('click', function(ev) {
	var ratio = ev.offsetX / progressBar.offsetWidth;
	audio.currentTime = ratio * audio.duration;
});

// var audio = document.querySelector('#audio');

// for (;;){
// 	if(audio.paused){
// 		audio.play();
// 	}else{
// 		break;
// 	}
// }
