function bringit() {
	document.querySelector('#first').onclick = announce1;

	var list = document.querySelectorAll("#second");
	for(var i = 0; i < list.length; i++){
		list[i].onclick = announce2;
	}

	var anotherList = document.querySelectorAll("#last");
	anotherList[0].onclick = announce3;
}

function announce1() {
	alert("You clicked me!")
}

function announce2() {
	alert("That was fun!")
}

function announce3() {
	alert("THANK YOU!")
}
window.onload = bringit;


function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
	var data = ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(data));
	ev.preventDefault();
}


function doit() {
	var button = document.getElementById("button");
	button.addEventListener("click", saveit, false);

	display();
}

function saveit() {
	var one = document.getElementById("one").value;
	var two = document.getElementById("two").value;
	sessionStorage.setItem(one, two);

	display();
	document.getElementById("one").value = "";
	document.getElementById("two").value = "";
}

function display() {
	var rightbox = document.getElementById("rightbox");
	rightbox.innerHTML = "";

	for(var x = 0; x < sessionStorage.length; x++) {
		var a = sessionStorage.key(x);
		var b = sessionStorage.getItem(a);
		rightbox.innerHTML += a + " / " + b + "<br>";
	}
}


window.addEventListener("load", doit, false);
