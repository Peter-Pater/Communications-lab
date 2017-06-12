var startButton = document.querySelector('#startButton');
var buttonDiv = document.querySelector('#buttonDiv');
var inputDiv1 = document.querySelector('#inputDiv1');
var inputDiv2 = document.querySelector('#inputDiv2');
var inputButton1 = document.querySelector('#inputButton1');
var inputButton2 = document.querySelector('#inputButton2');
var inputBox1 = document.querySelector('#inputBox1');
var inputBox2 = document.querySelector('#inputBox2');
var piccontainer = document.querySelector('#piccontainer');
var backgroundScene = document.querySelector('#background');
// var photo = document.querySelector('#photo');
var bgimg = document.querySelector('#backgroundimg')
var element = document.querySelector('#element');
var element1 = document.querySelector('#element1')

var musicPic = document.querySelector('#musicPic');
var music = document.querySelector('#music')
var musicIndex = 0;


var video = document.getElementById('video');
var canvas1 = document.querySelector('#canvas1');
var ctx1 = canvas1.getContext('2d');
var canvas2 = document.querySelector('#canvas2');
var ctx2 = canvas2.getContext('2d');
var captureButton = document.querySelector('#capture');
var image = new Image();
var capture_div = document.querySelector('#capture_div');
var nextButton = document.querySelector('#next');


var count = 0;
var prompts = ["Please input a boy's name",
		"Please input the name of your favorite male professor",
		"Please input the name of your favorite female professor",
		"Please input a verb (phrase)",
		"Please input a place",
		"Please input a kind of food",
		"Please input an exclamation"]
var values = [];
var prompt = document.querySelector('#prompt');
var gender = '';


startButton.addEventListener('click', function() {
	buttonDiv.style.display = 'none';
	inputDiv1.style.display = 'block';
})


inputButton1.addEventListener('click', function(){
	if (inputBox1.value == 'male' || inputBox1.value == 'female'){
		gender = inputBox1.value;
		inputDiv1.style.display = 'none';
		inputDiv2.style.display = 'block';
	}
});

inputButton2.addEventListener('click', function(ev) {
	if (inputBox2.value && count <= 6) {
	values.push( inputBox2.value.toUpperCase() );
	count += 1;
	prompt.innerHTML = prompts[count];
	inputBox2.value = ''
	}
	if (count === 7) {
		inputDiv2.style.display = 'none';

		$("#element").typed({
        strings: ["Now, take a pretty photo of you!                             "],

        typeSpeed: 0.3,
        showCursor: false,
        callback: function() {
        	element.style.display = 'none';
			capture_div.style.display = 'block';
			navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
			navigator.getUserMedia({video:true}, gotStream, noStream);
        }
      });
	}
});


inputBox1.addEventListener('keyup',function(ev){
    if(ev.keyCode == 13){
        inputButton1.click();
    }
});

inputBox2.addEventListener('keyup',function(ev){
    if(ev.keyCode == 13){
        inputButton2.click();
    }
});

// ================================================================================================
// 									the web cam!!!!
// ================================================================================================
function noStream(err) {
 	alert(err);
}


function gotStream(stream) {
	video.src = URL.createObjectURL(stream);


	video.onerror = function () {
		stream.stop();
	};


	stream.onended = noStream;


	// video.onloadedmetadata = function () {
	// 	alert('the camera is opened!');
	// };
}


captureButton.addEventListener('click', function(){
	video.style.display = 'none';
	canvas1.style.display = 'inline';
	ctx1.drawImage(video,0,0,640,480);
	image.src = canvas1.toDataURL("image/png");
	// ctx1.drawImage(image,0,0,320,240);
	captureButton.style.display = 'none';
	nextButton.style.display = 'inline';
	// ctx.drawImage(image,0,0,320,240);
	// document.createElement('img');
	// image2 = getElementById('img');
	// image2.src = image.src;
});


//console.log(values);


musicPic.addEventListener('click',function(){
	if (musicIndex != 2){
		musicIndex = musicIndex + 1;
	} else{
		musicIndex = 0;
	}
	var src = musicIndex + ".mp3"
	music.src = src
	music.play();
});


