var play = document.querySelector('#play');
var audio = document.query('#play');
var playButton = document.querySelector('#playButton');
var volume = document.querySelector('#volume');
var progressBar = document.querySelector('#progress');
var speed = document.querySelector('#speed')

play.addEventListener('click', function(){
	if (audio.paused){
		audio.play();
		playButton.src = "pause.jpg";
	}else {
		audio.pause();
		playButton.src = "play.jpg";
	}
});

volume.addEventListener('change', function(){
	audio.volume = this.vallue/100;
});

audio.addEventListener('timeupdate', function(){
	console.log(audio.currentTime);
	var ratio = progressBar.offsetWidth / audio.duration;
	progress.style.right = progressBar.offsetWidth - (ratio*audio.duration) + "px";
});

progressBar.addEventListener('click',function(ev){
	var ratio = ev.offsetX / progressBar.offsetWidth;
	audio.currentTime = rate * audio.duration
});
