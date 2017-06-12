var nameBtn = document.getElementById('name-btn');
var nameInput = document.getElementById('name-input');
var dogDiv = document.getElementById('dog');

nameBtn.addEventListener('click', function(ev) {
	var name = nameInput.value;
	var res = document.getElementById('name-res');
	if (name) {
		res.innerHTML = "Hello " + name;
		dogDiv.style.display = 'block';
	} else {
		res.innerHTML = "Please write your name dummy.";
	}
});

$('.dog').on('click', function() {
	var $dogMsg = $('#dog-msg');
	if (this.id == "dog1") {
		$dogMsg.html("Cool.");
	} else {
		$dogMsg.html("That's not a dog.");
	}
});

window.addEventListener('scroll', function() {
	var dog1 = document.getElementById('dog1');
	var dog2 = document.getElementById('dog2');
	dog1.style.left = window.scrollY/12 + "px";
	dog2.style.right = window.scrollY/12 + "px";
});






