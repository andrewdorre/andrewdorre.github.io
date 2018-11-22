/*       CIS166AA - JavaScript
      Chapter 8
      Chapter case project

      Form Validation
      
      Author: Andrew Dorre
      Date:   11/22/2018

      Filename: string.js */
"use strict";

// Array to store the checkbox values
var pizzaToppings = [];

// function to add topping values to the array
function addToppings(event) {
    if (event === undefined) {
        event = window.event;
    }
    // "callerElement" stores the variable of the checkbox that is checked
    var callerElement = event.target || event.srcElement;
    // "toppings" holds the value of the checkbox, which is the string
    var toppings = callerElement.value;
    // If the element is checked, "push" the string value of that checkbox to the pizzaToppings array
    if (callerElement.checked) {
        pizzaToppings.push(toppings);
    // Also, like in the book example, I use an unordered list, and add the array nodes to the list
        var newTopping = document.createElement("li");
        newTopping.innerHTML = toppings;
        document.getElementById("toppingslist").appendChild(newTopping);         
    }
    // if a box is unchecked, remove it from the array and "splice" the array back together, and remove the
    // list item from the html
    else {
    // create a variable that holds all of the li elements in the toppingslist list
        var toppingsItems = document.querySelectorAll("#toppingslist li")
    // run a for loop to check each element and remove it if it is unchecked
        for (var i = 0; i < pizzaToppings.length; i++) {
            if (toppingsItems[i].innerHTML === toppings) {
                pizzaToppings.splice(i, 1);
                toppingsItems[i].parentNode.removeChild(toppingsItems[i]);
                break;
            }
        }
    }
}

// Create event listeners on the checkboxes, so that when they are clicked, it triggers
// the javascript
function createEventListeners() {
    var pizToppings = document.getElementsByName("toppings");
    if (pizToppings[0].addEventListener) {
        for (var i = 0; i < pizToppings.length; i++) {
            pizToppings[i].addEventListener("change", addToppings, false);
        }
    } else if (pizToppings[0].attachEvent) {
        for (var i = 0; i < pizToppings.length; i++) {
            pizToppings[i].attachEvent("onchange", addToppings);
        }
    }    
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} 
else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}