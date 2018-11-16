"use strict";
/* Added from book example */
var formValidity = true;

function validateText() {
    var inputElements = document.querySelectorAll("#textfield input");
    var errorDiv = document.querySelectorAll("#textfield .errorMessage")[0];
    var fieldsetValidity = true;
    var elementCount = inputElements.length;
    var currentElement;
    try {
        for (var i = 0; i < elementCount; i++) {
            currentElement = inputElements[i];
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255,233,233)";
                currentElement.style.border = "3px solid red";
                fieldsetValidity = false;
            } else {
                currentElement.style.background = "white";
                currentElement.style.border = "";
            }
        }
        
        if (fieldsetValidity === false) {            
                throw "Please fill out all text fields!";            
        } else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        }
    } catch (msg) {        
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}
function validateSelectors() {
    var inputElements = document.querySelectorAll("#dropdownfield select");
    var errorDiv = document.querySelectorAll("#dropdownfield .errorMessage")[0];
    var fieldsetValidity = true;
    var elementCount = inputElements.length;
    var currentElement;
    try {
        for (var i = 0; i < elementCount; i++) {
            currentElement = inputElements[i];
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255,233,233)";
                fieldsetValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }
        currentElement = document.querySelector("#dropdownfield select");        
        if (currentElement.selectedIndex === -1) {
            currentElement.style.border = "3px solid red";
            fieldsetValidity = false;
        } else {
            currentElement.style.border = "";
            }
            if (fieldsetValidity === false) {            
                    throw "Please make a selection!";            
            } else {
                errorDiv.style.display = "none";
                errorDiv.innerHTML = "";
        }
    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}
function validateComment() {
    var comment = document.querySelector("#textfield textarea");
    var errorDiv = document.querySelector("#textfield .errorMessage");
    var msgBox = document.getElementById("comment");
    try {
        if (msgBox.value === "") {
            comment.style.border = "3px solid red";
            comment.style.background = "rgb(255,233,233)";
            throw "Please enter a comment!";
            
        } else {
            errorDiv.style.display = "none";
            comment.style.border = "none";
            msgBox.style.background = "white";
        }
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    formValidity = true;
    validateText();
    validateSelectors();
    validateComment();
    
    if (formValidity === true) {
        document.getElementById("errorText").innerHTML = "";
        document.getElementById("errorText").style.display = "none";
        document.getElementsByTagName("form")[0].submit();
    } else {
        document.getElementById("errorText").innerHTML = "Please fix issues listed below.";
        document.getElementById("errorText").style.display = "block";
        scroll(0, 0);          
    }
}


var form = document.getElementsByTagName("form")[0];
if (form.addEventListener) {
    form.addEventListener("submit", validateForm, false);
} else if (form.attachEvent) {
    form.attachEvent("onsubmit", validateForm);
}
function removeSelectDefaults() {
    var emptySelect = document.getElementsByTagName("select");
    for (var i = 0; i < emptySelect.length; i++) {
        emptySelect[i].selectedIndex = -1;
    }
}
function submit() {
    document.getElementById("submitText").innerHTML = "You clicked a button!";
}
if (window.addEventListener) {
    window.addEventListener("load", removeSelectDefaults, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", removeSelectDefaults);
}