var enter = document.getElementById("enter");
var input = document.getElementById("userinput");
var items = document.querySelector("ul");

var li = document.querySelectorAll("li");


var dels = document.getElementsByClassName("del");


function strikeThrough() {
    this.classList.toggle("done");
}

function triggerStrikeThroughs(li) {
    for (i = 0; i < li.length; i++)
        li[i].addEventListener("click", strikeThrough);
}

function removeButton() {
    this.parentNode.remove();
}

function createListElement() {
    var lis              = document.createElement("li");
    var button           = document.createElement("button");
        button.innerHTML = "Delete";
        button.addEventListener("click", removeButton);

    lis.appendChild(document.createTextNode(input.value));
    lis.appendChild(button);
    items.appendChild(lis);
    input.value = "";
    lis.addEventListener("click", strikeThrough);
}

function createElementOnClick() {
    if (input.value.length > 0) {
        createListElement();
    }
}


function createElementOnEnter() {
    if (input.value.length > 0 && event.keyCode === 13) {
        createListElement();
    }
}

enter.addEventListener("click", createElementOnClick);
input.addEventListener("keypress", createElementOnEnter);

triggerStrikeThroughs(li);
