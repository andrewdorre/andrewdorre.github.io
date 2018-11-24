/*
CIS166AA - JavaScript
      Chapter 6
      Chapter case project

      Enhance form validation
      
      Author: Andrew Dorre
      Date:   11/18/2018

	  Filename: validation.js
*/
"use strict";
/* Added from book example */

// Start off with formValidity at true. Since a user hasn't entered any info yet at this point,
// there shouldn't be any red or screaming errors yet
var formValidity = true;

// first test the validity of the radio buttons. Make sure one is selected
function validateRadio() {    
    var errorDiv = document.querySelector("#radiofield .errorMessage");
    var fieldsetValidity = true;
    var survey = document.getElementsByName("surveyselect");
    try {
        if (!survey[0].checked && !survey[1].checked && !survey[2].checked && !survey[3].checked && !survey[4].checked) {
            for (var i = 0; i < 5; i++) {
                survey[i].style.outline = "1px solid red";
            }
            fieldsetValidity = false;
        } else {
            for (var i = 0; i < 5; i++) {
                survey[i].style.outline = "";
            }
            fieldsetValidity = true;
        }
        if (!fieldsetValidity) {
            throw "Please select a level of enjoyment!";
        } else {
            errorDiv.style.display = "none";
        }        
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}
// Used the following to create a regular expression that will validate an email address:
// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
    var regex= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

// Next test the validity of all the text fields. Ensure they all have something in them.
// in the case of the email address, I use a function with a regular expression to ensure 
// that it is at least an attempt at an email address
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
        // Making use of my validateEmail function from above. If the second field in the textfield
        // fieldset does not match the regular expression arguments, it'll fail
        if (!validateEmail(inputElements[1].value)) {
            inputElements[1].style.background = "rgb(255,233,233)";
            inputElements[1].style.border = "3px solid red";
            throw "Please submit a correct email address!";
        }
        if (/^[a-zA-Z]+$/.test(document.getElementById("name")) === false) {
            inputElements[0].style.background = "rgb(255,233,233)";
            inputElements[0].style.border = "3px solid red";
            throw "Please submit a valid name!";
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
// Now, test validity of the option selectors
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
// This is for the comment text field. It's a little different than the text input fields
// Gave me a bit of trouble, but after looking over the book examples I finally got it working
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
// This is what happens if anything on the form is not validated
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    formValidity = true;
    validateRadio();
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
// just some code for early testing I did on the page. it could probably be deleted.
/* function submit() {
    document.getElementById("submitText").innerHTML = "You clicked a button!";
} */
if (window.addEventListener) {
    window.addEventListener("load", removeSelectDefaults, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", removeSelectDefaults);
}