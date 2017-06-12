var btn = document.querySelector('#prompt');
var parent = btn.parentElement;
console.log(parent);
console.log("Hello!");
btn.onclick = function() {
	var response = prompt("Where are you from?");
	var r = document.createElement("p");
	r.innerHTML = response;
	parent.insertBefore(r, btn);
}