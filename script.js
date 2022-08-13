var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var items = document.querySelectorAll("li");
var ul = document.querySelector("ul");
var button2 = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

//Created the button and appended it to LI.
//bu onclick was added to be able to delete when clicking.
//li onclick was added for the same reason (para que funcione con nuevos items)

function createListElement() {
	var li = document.createElement("li");
	var bu = document.createElement("button");
	bu.innerHTML = "Delete";
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(bu);
	bu.onclick = removeParent;
	input.value = "";
	li.onclick = changeClass;

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



// Toggling the class. The loop is for the items already on the list.
// the function changeCLass is for new items. Doesn't look pretty, but it works.  

for (var i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function() {
        this.classList.toggle("done");
         })
  };

function changeClass(event){
	this.classList.toggle ("done");
}

// To remove the items once the button has been clicked. 
// The first one is for the list.
// The second one is for the new items. It works for both.

for (var i = 0; i < items.length; i++) {
        button2[i].addEventListener("click", function() {
        this.parentElement.remove();
         })
  };

function removeParent(event){
	event.target.parentElement.remove();
};