nextButton.addEventListener('click', function(){
	capture_div.style.display = 'none';
	$("#element1").typed({
        strings: ["You, " + values[0] +
        ", are in a coffee bar with HER, just like before. You look into her beautiful eyes..."
        + "\n" + "                          "],
        typeSpeed: 0.3,
        showCursor: false,
        callback: function() {
        	element1.style.display = 'none';
			$(".fadeinimg").fadeIn(4500);
			music.play();
        }
      });
});




var state = 0;
var boy_lines = ["^1000......?",
				"^1000!!!!!!",
				'^1000💔',
				' ',
				"^1000......",
				' ', '^1000( ⊙ o ⊙ )', '^1000......', '^1000😱', ' ', ' ', ' ', ' ', '... ...MEOW... ...']


var lines = document.querySelector('#lines');
var mylines = document.querySelector('#mylines');
var lineindex = 0;

var phone = document.querySelector('#phone');
var phoneopen = false;


bgimg.addEventListener('click', function(ev) {
	var girl_lines_a = [values[0] + ", my dear, I'm afraid that we cannot hang out this often any more...",
			"Yesterday a rich guy named " + values[1] + " said he likes me and asked me to be his girlfriend.",
			"And I said yes.",
			"I can show you his photo.",
			"I met him at "+ values[4] + " and he was eating " + values[5] + ". You know, " + values[5] + " is my favorite food, so we chatted for a while.",
			"He then told me that he runs a business of selling " + values[5] + " and made lots of money.",
			"He really made good " + values[5] + " and everytime I eat what he made I will shout out " + values[6],
			"Don't be sad. You remember " + values[2] + ", the pretty girl who came with me the other day?",
			"Actually she had a crush on you. I can set you two up.",
			"Don't show me this face. You know I will always have feelings for you. But life still goes on, babe.",
			"I saw you and " + values[2] + ' ' + values[3] + " happily that time. I'm sure you two would be happy together.",
			"She REALLY loves CATS... Well, who doesn't!",
			"Except my boyfriend, he is allergic to animal fur... So I have to leave you...",
			"^1000THE END"]
	var girl_lines_b = [values[0] + ", my dear, I'm afraid that we cannot hang out this often any more...",
			"Yesterady a rich guy named " + values[1] + " said he likes me and asked me to be his girlfriend.",
			"And I said yes.",
			"I met him at "+ values[4] + " and he was eating " + values[5] + ". You know, " + values[5] + " is my favorite food, so we chatted for a while.",
			"He then told me that he runs a business of selling " + values[5] + " and made lots of money.",
			"He really made good " + values[5] + " and everytime I eat what he made I will shout out " + values[6],
			"Don't be sad. You remember " + values[2] + ", the pretty girl who came with me the other day?",
			"You don't? Here is her photo.",
			"Actually she had a crush on you. I can set you two up.",
			"Don't show me this face. You know I will always have feelings for you. But life still goes on, babe.",
			"I saw you and " + values[2] + ' ' + values[3] + " happily that time. I'm sure you two would be happy together.",
			"She REALLY loves CATS... Well, who doesn't!",
			"Except my boyfriend, he is allergic to animal fur... So I have to leave you...",
			"^1000THE END"]
	// lines.innerHTML = girl_lines_a[lineindex]
	if (lineindex < 14) {
		if (gender == 'female') {
			if (updateState_b()) updateBgimg('b');
			updateLines_b(girl_lines_b,ev);
		}
		else if (gender == 'male') {
			if (updateState_a()) updateBgimg('a');
			updateLines_a(girl_lines_a,ev);
		}
	}
	if (lineindex > 13) {
		bgimg.src = 'images/ending.gif'
	}
});



	// else {
	// 	backgroundScene.style.display = 'none';
	// 	photo.style.display = 'inline';
	// 	ctx2.drawImage(image,0,0,640,480);
	// 	console.log('drawn!');
	// }


