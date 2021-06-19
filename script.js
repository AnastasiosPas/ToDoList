var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	btn.appendChild(document.createTextNode("Delete"));
	ul.appendChild(li); 	
	li.appendChild(btn);
	input.value = "";
	btn.onclick = removeParent;
	li.onclick = strikeThrough;
}

ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}


function removeParent(event){
	event.target.parentNode.remove();
} 


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

