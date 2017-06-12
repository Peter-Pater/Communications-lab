var videocompositor;
window.addEventListener('load', function() {
	var canvas = document.querySelector('#video');
	canvas.width = 640;
	canvas.height = 360;
	videocompositor = new VideoCompositor(canvas);

	var playButton = document.querySelector('#play');
	var pauseButton = document.querySelector('#pause');

	playButton.addEventListener('click', function() {
		videocompositor.play();
	});

	pauseButton.addEventListener('click', function() {
		videocompositor.pause();
	});

	var playlist = {
		"tracks":[
	                [
	                    {
	                        type:"video",
	                        id:"clip-1",
	                        src:"catgreenscreen.mp4",
	                        start:1,
	                        duration:120
	                    }
	                ],
	                [
	                    {
	                        type:"image",
	                        id:"bg-image",
	                        src:"apocalypse.jpg",
	                        start:4,
	                        duration:10
	                    },
	                    {
	                        type:"image",
	                        id:"bg-image2",
	                        src:"forrest.jpg",
	                        start:20,
	                        duration:10
	                    }
	                ]
	            ],
			"effects": {
				"greenscreen-effect": {
	                "inputs":["clip-1"],
	                "effect":VideoCompositor.Effects.GREENSCREEN,
	                "parameters":{
	                    "yLowerThreshold": 0.1,
	                    "yUpperThreshold": 1.0
	             	}
	        	}
			}
		};

	videocompositor.playlist = playlist;

	var visCanvas = document.getElementById('visualization');
    visCanvas.width = 640;
    visCanvas.height = 30;
    VideoCompositor.renderPlaylist(playlist, visCanvas);
});