function updateState_a() {
	var oldstate = state;
	if (lineindex >= 0 && lineindex < 3) {
		state = 0;
	}
	else if (lineindex >= 3 && lineindex < 6) {
		state = 1;
		lines.style.right = "62vw";
	}
	else if (lineindex >= 6 && lineindex < 8) {
		state = 2;
		lines.style.right = "12vw";
	}
	else if (lineindex >= 8 && lineindex < 10) {
		state = 3;
		lines.style.right = "62vw";
	}
	else {
		state = 4;
		lines.style.right = "12vw";
	}
	console.log(state);
	if (oldstate != state) return true;
	return false;
 }

 function updateState_b() {
	var oldstate = state;
	if (lineindex >= 0 && lineindex < 3) {
		state = 0;
	}
	else if (lineindex >= 3 && lineindex < 5) {
		state = 1;
		lines.style.right = "62vw";
	}
	else if (lineindex >= 5 && lineindex < 7) {
		state = 2;
		lines.style.right = "16vw";
	}
	else if (lineindex >= 7 && lineindex < 10) {
		state = 3;
		lines.style.right = "62vw";
	}
	else {
		state = 4;
		lines.style.right = "16vw";
	}
	console.log(state);
	if (oldstate != state) return true;
	return false;
 }

 function updateLines_a(line,ev) {
	if (!phoneopen) {
		if (state == 1 && ev.offsetX > 0.418 * bgimg.offsetWidth && ev.offsetX < 0.479 * bgimg.offsetWidth && ev.offsetY > 0.773 * bgimg.offsetHeight && ev.offsetY < 0.86 * bgimg.offsetHeight) {
			console.log('click');
			phone.style.display = 'block';
			canvas2.style.display = 'inline';
			ctx2.drawImage(image,24,0,360,270);
			phoneopen = true;
		}
		else {
			$("#lines").typed({
			    strings: [line[lineindex]],
			    typeSpeed: 20,
			    showCursor: false,
			    callback: function() {
			    	console.log('s' + lineindex);
			    	//if ( lineindex-1 == 0 || lineindex-1 == 1 || lineindex-1 == 4 ) {
		    		console.log(lineindex);
		    		$("#mylines").typed({
				        strings: [boy_lines[lineindex-1]],
				        typeSpeed: 30,
				        showCursor: false,
				    });
				    console.log(boy_lines[lineindex-1]);
			    	//}
			    }
			});
			lineindex += 1
		}
	}
	else {
		phone.style.display = 'none';
		canvas2.style.display = 'none';
		phoneopen = false;
	}
}

 function updateLines_b(line,ev) {
 	if (!phoneopen) {
			if (state == 3 && ev.offsetX > 0.418 * bgimg.offsetWidth && ev.offsetX < 0.479 * bgimg.offsetWidth && ev.offsetY > 0.773 * bgimg.offsetHeight && ev.offsetY < 0.86 * bgimg.offsetHeight) {
				console.log('click');
				phone.style.display = 'block';
				canvas2.style.display = 'inline';
				ctx2.drawImage(image,24,0,360,270);
				phoneopen = true;
			}
			else {
				$("#lines").typed({
				    strings: [line[lineindex]],
				    typeSpeed: 20,
				    showCursor: false,
				    callback: function() {
				    	console.log('s' + lineindex);
				    	//if ( lineindex-1 == 0 || lineindex-1 == 1 || lineindex-1 == 4 ) {
				    		console.log(lineindex);
				    		$("#mylines").typed({
						        strings: [boy_lines[lineindex-1]],
						        typeSpeed: 30,
						        showCursor: false,
						    });
						    console.log(boy_lines[lineindex-1]);
				    	//}
				    }
				});
				lineindex += 1
			}
	}
	else {
			phone.style.display = 'none';
			canvas2.style.display = 'none';
			phoneopen = false;
	}
 }

function updateBgimg(gdr) {
 	for (var i = 0; i < 5; i++) {
 		if (state == i) {
 			var bgimgsrc = 'images/' + i + '.' + gdr + '.png'
 			bgimg.src = bgimgsrc
 		}
 	}
}
